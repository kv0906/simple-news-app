import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import NewsItem from "../../components/News/NewsItem";
import Loader from "../../components/Loader";

import { get_articles, get_custom_articles } from "../../services/API/Api";

function NewsContainer({ preference, type }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchArticles = async () => {
    setLoading(true);
    const { res } = await get_articles();
    setData(res.data.articles);
    setLoading(false);
  };
  useEffect(() => {
    if (type === "custom") {
      const fetchCustomNews = async () => {
        setLoading(true);
        const { res } = await get_custom_articles(preference);
        setData(res.data.articles);
        setLoading(false);
      };
      fetchCustomNews();
      return;
    }
    fetchArticles();
  }, [preference, type]);
  if (loading) return <Loader />;
  return (
    <Grid container spacing={2}>
      {data.map(data => {
        return <NewsItem data={data} />;
      })}
    </Grid>
  );
}

export default NewsContainer;
