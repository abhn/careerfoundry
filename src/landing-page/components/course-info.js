import React, { Component } from 'react';
import { 
    CourseInfoWrapper, 
    TitleText, 
    CourseTitle, 
    CourseAuthor, 
    CourseStarts,
    ConvincedTitle
} from '../common-styles';
import { Tab, List, Button, Link } from 'semantic-ui-react';
import { COURSE_URL } from '../../config-vars';

/**
 * @name CourseInfo
 * @description Renders information about the selected course
 * @param currencyCode: [NA, UK, EU]
 * @param courseInfo: {} the course information object of course selected
 */
class CourseInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencyCode: props.currencyCode ? props.currencyCode : 'NA',
            courseInfo: null
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
        if(Object.keys(stateUpdateObj).length > 0) {
            this.setState(stateUpdateObj);
        }
    }

    renderTabPane = (cost, oneTimePayment) => {
        let message = '';

        if(oneTimePayment) {
            // only show save message if data present
            let save = cost.costUpfrontSavings ? `- save ${cost.costUpfrontSavings}` : '';
            message = `${cost.costAllUpfront} upfront ${save}`;
        } 
        else {
            // if not available as montly payment, display message
            if(cost.costInstallment === undefined)
                message = `Montly payment option not available for this course`;
            else
                message = `${cost.costInstallment} x ${cost.costCycles} months + ${cost.costUpfront} upfront`
        }
        return (
            <Tab.Pane attached={false}>
                {message}
            </Tab.Pane>
        )
    }

    goToCourse = () => {
        let { courseInfo } = this.state;
        let { coursesList } = this.props;
        
        let slug = courseInfo.slug;
        let courseURL = coursesList[slug].url;

        window.location = courseURL;
    }

    render() {
        let { courseInfo, currencyCode } = this.state;
        let { coursesList } = this.props;

        if(courseInfo === null) {
            return (
                <CourseInfoWrapper>
                    <TitleText>
                        Please select any course from top right to see details.
                    </TitleText>
                </CourseInfoWrapper>
            )
        }
        
        // handle no coursesList here
        let slug = courseInfo.slug;
        let courseTitle = coursesList[slug].title;
        let courseAuthor = coursesList[slug].author;
        let courseStarts = coursesList[slug].next_start_formatted;

        // get the following two start dates
        let [ secondBatch, thirdBatch ] = courseInfo.start_dates.slice(1,3);

        let courseCost = {
            costAllUpfront: courseInfo.price[currencyCode].all_upfront,
            costTotal: courseInfo.price[currencyCode].total,
            costUpfrontSavings: courseInfo.price[currencyCode].upfront_savings,
            costUpfront: courseInfo.price[currencyCode].upfront,
            costInstallment: courseInfo.price[currencyCode].installment,
            costCycles: courseInfo.price[currencyCode].cycles
        }

        let nextBatches = (
            <List bulleted>
                <List.Item>{ secondBatch }</List.Item>
                <List.Item>{ thirdBatch }</List.Item>
            </List>
        )

        let costPanes = [
            { menuItem: 'One Payment', render: () => this.renderTabPane(courseCost, true) },
            { menuItem: 'Montly Payment Plan', render: () => this.renderTabPane(courseCost) }
        ]
        return (
            <CourseInfoWrapper>
                <CourseTitle>{ courseTitle }</CourseTitle>
                <CourseAuthor>By: { courseAuthor }</CourseAuthor>
                <CourseStarts>
                    Enroll <b>now</b> for the next batch starting <b>{ courseStarts }</b> or try our later batches
                    { nextBatches }
                </CourseStarts>
                
                <Tab menu={{ secondary: true, pointing: true }} panes={costPanes} />

                <ConvincedTitle>
                    Not convinced yet? Find more info about the course at the course page.
                </ConvincedTitle>

                <Button onClick={this.goToCourse} primary>Go To Course</Button>

            </CourseInfoWrapper>
        )
    }
}

export default CourseInfo;