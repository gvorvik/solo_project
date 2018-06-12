import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

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
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem component={Link} to='/student'>Home</MenuItem>
          <MenuItem onClick={this.handleClose}>Admin</MenuItem>
          <MenuItem onClick={this.handleClose}>Student</MenuItem>
          <MenuItem onClick={this.handleClose}>Calendar</MenuItem>
          <MenuItem onClick={this.handleClose}>Log Out</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;