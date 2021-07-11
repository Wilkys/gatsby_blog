import React, { FunctionComponent } from "react";
import styled from '@emotion/styled';

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank you for visiting my blog. Have a Good Day 😆
      <br />© 2021 Developer Willy, Powered By Gatsby.
    </FooterWrapper>
  )
}
export default Footer;

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;