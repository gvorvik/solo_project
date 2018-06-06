import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Bar, Line, Pie } from 'react-chartjs-2';


class ScoreChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: {
                labels: ['Boston', 'Worcestor', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: 'rgba(255, 99, 132, 0.6)'
                    }
                ]
            }
        }
    }

    //default props!!
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
    }

    render() {
        return (
            <div className="chart">
              <Line 
                data={this.state.chartData}
                options={{
                    title: {
                        display: this.props.displayTitle,
                        text: 'Student Progress',
                        fontSize: 25,
                    },
                    legend: {
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    }
                }}
              />
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect()(ScoreChart);