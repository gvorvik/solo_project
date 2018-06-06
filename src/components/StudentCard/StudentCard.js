import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import {STUDENT_ACTIONS} from '../../redux/actions/studentActions';

const mapStateToProps = reduxState => ({
  reduxState,
});

class StudentCard extends Component {

  sendStudentIdToReduxStore = (id) => {
    console.log('click logged', id);
    const action = {
      type: STUDENT_ACTIONS.SET_STUDENT_ID_IN_STORE,
      payload: id,
    }
    this.props.dispatch(action);
  }

  render() {
    return (
      <div className="cardWrapper">
        <Card style={{ maxWidth: "245px", margin: "0 auto"}}>
          <CardMedia
            style={{ height: "250px" }}
            image="/images/greg_orvik.jpg"
            title='Student Card'
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.firstName} {this.props.lastName}
            </Typography>
            <Typography component="p">
              Grade: {this.props.grade}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/student">
              Go To Student
            </Link>
            <Button onClick={() => this.sendStudentIdToReduxStore(this.props.id)}>TEST</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(StudentCard);