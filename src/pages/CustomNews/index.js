import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import Layout from "../../components/Layout";
import NewsContainer from "../../components/News/NewsContainer";
const InfoBox = () => {
  return (
    <div>
      Please register to set up your custom news
      <Button color="primary" component={RouterLink} to="/profile">
        Go to Profile
      </Button>
    </div>
  );
};
function CustomNews() {
  const [preference, setPreference] = useState("");
  useEffect(() => {
    if (localStorage && localStorage.getItem("user") !== null) {
      const user = JSON.parse(localStorage.getItem("user"));
      setPreference(user.preference);
    }
  }, []);
  return (
    <Layout heading={`Custom news with Topic: ${preference.toUpperCase()}`}>
      {preference ? (
        <NewsContainer preference={preference} type="custom" />
      ) : (
        <InfoBox />
      )}
    </Layout>
  );
}

export default CustomNews;
