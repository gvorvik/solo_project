import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Bar, Line, Pie } from 'react-chartjs-2';

const mapStateToProps = reduxState => ({
    reduxState,
});

class ScoreChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
           chartData: {}
        }
    }

    componentWillMount() {
        this.getStudentScores(this.props.reduxState.student.studentPageID);
    }

    //default props!!
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
    }

    getStudentScores = (id) => {
        axios({
            method: 'GET',
            url: `/api/students/scores/${id}`
        })
        .then((response) => {
            this.setState({
                // studentScores: response.data.map(score => score.score),
                chartData: {
                    labels: response.data.map((score, i) => {
                        return i;
                    }),
                    datasets: [
                        {
                            label: 'Population',
                            data: response.data.map(score => score.score),
                            backgroundColor: 'rgba(230, 126, 34, 0.6)'
                        }
                    ]
                }
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }


    render() {
        return (
            <div className="chart">
              <Line 
                data={this.state.chartData}
                height={200}
                width={200}
                options={{
                    title: {
                        display: this.props.displayTitle,
                        text: 'Student Progress',
                        fontSize: 25,
                    },
                    legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    },
                    maintainAspectRatio: false,

                }}
              />
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ScoreChart);