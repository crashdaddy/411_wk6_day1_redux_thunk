import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { MoreVert } from '@material-ui/icons'

export default function FadeMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
      props.removeMake(props.index)
      handleClose();
  }

  return (
    <div>
      <MoreVert aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Open with fade transition
      </MoreVert>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
    </div>
  );
}