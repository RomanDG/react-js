import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, Route, matchPath, Switch } from 'react-router-dom'
import MainLayout from 'components/layouts/MainLayout';
import prepareData from 'components/helpers/prepareData';

import createStore from 'store';

import { routes } from 'routes';
import Helmet from 'react-helmet';
import request from 'superagent';
 const store = createStore();

export default (req, res) => {
    console.log(req.url)

   
    const promises = []
    routes.some(route => {
        const match = matchPath(req.url, route.url)
        if (match != null)
            promises.push(prepareData(store, { route: route, location: route }))
        return match
    })

    Promise.all(promises).then(data => {

        const initialState = JSON.stringify(store.getState());
        console.log('aaa', store.getState().router.location.pathname)
        const content = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    <MainLayout>
                        {routes.map((route, index) => (<Route key={index} {...route} />))}
                    </MainLayout>
                </StaticRouter>
            </Provider>
        );

        const helmet = Helmet.rewind();

        res.status(200);
        res.render('index', { initialState, content, helmet });
    })
}