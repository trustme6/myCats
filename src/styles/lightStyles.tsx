import { css } from "@emotion/react";
import commonStyles from "./commonStyles";
export const lightStyles = css`
  ${commonStyles}
  .navbar-item {
    background-color: #fff;
  }

  .navbar-item:visited {
    color: #4a4a4a;
  }

  .navbar-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: #3273dc;
  }

  .navbar-item a {
    color: #4a4a4a;
  }

  .navbar-item a:visited {
    color: #4a4a4a;
    text-decoration: none;
  }

  .title {
    color: #363636;
  }

  .content-container .title {
    color: #333;
  }

  .content-container .cat-info .cat-image h2 {
    color: #333;
  }

  .content-container .cat-info .cat-description p {
    color: #333;
  }
`;
