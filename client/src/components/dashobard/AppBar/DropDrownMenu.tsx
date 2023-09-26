import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { logout } from '../../../functions/authUtils';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { selectRoom, setAudioOnly } from '../../../store/slicers/roomSlice';

export default function DropDrownMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const {audioOnly} =useAppSelector(selectRoom);
  const dispatch=useAppDispatch();
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
const handleAuioOnlyChange=()=>{
dispatch(setAudioOnly({audioOnly : !audioOnly}))
}
  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuOpen}
        style={{color: 'white'}}
      >
        <MoreVert/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleAuioOnlyChange}>

          {audioOnly ? 'Audio Only Enabled': 'Audio Only Disabled' }
        </MenuItem>
        
      </Menu>
    </div>
  );
}