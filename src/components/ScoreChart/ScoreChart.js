import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import NewScoreForm from '../NewScoreForm/NewScoreForm';
import NotesSection from '../NotesSection/NotesSection';

import { Line } from 'react-chartjs-2';

const mapStateToProps = reduxState => ({
    reduxState,
});

class ScoreChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
           chartData: {},
           notes: []
        }
    }

    componentWillMount() {
        this.getStudentScores(this.props.reduxState.student.studentPageID.id);
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
                chartData: {
                    labels: response.data.map((score) => {
                        let scoreDate = moment(score.date).format("MMM Do YYYY");
                        return scoreDate;
                    }),
                    datasets: [
                        {
                            label: 'Words Per Minute',
                            data: response.data.map(score => score.score),
                            backgroundColor: 'rgba(230, 126, 34, 0.6)'
                        }
                    ]
                },
                notes: response.data.map((score) => {
                    return {
                        note: score.notes,
                        date: moment(score.date).format("MMM Do YYYY"),
                    }
                })
            });
            this.logState();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    logState = () => {
        console.log(this.state);
    }


    render() {
        return (
        <div>
            <div style={{width: '600px', height: '450px', margin: '0 auto'}}>
              <Line 
                data={this.state.chartData}
                options={{
                    tooltips: {

                    },
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
            <NotesSection notes={this.state.notes}/>
            <NewScoreForm getScores={this.getStudentScores}/>
        </div>
        );
    }
}

export default connect(mapStateToProps)(ScoreChart);