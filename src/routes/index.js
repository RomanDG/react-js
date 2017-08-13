import PostPath from 'components/helpers/PostPath';
import BlogPage from 'components/BlogPage';

export const routes = [
  { 
    exact: true,
    path: '/',
    component: BlogPage,
  },
  { 
    path: PostPath(),
    component: BlogPage,
  }
]
