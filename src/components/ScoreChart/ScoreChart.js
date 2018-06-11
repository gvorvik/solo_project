import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewScoreForm from '../NewScoreForm/NewScoreForm';
import NotesSection from '../NotesSection/NotesSection';

import { Line } from 'react-chartjs-2';

const mapStateToProps = reduxState => ({
    reduxState,
});

class ScoreChart extends Component {

    componentWillMount() {
        this.props.getStudentScores(this.props.reduxState.student.studentPageID.id);
    }

    //default props!!
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
    }



    render() {
        return (
        <div>
            <div style={{width: "80%", height: "450px", margin: "0 auto"}}>
              <Line 
                data={this.props.chartData}
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
                                suggestedMax: this.props.goal,
                            }
                        }]
                    }
                }}
              />
            </div>
            <NotesSection notes={this.props.notes}/>
            <NewScoreForm getStudentScores={this.props.getStudentScores}/>
        </div>
        );
    }
}

export default connect(mapStateToProps)(ScoreChart);