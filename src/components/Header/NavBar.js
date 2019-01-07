import React, {Component} from 'react';
import logo from '../../logo.svg'
import { NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faHome, faInfo, faList, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap-social/bootstrap-social.css';

const NavBarMenu = (props) =>   {
    console.log(props);
        return (
            <React.Fragment>
                <NavbarToggler onClick={props.onClick}/>
                <NavbarBrand className="mr-auto" href="/">Ristorante Con Fusion</NavbarBrand>

                <img src={logo} height="30" width="30" alt="logo"/>
                <Collapse isOpen={props.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span><FontAwesomeIcon icon={faHome}/>Home</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutUs">
                                <span><FontAwesomeIcon icon={faInfo}/>About us</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span><FontAwesomeIcon icon={faList}/>Menu</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span><FontAwesomeIcon icon={faAddressCard}/>Contact</span>
                            </NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </React.Fragment>


        );

};
export default NavBarMenu;