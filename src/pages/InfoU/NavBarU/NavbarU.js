 import { Link } from 'react-router-dom';
import navCss from './NavbarU.module.css';
 const NavbarU = props =>{
return (
    <div>
        <header className={navCss.head}>
            <div className={navCss.menu}>
                <ul className={`${navCss.list} ${navCss.grid}`}>
                    <li className={navCss.item}> <Link className={navCss.link} to='/about'>About</Link>   </li>
                    <li className={navCss.item}> <Link className={navCss.link} to='/project'>Project</Link>   </li>
                    <li className={navCss.item}> <Link className={navCss.link} to='/education'>Education</Link>   </li>
                    <li className={navCss.item}> <Link className={navCss.link} to='/contact'> Contact </Link> </li>
                </ul>
            </div>
        </header>
    </div>
);
 }
 export default NavbarU;