import { Link } from "gatsby";
import React, { FC } from "react";

interface Props {
  title: string;
  content: string;
  pageName: string;
}

const ListItem: FC<Props> = ({ title, content, pageName }) => (
  <Link to={`/${pageName}/`} style={{ textDecoration: "none" }}>
    <div
      className="list_item"
      style={{
        width: "100%",
        height: "150px",
        padding: "16px",
        textDecoration: "none",
      }}
    >
      <h2>{title}</h2>
      <small>{content}</small>
      <a href="navermybox://moment?version=22">앱으로 열기</a>
      <a href="https://apps.apple.com/kr/app/%EB%84%A4%EC%9D%B4%EB%B2%84-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-naver-cloud/id585173084">
        앱스토어로 이동
      </a>
      <a href="navermybox://moment?version=22">앱으로 열기</a>
      <a href="navermybox://moment?version=22">앱으로 열기</a>
    </div>
  </Link>
);

export default ListItem;
