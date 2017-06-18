

//********************************************
//********************************************
//
// Я ТАК И НЕ ПОНЯЛ ПОЧЕМУ КОГДА Я ИСПОЛЬЗУЮ "PropTypes" МНЕ ВЫДАЕТ ОШИБКУ - ReferenceError: PropTypes is not defined
// БЕЗ ПРОВЕРКИ  - "PropTypes" ВСЕ РАБОТАЕТ ОТЛИЧНО, ПРОШУ ПОМОЩи :)
//
//********************************************
//********************************************

let records = [
  {
    img:  'http://placehold.it/200x100',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum esse eveniet quae incidunt labore eaque delectus, nisi, ad, voluptatem veritatis dicta ipsum molestias iusto commodi nobis vitae deleniti perspiciatis cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quos, sit vel voluptates, velit similique explicabo error laboriosam architecto fugiat odio iusto temporibus possimus cupiditate. Excepturi officiis, assumenda dolorum natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nulla tenetur, repudiandae nam fuga, suscipit magnam a est consectetur recusandae? Ratione fuga quae at sapiente magni laudantium optio dolores dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident earum sunt aliquam iusto laboriosam voluptatum tempora magni, commodi consequuntur, reprehenderit laborum, doloribus possimus enim amet. Ab, dolorem doloremque consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quibusdam nobis quam quia, ab quaerat harum accusamus qui quis nostrum nesciunt, saepe dignissimos. Perspiciatis eum ut incidunt ipsam dolore magnam!',
    metaData: {
      author: "Elizabeth Humphrey",
      createDate: "суббота, 16 июля 2017 15:30",
      updateDate: "суббота, 16 июля 2017 20:35",
      currentLike: 0
    }
  },
  {
    img:  'http://placehold.it/200x100',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum esse eveniet quae incidunt labore eaque delectus, nisi, ad, voluptatem veritatis dicta ipsum molestias iusto commodi nobis vitae deleniti perspiciatis cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quos, sit vel voluptates, velit similique explicabo error laboriosam architecto fugiat odio iusto temporibus possimus cupiditate. Excepturi officiis, assumenda dolorum natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nulla tenetur, repudiandae nam fuga, suscipit magnam a est consectetur recusandae? Ratione fuga quae at sapiente magni laudantium optio dolores dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident earum sunt aliquam iusto laboriosam voluptatum tempora magni, commodi consequuntur, reprehenderit laborum, doloribus possimus enim amet. Ab, dolorem doloremque consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quibusdam nobis quam quia, ab quaerat harum accusamus qui quis nostrum nesciunt, saepe dignissimos. Perspiciatis eum ut incidunt ipsam dolore magnam!',
    metaData: {
      author: "Robbins Carney",
      createDate: "суббота, 16 июля 2017 11:30",
      updateDate: "суббота, 16 июля 2017 19:05",
      currentLike: 0
    }
  },
  {
    img:  'http://placehold.it/200x100',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum esse eveniet quae incidunt labore eaque delectus, nisi, ad, voluptatem veritatis dicta ipsum molestias iusto commodi nobis vitae deleniti perspiciatis cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quos, sit vel voluptates, velit similique explicabo error laboriosam architecto fugiat odio iusto temporibus possimus cupiditate. Excepturi officiis, assumenda dolorum natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nulla tenetur, repudiandae nam fuga, suscipit magnam a est consectetur recusandae? Ratione fuga quae at sapiente magni laudantium optio dolores dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident earum sunt aliquam iusto laboriosam voluptatum tempora magni, commodi consequuntur, reprehenderit laborum, doloribus possimus enim amet. Ab, dolorem doloremque consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quibusdam nobis quam quia, ab quaerat harum accusamus qui quis nostrum nesciunt, saepe dignissimos. Perspiciatis eum ut incidunt ipsam dolore magnam!',
    metaData: {
      author: "Rose Lawson",
      createDate: "суббота, 16 июля 2017 14:50",
      updateDate: "суббота, 16 июля 2017 21:55",
      currentLike: 0
    }
  }
];

class Image extends React.Component {
  render(){
      const {img} = this.props;
      return (
        <img 
          src={img} 
          alt='about image'
          style={{
            width: "200px",
            height: "100px",
            float: "left",
            margin: "5px 5px 5px 0"
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


class LikeBtn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentLike: props.currentLike
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({currentlike: ++this.state.currentLike})
  }

  render(){
    return (
      <span>
        <button onClick={this.handleClick}>Like Me!</button>
        <span>  : {this.state.currentLike} </span>
      </span>     
    )
  }
}

class BlogItem extends React.Component {
  render(){
    const {img, text, metaData} = this.props;
    return (
      <div className="blog-item">
        <Image img={img} />
        <TextBox text={text} />
        <div>
          Дата создания: {metaData.createDate} / Дата обновления: {metaData.updateDate} / Автор: {metaData.author} <LikeBtn  currentLike = {metaData.currentLike} />   
        </div>
      </div>
    );
  }
}



class BlogList extends React.Component {
  render(){
    const {records} = this.props;
    return (     
      <div>
        { records.map((item)=>{return <BlogItem {...item} />; })}
      </div>
    )
  }
}

// ЕСЛИ РАСКОМЕНТИРОВАТЬ ТО РАБОТАТЬ НЕ БУДЕТ И БУДЕТ ОШИБКА :(
//
// Image.defaultProps = {
//   img: 'http://placehold.it/200x100'
// };

// Image.propTypes = {
//   img: PropTypes.string
// };



// TextBox.defaultProps = {
//   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum esse eveniet quae incidunt labore eaque delectus, nisi, ad, voluptatem veritatis dicta ipsum molestias iusto commodi nobis vitae deleniti perspiciatis cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quos, sit vel voluptates, velit similique explicabo error laboriosam architecto fugiat odio iusto temporibus possimus cupiditate. Excepturi officiis, assumenda dolorum natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nulla tenetur, repudiandae nam fuga, suscipit magnam a est consectetur recusandae? Ratione fuga quae at sapiente magni laudantium optio dolores dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident earum sunt aliquam iusto laboriosam voluptatum tempora magni, commodi consequuntur, reprehenderit laborum, doloribus possimus enim amet. Ab, dolorem doloremque consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quibusdam nobis quam quia, ab quaerat harum accusamus qui quis nostrum nesciunt, saepe dignissimos. Perspiciatis eum ut incidunt ipsam dolore magnam!'  
// };

// TextBox.propTypes = {
//   text: PropTypes.string
// };



// BlogItem.propTypes = {
//   img: PropTypes.string,
//   text: PropTypes.string,
//   metaData: PropTypes.object
// }



// BlogList.propTypes = {
//   // тут я так и не понял как задать проверку, поскольку нет имени свойства
// };


ReactDOM.render(
  <BlogList records = {records} />,
  document.querySelector('#app')
)