import React, { Component } from 'react';



export default class MovieReviews extends Component {
    
componentDidMount() {
    const url = "https://api.nytimes.com/svc/movies/v2/reviews/all.json"
    const response = fetch(url)
    const data = response.json
    console.log(data)
}
    
    
    render() {
        return <div></div>
    }
}
