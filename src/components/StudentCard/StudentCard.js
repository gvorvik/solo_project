import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';




class StudentCard extends Component {

  handleClick = (id) => {
    console.log('click logged', id);
  }

  render() {
    return (
      <div className="cardWrapper">
        <Card style={{ maxWidth: "245px" }}>
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
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect()(StudentCard);