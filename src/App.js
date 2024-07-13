import React, {Component} from "react";
import MovieList from "./MovieList";
import Navbar from "./NavBar";
import { movies } from "./movieData";

class App extends Component {

  constructor(){
    super();
    this.state = {
        movies: movies,
        cartCount: 0
    }
  }

  handleIncStars =(movie) =>{
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      if(movies[mid].stars>=5){
          return;
      }
      movies[mid].stars +=0.5
      this.setState({
          movies
      })

  }

  handleDecStars =(movie) =>{
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      if(movies[mid].stars<=0){
          return;
      }
      movies[mid].stars -=0.5
      this.setState({
          movies
      })
  }

  handleFavouriteToggle =(movie) => {
      const {movies} = this.state;
      const mid = movies.indexOf(movie);
      movies[mid].fav = !movies[mid].fav;
      this.setState({
          movies
      })
  }

handleCartToggle = (movie) => {
    let {movies,cartCount} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cartAdded = !movies[mid].cartAdded;
    console.log(movies[mid].cartAdded);
    if(movies[mid].cartAdded){
        cartCount+=1;
    }else{
        cartCount-=1;
    }
    console.log(cartCount);
    this.setState({
        movies,
        cartCount
    })
}
  
  render() {
    const {movies, cartCount} = this.state;

    return(
    <>
    <Navbar cartCount = {cartCount}/>
    <MovieList movies = {movies}
                addStars = {this.handleIncStars}
                decStars = {this.handleDecStars}
                toggleFav = {this.handleFavouriteToggle}
                toggleCart = {this.handleCartToggle}/>
    </>
    )
  }
}

export default App;
