import React from 'react'
import LessonTabs from './LessonTabs'


export default class LessonEditor
    extends React.Component {

    constructor(props){
        super(props);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.state = {moduleId: '', lessonId: '',lesson:{ }}

    }

    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }
    setLessonId(lessonId) {
        this.setState
        ({lessonId: lessonId});
    }






    componentDidMount() {
        this.setModuleId(
            this.props.match.params.moduleId);

        this.setLessonId(
            this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setModuleId(
            newProps.match.params.moduleId);

        this.setLessonId(
            newProps.match.params.lessonId);
    }



    render() {
        return (
            <div>
                <h2>Lesson Editor</h2>
                <h3> LessonId: {this.state.lessonId}</h3>
                <div className="row">
                    <div>
                        <h3> this.state.moduleId </h3>
                    </div>
                    <div className="container-fluid">
                        <LessonTabs/>
                    </div>


                </div>
                <br/>
                <br/>
                <br/>
            </div>
        )}

}