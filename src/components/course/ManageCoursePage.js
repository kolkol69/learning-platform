import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        }

    }

    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm
                    allAuthors={[]}
                    course={this.state.course}
                    errors={this.state.errors}
                />
            </div>
        )
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    return {
        course
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(courseActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
