import { css } from "@emotion/react";
import commonStyles from "./commonStyles";
export const darkStyles = css`
${commonStyles}
html{
  background-color: hsl(0, 0%, 14%);
}
.main {
  background-color: hsl(0, 0%, 14%);
}

.navbar-item {
  background-color: hsl(0, 0%, 14%);
}

.navbar-item:visited {
  color: white;
}

.navbar-item:hover {
  background-color: white;
  color: #3273dc;
}

.navbar-item a:visited {
  color: white;
  text-decoration: none;
}

.navbar-item a:hover {
  color: #3273dc;
}


.title {
  color: white;
}

.text-centered {
  color: white;
}

.content-container {
  background-color: hsl(0, 0%, 14%);
}

.content-container .title {
  color: white;
}

.content-container .cat-info .cat-image h2 {
  color: white;
}

.content-container .cat-info .cat-description h2 {
  color: white;
}

.content-container .cat-info .cat-description p {
  color: white;
}


`;
