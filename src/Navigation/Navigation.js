import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <header className="header-area">
            <div className="left">
               <Link to="/"><i className="fa fa-search" aria-hidden="true"></i></Link>
            </div>
            <div className="right">
               <Link to="/"><i className="fa fa-user" aria-hidden="true"></i></Link>
            </div>
            <div className="container">
               <div className="row d_flex">
                  <div className="col-sm-3 logo_sm">
                     <div className="logo">
                        <Link href="/"></Link>
                     </div>
                  </div>
                  <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
                     <div className="navbar-area">
                        <nav className="site-navbar">
                           <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/action">take action</Link></li>
                                <li><Link to="/covido" className="logo_midle">covido</Link></li>
                                <li><Link to="/news">news</Link></li>
                                <li><Link to="/doctores">doctores</Link></li>
                                <li><Link to="/contact">Contact </Link></li>
                           </ul>
                           <button className="nav-toggler">
                           <span></span>
                           </button>
                        </nav>
                        
                     </div>
                  </div>
               </div>
            </div>
            </header>
            <Outlet />
        </>
    )
}

export default Navigation;