import React,{Component} from 'react'
import ModuleListItem from '../components/ModuleListItem'
import ModuleService from '../services/ModuleService'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import ModuleEditor from "./ModuleEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default class ModuleList
    extends React.Component{




       constructor(props){
           super(props);
       this.state={ courseId: '',
               module: { },
           modules:[]}
       this.titleChanged = this.titleChanged.bind(this)
       this.createModule = this.createModule.bind(this)
       this.setCourseId = this.setCourseId.bind(this)
       this.setModuleTitle = this.setModuleTitle.bind(this)
       this.deleteModule = this.deleteModule.bind(this)

       this.moduleService = ModuleService.instance

       }



    setCourseId(courseId){
           this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    setModules(modules) {
        this.setState({modules: modules})
    }


    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)

    }


    setModuleTitle(event) {
        this.setState({module: {
                title: event.target.value
            }})}




    titleChanged(event){
           this.setState({module: {title:event.target.value}})
    }

    createModule(){
        this.moduleService.createModule
        (this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId);
            })



    }
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }



    renderListOfModules(){

           let modules =
               this.state.modules.map(module=> {
               return ( <ModuleListItem
                   key={module.id} module={module} delete={this.deleteModule}/>)

           });
        return modules;

    }








    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });

    }






    render(){
           return(
               <div>
                   <h5>Module List for courseId: {this.state.courseId}</h5>
               <input onChange={this.setModuleTitle}
                      className="form-control"
                      placeholder="New Module"
                      value={this.state.module.title}/>
               <button onClick={this.createModule}
                   className="btn btn-outline-primary btn-block">
                   <i className="fa fa-user-plus"></i>
               </button>
                   <br/>
               <ul className="list-group">
                   {this.renderListOfModules()}

               </ul>


               <div className="row">
                       <div className="col-4">
                           <h4>Module ...</h4>
                       </div>

               <div className="col-8">
                   <Router>
                   <Route path="/course/:courseId/module/:moduleId"
                          component={ModuleEditor}/>
                   </Router>

               </div>
               </div>



               </div>
           )
       }
}