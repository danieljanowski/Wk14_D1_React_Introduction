import React, {Component} from 'react';
import Movie from '../components/Movie'

class MovieList extends Component{
    render(){
        return(
            <>
                <h3>I am MovieList</h3>
                <Movie />
            </>
        )
    }
}

export default MovieList;