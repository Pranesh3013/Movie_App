import { Component } from "react";
import Moviecard from "./MovieCard";

export default class MovieList extends Component{
    

    render(){
        const{movies, addStars, decStars, toggleCart, toggleFav} = this.props;

        return(
            <>
            {movies.map((movie, index)=><Moviecard movies = {movie} 
                                                    key={index}
                                                    addStars = {addStars}
                                                    minusStars = {decStars}
                                                    toggleFav = {toggleFav}
                                                    toggleCart = {toggleCart}/>)}
            
            </>
        )
    }
}