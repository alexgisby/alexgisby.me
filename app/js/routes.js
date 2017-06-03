import React from 'react'
import {Route, IndexRoute} from "react-router";
import Layout from "./components/Layout";
import IndexPage from "./components/Page/IndexPage";
import TagPage from "./components/Page/TagPage";

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage} />
        <Route path="tag/:tag" component={TagPage} />
    </Route>
);

export default routes;
