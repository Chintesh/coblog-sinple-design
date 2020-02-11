import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Posts.css';
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      data: []
    };
  }

  componentWillMount() {
    fetch("Posts.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result.items
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
      console.log(this.state.data);
  }
  render() {
const { error, data } = this.state;
return (
        <main className="container">
          <section className="cpb-post-listing list">
          {data.map(item => (
            <div  key={item.slug} className="cpb-main-post-container">
             <div className="cpb-main-post-heading">
                <h2 className="text-grey-darker">{item.title}</h2>
             </div>
               <div className="cpb-main-post-body">
                <img src={item.image} />
                  <p>{item.short_description}...<Link to={{ pathname: '/blog/' + item.slug  }} className="light_green menuid" >Read more</Link></p>
               </div>
            </div>
          ))}
          </section>
        </main>
    );
    
  }
}

export default Posts;
