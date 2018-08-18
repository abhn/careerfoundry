import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

/**
 * @name CourseDropdown
 * @description courses dropdown in the top nav bar
 * @param coursesList []
 * @param courseSelected f
 */
class CourseDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coursesList: props.coursesList,
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.coursesList) {
            this.setState({
                coursesList: nextProps.coursesList
            })
        }
    }

    // semantic-ui dropdown requires a [{key:.., value:.., text:..}, ..] style array of entries
    renderCoursesOptions = () => {
        let { coursesList } =  this.state;

        let coursesOptions = []
        if (coursesList) {
            let coursesSlugs = Object.keys(coursesList);
            for(let course of coursesSlugs) {
                let currentCourse = coursesList[course];
                coursesOptions.push({
                    key: course,
                    value: course,
                    text: currentCourse.title
                })
            }
        }
        return coursesOptions;
    }

    render() {

        let coursesOptions = this.renderCoursesOptions();

        return (
            <Dropdown placeholder='Courses' onChange={this.props.courseSelected} options={coursesOptions} />
        )
    }
}

export default CourseDropdown;