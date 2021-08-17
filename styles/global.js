import css from "styled-jsx/css";
import { colors, sizes, font } from "./theme";

const globalStyles = css.global`
  /****************************************************************************
  * Global styles 
  *****************************************************************************/

  * {
    box-sizing: border-box;
    font-size: ${font.size.base};

    @media (min-width: 2300px) {
      font-size: 24px;
    }

    @media (min-width: 3500px) {
      font-size: 32px;
    }

    &:focus-visible {
      outline-color: ${colors.highlight};
      outline-style: dashed;
    }
  }

  #smooth-scroll-container {
    display: flex;
    flex-direction: column;
    height: ${sizes.fullHeight};
  }

  body {
    color: ${colors.textLight};
    font-family: ${font.family};
    line-height: 1.25;
    overflow-x: hidden;
    background-color: black;
    touch-action: manipulation; /* Prevent zoom on double tap */

    &::before {
      content: "";
      position: fixed;
      height: 100vh;
      width: 100vw;
      z-index: -1;
      background-image: linear-gradient(
          45deg,
          hsla(173, 81%, 6%, 0.8) 0%,
          hsla(216, 76%, 13%, 0.8) 100%
        ),
        url("https://res.cloudinary.com/briancross/image/upload/c_scale,e_saturation:-75,f_auto,q_auto:eco,w_1000/v1626757834/brian-cross-personal-site/intro-bg_asyjl9.jpg");

      background-position: 25%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  a {
    color: inherit;
    text-decoration-thickness: 1px;
    text-decoration-color: ${colors.lightTranslucent};

    @media (hover: hover) {
      &:hover {
        color: ${colors.highlight};
        text-decoration-color: ${colors.highlight};
      }
    }
  }

  h1,
  .h1 {
    font-weight: 300;
    font-size: ${font.size.large};
    text-transform: uppercase;
    letter-spacing: 0.25em;
  }

  h2 {
    font-weight: 400;
    font-size: ${font.size.medium};
    text-transform: uppercase;
    letter-spacing: 0.2em;
    line-height: 1.5;
  }

  h3 {
    font-weight: 700;
    font-size: ${font.size.normal};
    text-transform: uppercase;
    letter-spacing: 0.2em;
    line-height: 1.5;
  }

  a,
  p,
  label {
    font-weight: 300;
    font-size: ${font.size.normal};
    letter-spacing: 0.075em;
    text-shadow: 0px 0px 60px black;
  }

  input,
  textarea {
    /* font-size: max(16px, 1rem); */
    font-size: 16px;
    font-weight: 300;
    color: ${colors.textLight};
    background: ${colors.darkTranslucent};
    border-radius: 0.25em;
    border: 1px solid ${colors.lightTranslucent};
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 1.75em;
    padding: 0.5em;
  }

  header,
  footer {
    width: 100%;
    padding: 1em 0;
    display: flex;
    font-weight: 300;
    text-transform: uppercase;
  }

  main {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  /****************************************************************************
  * Utility classes
  *****************************************************************************/
  .btn {
    display: inline-block;
    color: currentColor;
    background: none;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        color: ${colors.highlight};
        border-color: ${colors.highlight};
      }
    }

    &.large {
      font-weight: 400;
      font-size: ${font.size.expanded};
      letter-spacing: 0.15em;
      border: 1px solid currentColor;
      border-radius: 0.25em;
      margin: 1em 0;
      padding: 1em 1.5em;
      width: 100%;

      @media (min-width: ${sizes.mobileBreakpoint}) {
        width: unset;
      }
    }
  }

  .container {
    width: 90%;
    max-width: ${sizes.maxContainerWidth};
    margin: 0 auto;
  }

  .content {
    max-width: ${sizes.maxContentWidth};
  }

  .text-block {
    margin: 2.5rem 0;

    &.large {
      margin: 5rem 0;
    }
  }
`;

export default globalStyles;
