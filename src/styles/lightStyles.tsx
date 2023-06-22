import { css } from "@emotion/react";
import commonStyles from "./commonStyles";
export const lightStyles = css`
${commonStyles}
.navbar {
  &-item {
  
    background-color: #fff;
 
    &:visited{
      color: #4a4a4a;
     }

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    
    }
   

    a {
      color: #4a4a4a;
      &:visited{
        color: #4a4a4a;
        
        text-decoration: none;
       }
     
    }
    &:hover {
      color: #3273dc; 
    }
  }
}

.is-dark {
  background-color: #363636;
  color: #f5f5f5;
}



.title {
  color: #363636;
 
}






.content-container {
 

  .title {
    color: #333;
  }

  .cat-info {

    .cat-image {
     
      h2{
        color: #333;
      }
    }

    .cat-description {
      p {
         color: #333;
      }
    }
  }
}

.footer {
  background-color: #fafafa;
  
   
  p{
   color: #333;
  }
}
}
  `;
