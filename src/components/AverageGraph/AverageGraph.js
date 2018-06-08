import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AverageGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getDataForGraph();
    }

    getDataForGraph = () => {
        axios({
            method: 'GET',
            url: '/api/students/average',
        })
        .then(result => {
            console.log(result.data);
            this.setState({
                data: result.data
            })
        })
        .catch(err => console.log(err));
    }

    render() {

        return (
            <div>
                <h1>Hello Average Graph</h1>
            </div>
        );
    }
}

export default connect()(AverageGraph);