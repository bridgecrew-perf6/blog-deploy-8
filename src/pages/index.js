import React from "react";

import Layout from "../components/layout";

import SEO from "../components/seo";
import ListItem from "./components/listItem";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ListItem title="test" />
  </Layout>
);

export default IndexPage;
