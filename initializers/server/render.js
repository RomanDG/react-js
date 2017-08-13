import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Provider from 'react-redux';
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import MainLayout from 'components/layouts/MainLayout';

import { store,  history} from 'store';

import {routes} from 'routes';
//import Helmet from 'react-helmet';
import request from 'superagent'

const fetchPosts = () => {
    return new Promise((resolve, reject) =>{
        request.get('http://localhost:3001/').end((err, data) => {
            !err ? resolve(data.body) : reject(err)
        })
    })
}


export default (req, res) => {
    const state = { posts: [], searchStr: null }
    const promises = []
    routes.some(route => {
        const match = matchPath(req.url, route)
        if (match)
            console.log(match)
            promises.push(fetchPosts())
        return match
    })

    Promise.all(promises).then(data => {
        const initialState = JSON.stringify(store.getState());
        //const initialState = 'aaa'
        const content = 'bbbb'
        //  const content = ReactDOMServer.renderToString(
        //     <div>
        //     <Provider store={store}>
        //         <StaticRouter location={req.url} context={{}}>
        //             <MainLayout>
        //                 {routes.map((route, index) => (<Route key = {index} {...route}/>))}
        //             </MainLayout>
        //         </StaticRouter>
        //     </Provider>
        //     </div>
        // ); 

        //const helmet = Helmet.rewind();

        res.status(200);
        res.render('index', {initialState, content});
    })
}