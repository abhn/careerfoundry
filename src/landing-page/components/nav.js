import React, { Component } from 'react';
import CourseDropdown from './drop-down';

class Nav extends Component {
    render() {
        return (
            <div>
                <h3>CareerFoundry</h3>
                <CourseDropdown coursesList={this.props.coursesList} courseSelected={this.props.courseSelected} />
            </div>
        )
    }
}

export default Nav;