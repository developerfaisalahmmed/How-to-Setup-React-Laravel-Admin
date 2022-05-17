import React, {Component} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "../Pages/HomePage";
import CategoryPage from "../Pages/CategoryPage";

class PageRouter extends Component {
    render() {
        return (
            <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/category" element={<CategoryPage />} />
                        </Routes>
                    </BrowserRouter>
            </div>
        );
    }
}

export default PageRouter;
