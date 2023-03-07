import { Link } from 'react-router-dom'
import logo from '../assest/logo.ico'
import classes from '../styles/MainNavigation.module.css'
const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <div className={classes.navbarContainer}>
                    <ul className={classes.list}>
                        <li> <img className='logo' src={logo} alt="logo"></img></li>
                        <li> <Link >שלום </Link> </li>
                    </ul>

                    <ul className={classes.list}>
                        <li> <Link to='/'>דף הבית</Link></li>
                        <li> <Link to='/New-Diagnosis'>  אבחון חדש</Link> </li>
                        <li><Link to='/Diagnostic-history'>היסטורית אבחונים</Link> </li>
                        <li><Link to='/concludingParagraph/newDiagnosis'> כתיבת דוח אבחון</Link> </li>

                        <li> <Link to='/Glossary'>מילון מושגים</Link></li>
                    </ul>

                    <ul className={classes.list}>
                        <li> <Link to='/logIn'> התחבר</Link> </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default MainNavigation