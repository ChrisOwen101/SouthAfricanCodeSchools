import React from 'react';
import { Route } from 'react-router';

// Later we can add other 'static' pages, such as /about.
export default (
    <Route>
        <Route path='/:school' />
    </Route>
);