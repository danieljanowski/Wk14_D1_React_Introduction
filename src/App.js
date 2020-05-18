import React, {Component} from 'react';
import MovieList from './containers/MovieList'
import Upcoming from './components/Upcoming';

class App extends Component {
  render() {
      return (
        <>
          <h1> Upcoming Film Releases for UK </h1>
          <MovieList />
          <Upcoming />
        </>
      )
}
}

export default App;
