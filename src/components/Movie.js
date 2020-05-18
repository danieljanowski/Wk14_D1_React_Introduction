import React, {Component} from 'react';

class Movie extends Component{
    render(){
        return(
            <>
                <h4>
                    <li> <a href={this.props.url}>{this.props.name}</a>  </li>
                </h4>
            </>
        )
    }
}

export default Movie;