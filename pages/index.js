import React, {Component} from 'react';
import 'isomorphic-fetch';

class Home extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/repos/developit/preact')
        const json = await res.json()
        return { stars: json.stargazers_count }
    }
    render() {
        return (
            <p>Preact has {this.props.stars} ⭐️</p>
        );
    }
}

export default Home;