import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Pie } from 'react-chartjs-2';

const mapStateToProps = reduxState => ({
    reduxState,
});

class GradeGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kindergarten: 0,
            firstGrade: 0,
            secondGrade: 0,
            thirdGrade: 0,
            chartData: {}
        }
    }

    componentWillMount() {
        this.getDataForGraph();
    }

    componentDidMount() {
        this.setDataForGraph();
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom',
    }

    getDataForGraph = () => {
        let k = 0;
        let first = 0;
        let second = 0;
        let third = 0;
        this.props.reduxState.student.studentReducer.forEach((student) => {
            if(student.graduated === false) {
                switch (student.grade) {
                    case 'K':
                        return k = ++k;
                    case '1':
                        return first = ++first;
                    case '2':
                        return second = ++second;
                    case '3':
                        return third = ++third;
                    default:
                        return this.state;
                }
            } else {
                return null;
            }
        })
        this.setState({
            kindergarten: k,
            firstGrade: first,
            secondGrade: second,
            thirdGrade: third,
        });
    }

    setDataForGraph = () => {
        this.setState({
            chartData: {
                labels: ['Kindergarten', 'First Grade', 'Second Grade', 'Third Grade'],
                datasets: [
                    {
                        label: 'Number of Students per Grade',
                        data: [this.state.kindergarten, this.state.firstGrade, this.state.secondGrade, this.state.thirdGrade],
                        backgroundColor: ['rgba(230, 126, 34, 0.6)', 'rgba(23, 16, 160, 0.6)', 'rgba(176, 254, 9, 0.6)', 'rgba(178, 25, 180, 0.6)']
                    }
                ],
            }
        })
    }

    render() {

        return (
            <div id="gradeGraph">
                <Pie
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Number of Students by Grade',
                            fontSize: 25,
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(GradeGraph);