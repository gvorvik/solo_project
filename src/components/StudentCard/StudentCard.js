import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {STUDENT_ACTIONS} from '../../redux/actions/studentActions';

const mapStateToProps = reduxState => ({
  reduxState,
});

class StudentCard extends Component {

  sendStudentIdToReduxStore = (id, firstName, lastName, goal) => {
    console.log('click logged', id);
    const action = {
      type: STUDENT_ACTIONS.SET_STUDENT_ID_IN_STORE,
      payload: {
        id,
        firstName,
        lastName,
        goal,
      },
    }
    this.props.dispatch(action);
    this.props.changePage();
  }

  randomNumber = () => {
    return Math.floor((Math.random()*6) + 1)
  }

  render() {

    let number = this.randomNumber();
    let imgText= `/images/greg_orvik.${number}.jpg`

    return (
      <div className="cardWrapper">
        <Card style={{ maxWidth: "245px", margin: "0 auto"}}>
          <CardMedia
            style={{ height: "250px" }}
            image={imgText}
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
            <Button onClick={() => this.sendStudentIdToReduxStore(this.props.id, this.props.firstName, this.props.lastName, this.props.goal)}>Go To Student</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(StudentCard);