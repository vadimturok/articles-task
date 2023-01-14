import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from "../../pages/Home/Home";
import ArticlePage from "../../pages/Article/Article";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Home/>}/>
                <Route path={'articles/:articleId'} element={<ArticlePage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;