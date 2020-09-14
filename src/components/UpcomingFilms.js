import React, { Component } from 'react';

class UpcomingFilms extends Component {
    btnClick() {
        window.open("https://www.imdb.com/calendar/?region=gb")
    }
    render() {
        return(
            <button onClick={this.btnClick.bind(this)}>View more upcoming releases</button>
        );
    }
}

export default UpcomingFilms;