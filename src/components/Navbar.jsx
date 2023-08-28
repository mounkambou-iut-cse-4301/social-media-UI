import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from '@mui/material'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import React from 'react';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: 'space-between'
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme?.shape?.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints?.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints?.up("sm")]: {
    display: "none",
  },
}));
function Navbar() {
  return (
    <AppBar position='sticky'><StyledToolbar>
      <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>MAK DEV</Typography>
      <Pets sx={{ display: { xs: "block", sm: "none" } }} />
      <Search>
        <InputBase placeholder='search...' />
      </Search>
      <Icons>
        <Badge badgeContent={4} color='error'>
          <Mail />
        </Badge>
        <Badge badgeContent={4} color='error'>
          <Notifications />
        </Badge>
        <Avatar sx={{ width: '20' }} alt="Remy Sharp" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      </Icons>
      <UserBox>
        <Avatar sx={{ width: '20' }} alt="Remy Sharp" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Typography variant='span'>Abdel Karim</Typography>
      </UserBox>
    </StyledToolbar></AppBar>
  )
}

export default Navbar