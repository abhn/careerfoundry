import React, { Component } from 'react';
import CourseDropdown from './drop-down';

class Nav extends Component {
    render() {
        return (
            <div>
                <h3>CareerFoundry</h3>
                <CourseDropdown/>
            </div>
        )
    }
}

export default Nav;