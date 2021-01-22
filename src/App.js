import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from './shared/components/sidebar/Sidebar';
import Header from './shared/components/Header';

import LoginContainer from './pages/LoginContainer';
import DashboardContainer from './pages/DashboardContainer';
import IndexDepartmentsContainer from './pages/departments/IndexDepartmentsContainer';
import CreateDepartmentContainer from './pages/departments/CreateDepartmentContainer';
import EditDepartmentContainer from './pages/departments/EditDepartmentContainer';
import IndexEmployeesContainer from './pages/employees/IndexEmployeesContainer';
import CreateEmployeeContainer from './pages/employees/CreateEmployeeContainer';
import EditEmployeeContainer from './pages/employees/EditEmployeeContainer';

const App = () => {
  const [user, setUser] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if(!user) {
    return <LoginContainer setUser={setUser} />
  }

  return (
    <Router>
      <div className="d-flex">
        <Sidebar isOpen={true} />

        <div className="content">
          <Header />
          
          <div className="content__inner">
            <Switch>
              <Route exact path="/departments">
                <IndexDepartmentsContainer user={user} />
              </Route>

              <Route exact path="/departments/create">
                <CreateDepartmentContainer user={user} />
              </Route>

              <Route exact path="/departments/:id">
                <EditDepartmentContainer user={user} />
              </Route>

              <Route exact path="/employees">
                <IndexEmployeesContainer user={user} />
              </Route>

              <Route exact path="/employees/create">
                <CreateEmployeeContainer user={user} />
              </Route>

              <Route exact path="/employees/:id">
                <EditEmployeeContainer user={user} />
              </Route>

              <Route path="/"> 
                <DashboardContainer user={user} />
              </Route>
            </Switch>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;