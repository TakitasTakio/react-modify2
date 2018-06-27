import React, {Component} from'react'
import CourseCard from '../components/CourseCard'

import CourseEditor from "./CourseEditor";



class CourseManager extends Component {
    render() {
        return(
            <div class="container-fluid">
            <h1>Course Manager</h1>
                <CourseEditor/>
                <br/>
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>

                </div>

            </div>
        )
   }
}

export default CourseManager;