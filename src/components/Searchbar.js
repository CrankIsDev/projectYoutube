import React from 'react';
import logo from '../assets/youtube.jpg';


class Searchbar extends React.Component {
    handleChange = (e) => {
      this.setState({
        term: e.target.value
      });
    };

    handleSubmit = (e) => {
      e.prevenDefault();
      this.props.handlleFormSubmit(this.state.term);
    }

  render() {
    return (
      <>
      <div className="Nav">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Faketube</h1>
          <div className="wrap">
            <form className="search">
              <input type="text" className="searchTerm" placeholder="Rechercher" onChange={this.handleChange} />
              <button type="submit" className="searchButton" onSubmit={this.handleSubmit}>
            </button>
          </form> 
          </div>
        </div>
      </>
    )
  }
}

export default Searchbar;