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
        this.saveCourse = this.saveCourse.bind(this);
    }
    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({},this.state.course);
        course[field] = event.target.value;
        return this.setState({ course });
    }
    saveCourse(event){
        event.stopPropagation();
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }

    render() {
        return (
            <div>
                <CourseForm
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    course={this.state.course}
                    errors={this.state.errors}
                />
            </div>
        )
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    const authorsFromattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
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
