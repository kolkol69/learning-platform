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

        this.updateCourseState = this.updateCourseState.bind(this);
    }
    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({},this.state.course);
        course[field] = event.target.value;
        return this.setState({ course });
    }

    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    course={this.state.course}
                    errors={this.state.errors}
                />
            </div>
        )
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    const authorsFromattedForDropdown = state.authors.map(author => {
        return {
            id: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    });

    return {
        course,
        authors: authorsFromattedForDropdown
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(courseActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
