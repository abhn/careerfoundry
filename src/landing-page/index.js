import React, { Component } from 'react';
import Nav from './components/nav';
import CourseInfo from './components/course-info';
import Footer from './components/footer';
import { getVisitorLocation } from '../services/get-visitor-location';
import { getCourses } from '../services/get-courses';
import { getCourseDetails } from '../services/get-course-details';


/**
 * @name LandingPage
 * @description Parent to Nav, CourseInfo and Footer, a container component
 */
class LandingPage extends Component {

    constructor() {
        super();
        this.state = {
            coursesList: null,
            courseInfo: null,
            visitorGeoLocation: null
        }
    }

    componentDidMount() {
        if(this.state.visitorGeoLocation === null) {
            this.visitorLocation();
        } 
        if(this.state.coursesList === null) {
            this.coursesList();
        }
    }

    // get visitor's location and store it in state
    visitorLocation = () => {
        getVisitorLocation()
        .then(val => {
            this.setState({
                visitorGeoLocation: val
            })
        })
        .catch(err => {
            // set default if location isn't availabe due some error
            this.setState({
                visitorGeoLocation: 'NA'
            })
        })
    }

    // fetch courses and store in state
    coursesList = () => {
        getCourses()
        .then(data => {
            this.setState({
                coursesList: data
            })
        })
    }

    // on dropdown change, fetch the selected course details and store in state
    courseDetails = (slug) => {
        getCourseDetails(slug)
        .then(data => {
            this.setState({
                courseInfo: data
            })
        })
    }

    // handler for dropdown change event in ./nav/dropdown component
    courseSelected = (e, { value }) => {
        this.courseDetails(value)
    }

    render() {        
        return (
            <div>
                <Nav coursesList={this.state.coursesList} courseSelected={this.courseSelected} />
                <CourseInfo currencyCode={this.state.visitorGeoLocation} courseInfo={this.state.courseInfo} />
                <Footer/>
            </div>
        )
    }
}

export default LandingPage;