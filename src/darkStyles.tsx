import { css } from "@emotion/react";
import commonStyles from "./commonStyles";
export const darkStyles = css`
${commonStyles}
  .navbar {
    height: 100vh;
    background-color: hsl(0, 0%, 14%);

    &-item {
      background-color: hsl(0, 0%, 14%);

      &:visited {
        color: white;
      }
      &:hover {
        background-color: white;
        color: #3273dc; 
      }

      a {
        &:visited {
          color: white;
          text-decoration: none;
        }
        &:hover {
          color: #3273dc; 
        }
      }
      
    }
  

    .is-dark {
      background-color: hsl(0, 0%, 14%);

      strong {
        color: #f5f5f5;
      }
    }

    .title {
      color: white;
    }

    
    }

    .text-centered {
      color: white;
    }


    .content-container {
      background-color: hsl(0, 0%, 14%);

      .title {
        color: white;
      }

      .cat-info {
        .cat-image {
          h2 {
            color: white;
          }
        }

        .cat-description {
          h2 {
            color: white;
          }

          p {
            color: white;
          }
        }
      }
    }

    .footer {
      background-color: hsl(0, 0%, 8%);

      p {
        color: white;
      }
    }
  }
`;
