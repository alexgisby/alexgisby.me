import React from 'react'
import {Route, IndexRoute} from "react-router";
import Layout from "./components/Layout";
import IndexPage from "./components/Page/IndexPage";
import TagPage from "./components/Page/TagPage";
import NotFoundPage from "./components/Page/NotFoundPage";

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage} />
        <Route path="/:tag" component={TagPage} />
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;
