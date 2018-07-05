import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'


export default class LessonListItem
    extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <li className="list-group-item">
                    <Link to={`/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                        {this.props.lesson.title}
                    </Link>

                    <span className="float-right">
               <i onClick={() => {this.props.delete(this.props.lesson.id)}} className="fa fa-trash-o"> </i>

                </span>
                </li>

            </div>
        )
    }
}