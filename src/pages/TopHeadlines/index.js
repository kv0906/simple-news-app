import React from "react";
import Layout from "../../components/Layout";
import NewsContainer from "../../components/News/NewsContainer";

function TopHeadlines() {
  return (
    <Layout heading="Top headline news">
      <NewsContainer />
    </Layout>
  );
}

export default TopHeadlines;
