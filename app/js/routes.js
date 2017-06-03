import React from 'react'
import {Route, IndexRoute} from "react-router";
import Layout from "./components/Layout";
import IndexPage from "./components/Page/IndexPage";

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
    </Route>
);

export default routes;