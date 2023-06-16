import { css } from "@emotion/react";

export const commonStyles = css`
  .navbar {
    padding-top: 52px;

    &-top {
      position: absolute;
      align-items: stretch;
      display: flex;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 30;
    }

    &-menu {
      display: flex;
      flex-grow: 1;
      flex-shrink: 0;
      align-items: stretch;

      img {
        max-height: 1.75rem;
      }
    }

    &-start {
      display: flex;
      justify-content: flex-start;
      margin-right: auto;
    }

    &-end {
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
    }

    &-brand {
      align-items: stretch;
      display: flex;
      flex-shrink: 0;
      min-height: 3.25rem;
    }

    &-item {
      cursor: pointer;
      align-items: center;
      display: flex;
      flex-grow: 0;
      flex-shrink: 0;
      border: none;
      line-height: 1.5;
      padding: 0.5rem 0.75rem;
      position: relative;
      transition: background-color 0.3s ease;
      font-family: "Segoe UI";
      text-decoration: none;

      &:visited {
        text-decoration: none;
      }

      &:hover {
        color: #3273dc;
      }

      img {
        max-height: 1.75rem;
      }

      a {
        font-size: 16px;
        text-decoration: none;

        &:hover {
          color: #3273dc;
        }
      }
    }

    .is-dark {
      cursor: pointer;
      align-items: center;
      display: flex;
      flex-grow: 0;
      flex-shrink: 0;
      text-align: center;
      white-space: nowrap;
      border-width: 1px;
      border: 1px solid transparent;
      line-height: 1.5;
      padding: 0.5rem 0.75rem;
      position: relative;
      transition: background-color 0.3s ease;
      text-decoration: none;
      padding-bottom: calc(0.375em - 1px);
      padding-top: calc(0.375em - 1px);

      &:hover {
        color: #3273dc;
        background-color: #2f2f2f;
        border-color: transparent;
        color: #f5f5f5;
      }

      strong {
        font-size: 16px;
        font-family: "Segoe UI";
        color: #f5f5f5;
      }
    }

    .cat {
      align-items: stretch;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .title-centered {
      text-align: center;
    }

    .title {
      color: #4a4a4a;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.125;
    }

    .text-centered {
      text-align: center;

      img {
        object-fit: cover;
        height: 40rem;
        width: 40rem;
      }
      @media (max-width: 1024px) {
        img {
          height: 30rem;
          width: 30rem;
        }
      }
    }
    
    .another-cat {
      font-family: "Segoe UI";
      background-color: #3273dc;
      border-color: transparent;
      color: #fff;
      cursor: pointer;
      justify-content: center;
      padding-bottom: calc(0.375em - 1px);
      padding-left: 0.75em;
      padding-right: 0.75em;
      padding-top: calc(0.375em - 1px);
      text-align: center;
      white-space: nowrap;
      border-width: 1px;
      align-items: center;
      border: 1px solid transparent;
      border-radius: 4px;
      box-shadow: none;
      display: inline-flex;
      font-size: 1rem;
      height: 2.25em;
      position: relative;
      vertical-align: top;
      text-decoration: none;

      &:hover {
        background-color: #276cda;
        border-color: transparent;
        color: #fff;
      }
    }

    .content-container {
      padding: 1rem;

      .cat-info {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10rem;

        .cat-image {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 2rem;

          img {
            object-fit: cover;
            width: 400px;
            height: 400px;
            border-radius: 4px;
          }
        }

        @media (max-width: 1024px) {
          .cat-image {
            img {
              width: 300px;
              height: 300px;
            }
          }
        }

        .cat-description {
          flex: 0 0 25%;
          display: flex;
          flex-direction: column;

          h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }

    .footer {
      padding: 24px 24px;
      position: fixed;
      margin-top: -20rem;
      bottom: 0;
      overflow: hidden;
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    .is-hidden-desktop {
      display: none;
    }
  }
  .small-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .small-screen .cat-image {
    order: 1;
  }

  .small-screen .cat-description {
    order: 2;
  }
`;

export default commonStyles;
