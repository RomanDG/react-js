export const getPosts = (state) => {
  let pathName = state.router.location.pathname;
  let searchString = state.posts.searchStr;
  let posts = state.posts.posts;

  if(pathName == '/' && searchString == null){
    return posts.map((post) => post )
  }else if(searchString == null){
    return posts.map((post) => {
      if (post.id == Number((pathName).replace(/\D+/g,''))) {
        return post;
      }
    })
  }else{
    return posts.map((post) => {
      if (post.title.toLowerCase().includes(searchString.toLowerCase()) == true) {
        return post;
      }
    })
  }
}