const AWS = require("aws-sdk");

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_APP,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_APP,
  },
  region: process.env.AWS_REGION_APP,
});

export default async function mail(req, res) {
  const { name, email, phone, company, url, description } = JSON.parse(
    req.body
  );

  const params = {
    Destination: {
      ToAddresses: [process.env.CONTACT_FORM_TO_ADDRESS],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Name: ${name}\n\nEmail: ${email}\n\nPhone: ${phone}\n\nCompany: ${company}\n\nURL: ${url}\n\nMessage: ${description}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Contact Form Inquiry - briancross.ca",
      },
    },
    Source: `<${process.env.CONTACT_FORM_SOURCE_ADDRESS}>`,
    ReplyToAddresses: [email],
  };

  const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise();

  try {
    const data = await sendPromise;
    return res.status(201).json({ messageId: data.MessageId });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
