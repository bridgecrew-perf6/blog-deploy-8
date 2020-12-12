import { Link } from "gatsby";
import React from "react";

const ListItem = ({ title }: { title: string }) => (
  <Link to="/using-typescript/" style={{ textDecoration: "none" }}>
    <div className="list_item" style={{ width: "100%", height: "150px" }}>
      {/* {title} */}
    </div>
  </Link>
);

export default ListItem;
