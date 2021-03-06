import React from 'react'
import LessonList from "./LessonList";
import LessonTabs from './LessonTabs'

export default class ModuleEditor
    extends React.Component {

    constructor(props){
        super(props);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.state = {courseId: '', moduleId: '',module:{ }}

    }

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }






    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);

        this.setModuleId(
            this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);
    }



    render() {
        return (
            <div>
            <h2>Module Editor</h2>
        <h3> ModuleId: {this.state.moduleId}</h3>
                <div className="row">
                    <div className="col-4">
                        <LessonList courseId={this.state.courseId}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                    </div>


            </div>
                <br/>
                <br/>
                <br/>
            </div>
        )}

}
