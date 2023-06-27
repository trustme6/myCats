import styled from "@emotion/styled";
import React from "react";


const Wrapper = styled.footer<{isDarkMode: boolean}>`
  padding: 16px;
  position: relative;
  bottom:0;
  margin-top: auto; 
  width:100%;
  background-color: ${props => props.isDarkMode ? 'hsl(0, 0%, 8%)' : '#fafafa'};

  p {
    color: ${props => props.isDarkMode ? 'white' : '#333'};
  }
`;

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <Wrapper isDarkMode={isDarkMode}>
      <div className="text-centered">
        <p>Meow</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
