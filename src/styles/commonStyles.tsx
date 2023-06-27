import { css } from "@emotion/react";

export const commonStyles = css`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 52px;
    height: 100vh;
  }

  .navbar-top {
    position: absolute;
    align-items: stretch;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 30;
  }

  .navbar-menu {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: stretch;
  }

  .navbar-menu img {
    max-height: 1.75rem;
  }

  .navbar-start {
    display: flex;
    justify-content: flex-start;
    margin-right: auto;
  }

  .navbar-end {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
  }

  .navbar-brand {
    align-items: stretch;
    display: flex;
    flex-shrink: 0;
    min-height: 3.25rem;
  }

  .navbar-item {
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
  }

  .navbar-item:visited {
    text-decoration: none;
  }

  .navbar-item:hover {
    color: #3273dc;
  }

  .navbar-item img {
    max-height: 1.75rem;
  }

  .navbar-item a {
    font-size: 16px;
    text-decoration: none;
  }

  .navbar-item a:hover {
    color: #3273dc;
  }

  .is-dark {
    background-color: #2f2f2f;
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
  }

  .is-dark:hover {
    border-color: transparent;
    color: #f5f5f5;
  }

  .is-dark strong {
    font-size: 16px;
    font-family: "Segoe UI";
    color: #f5f5f5;
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
  }

  .text-centered img {
    object-fit: cover;
    height: 40rem;
    width: 40rem;
  }

  @media (max-width: 1024px) {
    .text-centered img {
      height: 30rem;
      width: 30rem;
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
  }

  .another-cat:hover {
    background-color: #276cda;
    border-color: transparent;
    color: #fff;
  }

  .content-container {
    padding: 1rem;
  }

  .content-container .cat-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem;
  }

  .content-container .cat-info .cat-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
  }

  .content-container .cat-info .cat-image img {
    object-fit: cover;
    width: 400px;
    height: 400px;
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    .content-container .cat-info .cat-image img {
      width: 300px;
      height: 300px;
    }
  }

  .content-container .cat-info .cat-description {
    flex: 0 0 25%;
    display: flex;
    flex-direction: column;
  }

  .content-container .cat-info .cat-description h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .content-container .cat-info .cat-description p {
    font-size: 1rem;
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
