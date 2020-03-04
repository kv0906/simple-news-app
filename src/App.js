import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import TopHeadlines from "./pages/TopHeadlines";
import CustomNews from "./pages/CustomNews";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={TopHeadlines} />
        <Route path="/custom-news" component={CustomNews} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
