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
        "https://www.allenovery.com/-/media/allenovery/people/b/ballheimer_andrew-0035033_web.jpg",
        "https://imagens.mdig.com.br/thbs/44815mn.jpg",
        "https://www.istockphoto.com/resources/images/PhotoFTLP/Essential-images-we-love-1055891344.jpg",
        "https://media.metrolatam.com/2019/08/07/capturadepantall-4487e49c727d54de29604412e77f068f-1200x600.jpg",
        "https://i.ytimg.com/vi/CY4Q54PaYR0/maxresdefault.jpg",
        "https://s1.1zoom.me/big0/515/Bears_Polar_bears_Head_Snout_565957_1280x853.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsZKpTxHUckTH_XftnAON2SZ-TFj-sw2eHd62rOjY3eCtACmRN",
        "https://img.ibxk.com.br/2019/12/02/02162709062290.jpg?w=1120&h=420&mode=crop&scale=both",
        "https://s.aficionados.com.br/imagens/gal-gadot4.jpg",
        "https://img.r7.com/images/top-100-hora-7-imagens-acontecendo-17042019184231828?dimensions=600x315&crop_position=c"
      ]
    };
    this.revelarImagem = this.revelarImagem.bind(this);
  }

  async componentDidMount(){  
    function embaralharImagens(array){
      console.log("as")
      var currentIndex = array.length;
      var temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    var imagens = await this.state.imagens;
    var imagensDuplicadas = [];   

    for (var x = 0; x < imagens.length; x++){
      imagensDuplicadas.push(imagens[x]);
      imagensDuplicadas.push(imagens[x]);
    }     

    imagensDuplicadas = embaralharImagens(imagensDuplicadas);
    var imagensDuplicadasEmbaralhadas = embaralharImagens(imagensDuplicadas);

    this.setState({imagens: imagensDuplicadasEmbaralhadas})    
  }


  componentDidUpdate(){
    setTimeout(() => {
      var imagens = document.getElementsByClassName("img");
      for (let img of imagens){
        img.src = "https://img2.gratispng.com/20180715/yag/kisspng-question-mark-computer-icons-exclamation-mark-desk-question-mark-emoji-5b4bb794264216.8330599815316888521567.jpg"        
      }
    }, 2000);
  }

  revelarImagem(index){
    document.getElementById(index).src = this.state.imagens[index];
  }  

  render() {
    return (
      <div className="App">
        <div className="imagens">
          {this.state.imagens.map((url, index) => (
            <Card className="card" onClick={() => this.revelarImagem(index)}>
              <CardImg id={index} className="img" src={url}></CardImg>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}