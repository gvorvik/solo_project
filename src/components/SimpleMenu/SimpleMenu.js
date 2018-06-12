import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';


class SimpleMenu extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          anchorEl: null,
      }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.target });
  };

  handleClose = (event) => {
    // this.props.history.push(`/${event.target.value}`);
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div id="simpleMenu">
        {/* <h3>Open</h3> */}
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem component={Link} to='/user'>Home</MenuItem>
          <MenuItem component={Link} to='/info'>Admin</MenuItem>
          <MenuItem component={Link} to='/student'>Student</MenuItem>
          <MenuItem component={Link} to='/calendar'>Calendar</MenuItem>
          <MenuItem component={Link} to='/student'>Log Out</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;