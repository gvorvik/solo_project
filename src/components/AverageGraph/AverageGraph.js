import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Bar } from 'react-chartjs-2';

class AverageGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: {}
        }
    }

    componentDidMount() {
        this.getDataForGraph();
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
    }

    getDataForGraph = () => {
        axios({
            method: 'GET',
            url: '/api/students/average',
        })
            .then(response => {
                this.setState({
                    chartData: {
                        labels: response.data.map((score) => {
                            let grade = score.grade;
                            return grade;
                        }),
                        datasets: [
                            {
                                label: 'Average By Grade',
                                data: response.data.map(score => score.avg),
                                backgroundColor: 'rgba(230, 126, 34, 0.6)'
                            }
                        ]
                    }
                });
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div style={{width: '600px', height: '450px', margin: "0 auto"}}>
                <Bar 
                data={this.state.chartData}
                options={{
                    title: {
                        display: this.props.displayTitle,
                        text: 'Average By Grade',
                        fontSize: 25,
                    },
                    legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    },
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                    }
                }}
            />
            </div>
        );
    }
}

export default connect()(AverageGraph);