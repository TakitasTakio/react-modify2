import React, {Component} from'react'
import CourseCard from '../components/CourseCard'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
import CourseList from "./CourseList";
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import iCourseEditor from './iCourseEditor'
import ModuleEditor from "./ModuleEditor";
import LessonEditor from "./LessonEditor";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';



class CourseManager extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
            <Router>

            <div class="container-fluid">
            <h1>Course Manager</h1>
                <Route path="/course/list"
                component={CourseList}>
                </Route>
                <br/><br/>
                <Route path="/course/:courseId/edit"
                       component={iCourseEditor}>

                </Route>
                <Route path="/course/:courseId/module/:moduleId"
                       component={ModuleEditor}/>
                <Route path="/module/:moduleId/lesson/:lessonId"
                       component={LessonEditor}/>

                <br/>


            </div>
            </Router>

                <h3 className="font-italic">Welcome to the course,module,lesson platform!</h3>
                <div>
                    <Navbar color="link" light expand="md">
                        <NavbarBrand href="/">@Homepage</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/course/list">CourseList</NavLink>
                                </NavItem>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        MENU
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Module
                                        </DropdownItem>
                                        <DropdownItem>
                                            Lesson
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            CourseCard
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>

            </div>
        )
   }
}

export default CourseManager;