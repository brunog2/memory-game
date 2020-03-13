import React, {Component} from 'react';
import './App.css';
import {Card, CardImg, CardTitle, CardBody} from 'shards-react';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      imagens: [
        "https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTv8jK9uwi5kud1Qofz0pRUytz5c2H13lYX2PQ5ZEMJTaA9FDT2",
        "https://www.allenovery.com/-/media/allenovery/people/b/ballheimer_andrew-0035033_web.jpg"
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <div className="imagens">
          {this.state.imagens.map((url, index) => (
            <Card className="card">
              <CardImg className="img" src={url}></CardImg>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}