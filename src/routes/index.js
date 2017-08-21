import React from 'react';
import PostPath from 'components/helpers/PostPath';
import BlogPage from 'components/BlogPage';
import ContactsPage from 'components/ContactsPage';
import initialLoad from 'components/helpers/initialLoad';
import {fetchPosts} from 'actions/Posts';

export const routes = [
  { 
    exact: true,
    path: '/',
    component: BlogPage,
    prepareData: (store) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPosts());
    }
  },
  { 
    path: '/contacts',
    component: ContactsPage,
  },
  { 
    path: PostPath(),
    component: BlogPage,
  }
];
