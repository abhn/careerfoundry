import React, { Component } from 'react';
import CourseDropdown from './drop-down';
import { NavWrapper, NavInner, NavCompany } from '../common-styles';

/**
 * @name Nav
 * @description top navigation bar with links and course selection dropdown
 * @param coursesList []
 * @param courseSelected f
 */
class Nav extends Component {
    render() {
        return (
            <NavWrapper>
                <NavInner>
                    <NavCompany><i>CAREER<b>FOUNDRY</b></i></NavCompany>
                    <CourseDropdown coursesList={this.props.coursesList} courseSelected={this.props.courseSelected} />
                </NavInner>
            </NavWrapper>
        )
    }
}

export default Nav;