import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuItemss } from "./MenuItems";
import "./menubar.css";
import "./navbar.css";
export default () => {
    return (
        <div id="navbar">
            <div className="navbarContainer container">
                <div className="navbanner">
                    <Link to={"/"}>
                        <img src="/image/iiuc banner.jpeg" alt="" />
                    </Link>
                </div>
                <div className="menubar">
                    <div className="navlogo">
                        <Link to={"/"}><span>IIUC.</span></Link>
                    </div>
                    <div className="menuitems">
                        <Menubar />
                    </div>
                </div>
            </div>
        </div>
    )
}


const Menubar = () => {
    const uniqueId = () => "id_" + Math.random().toString(36).substr(2, 9);
    const [sidebar, setsidebar] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [click, setClick] = useState({});
    const [dclick, dsetClick] = useState(false);
    const handelclick = (e) => {
        const name = e.title;
        e.ditems?.length > 0 ? setIsVisible(true) : setsidebar(false)
        dsetClick(false)
        e.ditems?.length > 0 && click[name] ? setClick({}) : setClick({ [name]: true })
        // click[name] ? setClick({ [name]: false }) : setClick({ [name]: true })
        document.body.style.overflow = click[name] ? "visible" : "hidden"
    }
    const handeldclick = (e) => {
        const name = e.title;
        if (e.sditems?.length > 0) {
            setIsVisible(false)
            dclick[name] ? dsetClick({ [name]: false }) : dsetClick({ [name]: true })
        } else {
            setsidebar(false);
            setIsVisible(true)
            dclick[name] ? dsetClick({ [name]: false }) : dsetClick({ [name]: true })
            setClick({})
        }
    }
    if (sidebar) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "visible"
    }
    return (
        <div id="navmenu">
            <div className={`navlinks ${sidebar && "navopen"}`} onClick={() => setsidebar(false)}  >
                <div className="navlinkscontainer" onClick={e => e.stopPropagation()} >
                    <ul className="navlinkscontainerul">
                        {
                            MenuItemss.map((e, i) => {
                                const mtitle = e.title;
                                return (
                                    <li className="navlink" key={uniqueId()}>
                                        <span className="navlinkitem" onClick={() => handelclick(e)}>
                                            {
                                                !(e.ditems?.length > 0) ? <NavLink to={e.path}>{mtitle}</NavLink>
                                                    : (
                                                        <React.Fragment>
                                                            {mtitle}
                                                            <i className={click[mtitle] ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down"}></i>
                                                        </React.Fragment>
                                                    )
                                            }
                                        </span>
                                        {
                                            e.ditems?.length > 0 && click[mtitle] &&
                                            <div className={`droplinks ${isVisible && "fadeButton"}`}>
                                                <ul>
                                                    {
                                                        e.ditems.map((e1, j) => {
                                                            const dtitle = e1.title;
                                                            return (
                                                                <li className="droplink" key={uniqueId()}>
                                                                    <span className="navlinkitem droplinkitem" onClick={() => handeldclick(e1)}>
                                                                        {
                                                                            !(e1.sditems?.length > 0) ? <Link to={e1.path}>{dtitle}</Link>
                                                                                : (
                                                                                    <div>
                                                                                        {dtitle}
                                                                                        <i className={dclick[dtitle] ? "fa-solid fa-arrow-left" : "fa-solid fa-arrow-right"}></i>
                                                                                    </div>
                                                                                )
                                                                        }
                                                                    </span>
                                                                    {
                                                                        e1.sditems?.length > 0 && dclick[dtitle] &&
                                                                        <div className="sdroplinks">
                                                                            <ul>
                                                                                {
                                                                                    e1.sditems.map((e2, k) => <li><Link to={e2.path} className="sdroplink" key={uniqueId()} onClick={() => { setClick({}), setsidebar(false) }}>{e2.title}</Link></li>)
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    }
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="logobar">
                <i className={sidebar ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={() => setsidebar(!sidebar)}></i>
            </div>
        </div>
    )
}