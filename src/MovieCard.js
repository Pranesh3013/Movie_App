import { Component } from "react"

export default class Moviecard extends Component{
    
    
    // addStars = () =>{
    //     if(this.state.stars>=5){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return{
    //             stars: prevState.stars+0.5
    //         }
    //     })
    // }

    // minusStars = () => {
    //     if(this.state.stars<=0){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return{
    //             stars:prevState.stars-0.5
    //         }
    //     })
    // }

    
    render(){
        const {title, plot,fav, price, rating,cartAdded, stars, img} = this.props.movies;
        const{addStars, movies, minusStars, toggleFav, toggleCart} = this.props;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={img} alt="poster"/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>
                        <div className="footer">
                            <div className="rating">IMDB - {rating}</div>
                            <div className="star-dis">
                                <img alt = "decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" className="str-btn" onClick={()=>{minusStars(movies)}}/>
                                <img alt = "star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className = "stars"/>
                                <img alt = "increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png " className="str-btn" onClick={()=>{addStars(movies)}}/>
                                <span className="starCount">{stars}</span>
                            </div>

                            <button className={fav?  "unfavourite-btn": "favourite-btn"} onClick={()=>{toggleFav(movies)}}>{fav? "Unfavourite": "Add to favourites"}</button>

                            <button className={cartAdded? "removeCart-btn": "cart-btn"} onClick={()=>{toggleCart(movies)}}>{cartAdded? "Remove from Cart": "Add to Cart"}</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}