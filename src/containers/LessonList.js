import React,{Component} from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import LessonService from "../services/LessonService";
import LessonListItem from '../components/LessonListItem';

import LessonEditor from "./LessonEditor";





export default class LessonList
    extends React.Component{

     constructor(props){
         super(props);
         this.state={
             courseId:'',
             moduleId:'',
             module:{},
             modules:[],
               lesson:{},
             lessons:[ ]

         }
         this.titleChanged = this.titleChanged.bind(this)
         this.createLesson = this.createLesson.bind(this)
         this.setModuleId = this.setModuleId.bind(this)
         this.setLessonTitle = this.setLessonTitle.bind(this)
         this.deleteLesson = this.deleteLesson.bind(this)



         this.lessonService = LessonService.instance

     }




     setModuleId(moduleId){
        this.setState({moduleId: moduleId});
    }
    setLessons(lessons){
        this.setState({lessons: lessons})
    }

    componentDidMount() {

        this.setModuleId(this.props.moduleId);
    }



    componentWillReceiveProps(newProps){
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.moduleId)

    }


    setLessonTitle(event) {
        this.setState({lesson: {
                title: event.target.value
            }})}




    titleChanged(event){
        this.setState({lesson: {title:event.target.value}})
    }

    createLesson(){
        this.lessonService.createLesson
        (this.state.lessonId)
            .then(() => {
                this.findAllLessonsForModule
                (this.state.lesson);
            })



    }

    findAllLessonsForModule(moduleId) {
        this.lessonService
            .findAllLessonsForModule(moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }



    renderListOfLessons(){

        let lessons =
            this.state.lessons.map(lesson=> {
                return ( <LessonListItem
                    key={lesson.id} lesson={lesson} delete={this.deleteLesson}/>)

            });
        return lessons;

    }








    deleteLesson(lessonId) {
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule
                (this.state.moduleId)
            });

    }








     render(){
         return(
             <div>
                 <h2>Lesson List</h2>
                 <input onChange={this.setLessonTitle}
                        className="form-control"
                        placeholder="New Lesson"
                       />
                 <button onClick={this.createLesson}
                         className="btn btn-outline-primary btn-block">
                     <i className="fa fa-user-plus"></i>
                 </button>
                 <br/>
                 <ul className="list-group">
                     {this.renderListOfLessons()}

                 </ul>


                 <div className="row">
                     <div className="col-4">
                         <h4>Lesson ...</h4>
                     </div>
                 </div>

                 <div className="col-8">
                     <Router>
                         <Route path="/module/:moduleId/lesson/:lessonId"
                                component={LessonEditor}/>
                     </Router>

                 </div>








             </div>
         )
     }









}