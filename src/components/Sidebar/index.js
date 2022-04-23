import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer style={{background:'rgba(0,0,0,.65)'}} isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon id='close-l' style={{fontSize:'.75em'}} />
      </Icon>
      <SidebarMenu>
      <img src={require(`../../images/logo.png`).default} height='75px' style={{marginTop:'-9.25em'}}/>
        <SidebarLink onClick={()=>{
          window.location.href='https://www.pizzahut.com/'
        }} id='side-l' style={{fontSize:'1.2em'}} to='/'>Pizzas</SidebarLink>
        <SidebarLink onClick={()=>{
          window.location.href='https://www.pizzahut.com/'
        }} id='side-l' style={{fontSize:'1.2em'}} to='/'>Desserts</SidebarLink>
        <SidebarLink onClick={()=>{
          window.location.href='https://www.pizzahut.com/'
        }} id='side-l' style={{fontSize:'1.2em'}} to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute id='order-b' onClick={()=>{
        window.location.href='https://www.pizzahut.com/'
      }}>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
