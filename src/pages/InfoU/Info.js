import { Route, Switch } from 'react-router';
import infoCss from'./Info.module.css'
import NavbarU from './NavBarU/NavbarU'
import AboutMe from './pages/AboutMe/AboutMe';
const Info = props => {
return (
    <div className={infoCss.container}>
      <div className={infoCss.pages}>
           pages (80 %)
           <Switch>
               <Route to='/aboutme'><AboutMe /></Route>
           </Switch>
      </div>
      <div className={infoCss.navbar}>
           <NavbarU />
      </div>
    </div>
);
}
export default Info;