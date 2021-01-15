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
    </div>
  </Link>
);

export default ListItem;
