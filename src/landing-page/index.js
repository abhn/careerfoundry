import React, { Component } from 'react';
import Nav from './components/nav';
import CourseInfo from './components/course-info';
import Footer from './components/footer';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <CourseInfo/>
                <Footer/>
            </div>
        )
    }
}

export default LandingPage;