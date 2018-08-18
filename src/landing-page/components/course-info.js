import React, { Component } from 'react';

class CourseInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencyCode: props.currencyCode ? props.currencyCode : 'NA'
        }
    }

    // update the state on receiving new props (say on dropdown change)
    componentWillReceiveProps(nextProps) {
        let stateUpdateObj = {};
        if(nextProps.currencyCode) {
            stateUpdateObj['currencyCode'] = nextProps.currencyCode;
        }
        if(nextProps.courseInfo) {
            stateUpdateObj['courseInfo'] = nextProps.courseInfo;
        }
        if(Object.keys(stateUpdateObj) > 0) {
            this.setState(stateUpdateObj);
        }
    }

    render() {
        return (
            <div>CourseInfo</div>
        )
    }
}

export default CourseInfo;