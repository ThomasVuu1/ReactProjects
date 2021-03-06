import React from 'react'
import {
  SidebarContainer, 
  Icon, 
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRouter
} 
from './SidebarElements'

function Sidebar() {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">
            About
          </SidebarLink>
          <SidebarLink to="discover">
            Discover
          </SidebarLink>
          <SidebarLink to="services">
            Services
          </SidebarLink>
          <SidebarLink to="signup">
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRouter to="/signin">Sign In</SidebarRouter>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
