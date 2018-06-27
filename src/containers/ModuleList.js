import React,{Component} from 'react'
import ModuleListItem from '../components/ModuleListItem'


export default class ModuleList
    extends React.Component{
       constructor(){super();
       this.state={
                module:{title:""},
                modules:[
               {title:"Module 1 - Monet", id:123},
               {title:"Module 2 - Renoir", id:234},
               {title:"Module 3 - Degas", id:345},
               {title:"Module 4 - Sisley", id:456},
               {title:"Module 5 - Rodin", id:567},
               {title:"Module 6 - Bazille", id:678}
               ]}
       this.titleChanged = this.titleChanged.bind(this)
       this.createModule = this.createModule.bind(this)
       }

    titleChanged(event){
           this.setState({module:{title:event.target.value}})
    }

    createModule(){
           console.log(this.state.module);

    }

    renderListOfModules(){
           let modules = this.state.modules.map(function (module) {
               return<ModuleListItem title={module.title}
               key={module.id}/>

           });
           return modules;

    }


       render(){
           return(
               <div>
               <input onChange={this.titleChanged}
                      className="form-control"
                      placeholder="title"
                      value={this.state.module.title}/>
               <button onClick={this.createModule}
                   className="btn btn-outline-primary btn-block">
                   <i className="fa fa-user-plus"></i>
               </button>
                   <br/>
               <ul className="list-group">
                   {this.renderListOfModules()}

               </ul>
               </div>
           )
       }
}