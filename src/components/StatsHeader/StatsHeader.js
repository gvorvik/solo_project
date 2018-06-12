import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const mapStateToProps = reduxState => ({
    reduxState,
});

class StatsHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {

        return (
            <div id="statsBanner">
                <h1>Hello Header</h1>
                <Grid container spacing={32}>
                    <Grid item xs={12} sm={6} md={3}>
                        <div id="studentCountDiv">Hello</div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div id="studentCountDiv">Goodbye</div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div id="studentCountDiv">Hola</div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div id="studentCountDiv">Adios</div>
                    </Grid>
                </Grid>




            </div>
        );
    }
}

export default connect(mapStateToProps)(StatsHeader);