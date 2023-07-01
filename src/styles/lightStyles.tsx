import { css } from "@emotion/react";
import commonStyles from "./commonStyles";
export const lightStyles = css`
  ${commonStyles}
  
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
