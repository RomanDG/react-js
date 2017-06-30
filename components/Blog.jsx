
let records = [
  {
    id: 1,
    title: 'Title number ONE.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum esse eveniet quae incidunt labore eaque delectus, nisi, ad, voluptatem veritatis dicta ipsum molestias iusto commodi nobis vitae deleniti perspiciatis cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quos, sit vel voluptates, velit similique explicabo error laboriosam architecto fugiat odio iusto temporibus possimus cupiditate. Excepturi officiis, assumenda dolorum natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nulla tenetur, repudiandae nam fuga, suscipit magnam a est consectetur recusandae? Ratione fuga quae at sapiente magni laudantium optio dolores dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident earum sunt aliquam iusto laboriosam voluptatum tempora magni, commodi consequuntur, reprehenderit laborum, doloribus possimus enim amet. Ab, dolorem doloremque consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quibusdam nobis quam quia, ab quaerat harum accusamus qui quis nostrum nesciunt, saepe dignissimos. Perspiciatis eum ut incidunt ipsam dolore magnam!',
    img: {
      alt: "about image",
      src: "http://placehold.it/200x100",
      width: "200px",
      height: "100px"
    },
    metaData: {
      author: "Elizabeth Humphrey",
      createDate: "суббота, 16 июля 2017 15:30",
      updateDate: "суббота, 16 июля 2017 20:35",
      currentLike: 0
    }
  },
  {
    id: 2,
    title: 'Title number TWO.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum esse eveniet quae incidunt labore eaque delectus, nisi, ad, voluptatem veritatis dicta ipsum molestias iusto commodi nobis vitae deleniti perspiciatis cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quos, sit vel voluptates, velit similique explicabo error laboriosam architecto fugiat odio iusto temporibus possimus cupiditate. Excepturi officiis, assumenda dolorum natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nulla tenetur, repudiandae nam fuga, suscipit magnam a est consectetur recusandae? Ratione fuga quae at sapiente magni laudantium optio dolores dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident earum sunt aliquam iusto laboriosam voluptatum tempora magni, commodi consequuntur, reprehenderit laborum, doloribus possimus enim amet. Ab, dolorem doloremque consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quibusdam nobis quam quia, ab quaerat harum accusamus qui quis nostrum nesciunt, saepe dignissimos. Perspiciatis eum ut incidunt ipsam dolore magnam!',
    img: {
      alt: "about image",
      src: "http://placehold.it/200x100",
      width: "200px",
      height: "100px"
    },    
    metaData: {
      author: "Robbins Carney",
      createDate: "суббота, 16 июля 2017 11:30",
      updateDate: "суббота, 16 июля 2017 19:05",
      currentLike: 0
    }
  },
  {
    id: 3,
    title: 'Title number THREE.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum esse eveniet quae incidunt labore eaque delectus, nisi, ad, voluptatem veritatis dicta ipsum molestias iusto commodi nobis vitae deleniti perspiciatis cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quos, sit vel voluptates, velit similique explicabo error laboriosam architecto fugiat odio iusto temporibus possimus cupiditate. Excepturi officiis, assumenda dolorum natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nulla tenetur, repudiandae nam fuga, suscipit magnam a est consectetur recusandae? Ratione fuga quae at sapiente magni laudantium optio dolores dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident earum sunt aliquam iusto laboriosam voluptatum tempora magni, commodi consequuntur, reprehenderit laborum, doloribus possimus enim amet. Ab, dolorem doloremque consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quibusdam nobis quam quia, ab quaerat harum accusamus qui quis nostrum nesciunt, saepe dignissimos. Perspiciatis eum ut incidunt ipsam dolore magnam!',
    img: {
      alt: "about image",
      src: "http://placehold.it/200x100",
      width: "200px",
      height: "100px"
    },    
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
      const {alt, src, width, height} = this.props.img;
      return (
        <img 
          src={src} 
          alt={alt}
          style={{
            width: {width},
            height: {height},
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

const LikeBtn = ({addLike, id}) => {
  return (
      <span>
        <button onClick={addLike} id={id}>Like Me!</button>
      </span> 
  )
}

class BlogItem extends React.Component {
  render(){
    const {img, text, metaData, addLike, id, title} = this.props;
    return (
      <div className="blog-item">
        <div>
          <h4>{title}</h4>
        </div>
        <Image img={img} />
        <TextBox text={text} />
        <div>
          Дата создания: {metaData.createDate} / Дата обновления: {metaData.updateDate} / Автор: {metaData.author} <LikeBtn addLike = {addLike} id={id}/>   
        </div>
      </div>
    );
  }
}


class BlogList extends React.Component {
  render(){
    const {addLike, records} = this.props;
    return (     
      <div>
        { records.map((item)=>(<BlogItem {...item} key={item.id} addLike = {addLike} />))}
      </div>
    )
  }
}

class PieChart extends React.Component {
  constructor(props){
    super(props);  

    this.ttl = this.props.titles;
    this.ids = this.props.ids;
    this.chart;

    this.state = {
      data: []
    }

    for(let id in this.ttl){
      const value = this.state.data;
      value.push([this.ttl[id], this.ids[id]]);
      this.setState({data: value})
    }

  }

  componentWillReceiveProps(nextProps){

    for(let id in this.ttl){
      const value = this.state.data;
      value.shift();
      value.push([this.ttl[id], this.ids[id]]);
      this.setState({data: value})
    }

    this.chart.load({
      columns: this.state.data
    })
  }

  componentWillUnmount(){
    this.chart.destroy();
  }

  componentDidMount(){
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.state.data,
        type: 'pie'
      }   
    })
  }

  render(){
    return (
      <div ref="chart" />
    )
  }
}


class BlogPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ids: [],
      titles: []

    }

    this.props.records.map((item) => {
      this.state.ids.push(item.metaData.currentLike);
      this.state.titles.push(item.title);
    })

    this.like = this.like.bind(this);
    
  }

  like(e){
    const value = this.state.ids;
    value[e.target.id-1] += 1;
    this.setState({ids: value});

    // здесь видно что в стетйте все инкрементируется...
    console.log('LIKE ' + e.target.id + ': ' + this.state.ids)
  }

  render(){
    return (
      <div>
        <BlogList  addLike = {this.like} {...this.props} />
        <PieChart titles={this.state.titles} ids={this.state.ids} />
      </div>
    )
    
  }
}



 Image.defaultProps = {
   img: 'http://placehold.it/200x100'
 };

 Image.propTypes = {
   img: React.PropTypes.string
 };



TextBox.defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum esse eveniet quae incidunt labore eaque delectus, nisi, ad, voluptatem veritatis dicta ipsum molestias iusto commodi nobis vitae deleniti perspiciatis cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quos, sit vel voluptates, velit similique explicabo error laboriosam architecto fugiat odio iusto temporibus possimus cupiditate. Excepturi officiis, assumenda dolorum natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nulla tenetur, repudiandae nam fuga, suscipit magnam a est consectetur recusandae? Ratione fuga quae at sapiente magni laudantium optio dolores dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident earum sunt aliquam iusto laboriosam voluptatum tempora magni, commodi consequuntur, reprehenderit laborum, doloribus possimus enim amet. Ab, dolorem doloremque consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quibusdam nobis quam quia, ab quaerat harum accusamus qui quis nostrum nesciunt, saepe dignissimos. Perspiciatis eum ut incidunt ipsam dolore magnam!'  
};

TextBox.propTypes = {
  text: React.PropTypes.string
};


BlogItem.propTypes = {
  img: React.PropTypes.string,
  text: React.PropTypes.string,
  metaData: React.PropTypes.object
}


BlogList.propTypes = {
  records: React.PropTypes.array
};


ReactDOM.render(
  <BlogPage records = {records} />,
  document.querySelector('#app')
)