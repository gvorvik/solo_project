import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import StatsHeader from '../StatsHeader/StatsHeader';
import AverageGraph from '../AverageGraph/AverageGraph';
import ByGradeGraph from '../ByGradeGraph/ByGradeGraph';
import GraduateTable from '../GraduateList/GraduateList';

const mapStateToProps = state => ({
  user: state.user,
  student: state.student
});

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;
    let graduates = this.props.student.studentReducer.map((student) => {
      if (student.graduated === true) {
        return <li>{student.first_name} {student.last_name}</li>
      } else {
        return null
      }
    });

    if (this.props.user.userName) {
      content = (
        <div>
          <StatsHeader />
          <div id="adminGraphWrapper">
            <AverageGraph />
            <ByGradeGraph />
          </div>
          <GraduateTable graduates={graduates}/>
          <ul>{graduates}</ul>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
