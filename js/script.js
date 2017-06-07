'use strict'

const DOM = React.DOM;

let records = [
'http://placehold.it/200x100',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
];

class Image extends React.Component {
  render(){
      const {img} = this.props;
      return (
        <img 
          src={img} 
          alt='about image'
          style={{
            width: 200px,
            height: 100px
          }}
        />
      );
  }
}

class TextBox extends React.Component {
  render(){
    const {text} = this.props;
    return (
      <span>
        {text}
      </span>
    );
  }
}

class BlogItem extends React.Component {
  render(){
    const {rec} = this.props;
    return (
      <div>
        <Image img={rec[0]}/>
        <TextBox text={rec[1]}/>
      </div>
    );
  }
}

class BlogList extends React.Component {
  render(){
    const {recs} = this.props;
    return (
      <div>
        <BlogItem rec={recs}/>
        <BlogItem rec={recs}/>
        <BlogItem rec={recs}/>
      </div>
    )
  }
}


ReactDOM.render(
  React.createElement(BlogList, {recs: records}),
  document.querySelector('#app')
)