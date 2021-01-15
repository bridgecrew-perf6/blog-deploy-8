import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <a href="navermybox://moment?version=22">앱으로 열기</a>
    <a href="https://apps.apple.com/kr/app/%EB%84%A4%EC%9D%B4%EB%B2%84-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-naver-cloud/id585173084">
      앱스토어로 이동
    </a>
    <a href="navermybox://moment?version=22">앱으로 열기</a>
    <a href="navermybox://moment?version=22">앱으로 열기</a>
  </Layout>
);

export default SecondPage;
