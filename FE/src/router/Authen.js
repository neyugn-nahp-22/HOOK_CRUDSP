import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import * as pages from '../page'
export default function Authen() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route index path="/" component={pages.StudentPage} />
                </Switch>
            </Router>
        </div>
    );
}
