import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Face from '@material-ui/icons/Face';
import Graduate from '@material-ui/icons/School';
import Priority from '@material-ui/icons/PriorityHigh';

const mapStateToProps = reduxState => ({
    reduxState,
});

class StatsHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        let graduates = 0;
        let students = 0;

        this.props.reduxState.student.studentReducer.forEach((student) => {
            if (student.graduated === true) {
                graduates = ++graduates;
            } else {
                students = ++students;
            }
        })

        return (
            <div id="statsBanner">
                <h1>Your Impact</h1>
                <Grid container spacing={32}>
                    <Grid item xs={12} sm={4}>
                        <div className="statsBannerDivCard">
                            <Face style={{height: "50px", width: "50px"}}/>
                            <h3>Students Enrolled</h3>
                            <p>{students}</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className="statsBannerDivCard">
                            <Priority style={{height: "50px", width: "50px"}}/>
                            <h3>Sessions Today</h3>
                            <p>7</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className="statsBannerDivCard">
                            <Graduate style={{height: "50px", width: "50px"}}/>
                            <h3>Students Graduated</h3>
                            <p>{graduates}</p>
                        </div>
                    </Grid>
                </Grid>




            </div>
        );
    }
}

export default connect(mapStateToProps)(StatsHeader);