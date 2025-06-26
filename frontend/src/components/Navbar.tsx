import { useEffect, useRef, useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {OurLink} from "./Link";
import {Navigation} from "../navigation.ts";

export function Navbar() {
    const navbarCollapseRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressImageRef = useRef<HTMLImageElement>(null);
    let scrollTimeout: NodeJS.Timeout;


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Use document.body.scrollHeight to get the full height of the document
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            // Calculate the scroll percentage properly
            const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;



            // Progress bar logic
            if (progressBarRef.current) {
                progressBarRef.current.style.width = `${scrollPercentage}%`;


                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    if (progressImageRef.current) {
                        progressImageRef.current.classList.remove('walking');
                        progressImageRef.current.style.transform = 'translateY(0)';
                    }
                }, 1000);
            }
        };

        const onLoad = () => {
            // Trigger scroll event manually to ensure progress is set correctly on load
            handleScroll();
        };

        // Listen for the page load event to ensure content is fully loaded
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', onLoad); // Trigger when the page is fully loaded

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', onLoad);
            clearTimeout(scrollTimeout);
        };
    }, []);




    useEffect(() => {
        const handleLinkClick = (event: Event) => {
            if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
                const target = event.target as HTMLElement;
                if (target.closest('.dropdown-text')) {
                    navbarCollapseRef.current.classList.remove('show');
                }
            }
        };

        const links = document.querySelectorAll('.navbar-text');
        links.forEach(link => link.addEventListener('click', handleLinkClick));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleLinkClick));
        };
    }, []);

    // Handle the dropdown toggle state individually

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const pages = Navigation.map((item, pageIndex) => {
        const isOpen = openIndex === pageIndex;

        const showDropdown = () => setOpenIndex(pageIndex);
        const hideDropdown = () => setOpenIndex(null);
        if ("folder" in item && item.folder) {
            const folderItems = item.folder.map((subpage, subpageIndex) => {
                if (subpage.path) {
                    return (
                        <OurLink text={subpage.name} path={subpage.path} classes='dropdown-item' key={`subpage-${pageIndex}-${subpageIndex}`}/>
                    );
                }
                return null;
            });
            return (
                <NavDropdown
                    key={`page-${pageIndex}`}
                    title={item.name}
                    show={isOpen}
                    id="basic-nav-dropdown"
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                >
                    {folderItems}
                </NavDropdown>
            );
        } else if ("path" in item && item.path) {
            return (
                <OurLink text={item.name} path={item.path} key={`page-${pageIndex}`} classes='nav-link'/>
            );
        }
    });

    {/* <Nav.Link  as={Link} to={item.path}>
          {item.name}
        </Nav.Link> */}

    return (
        <BootstrapNavbar className="navbar-custom" expand="lg" bg="bg-transparent" variant="light"/* bg={isLightMode ? "d" : "l"} variant={isLightMode ? "dark" : "light"}  */fixed="top">
            <Container className="py-2">
                <BootstrapNavbar.Brand>
                    <div className="row">
                        <div className="col" style={{width: "fit-content"}}>
                            <a href='home'><img src='https://static.igem.wiki/teams/5247/logos-team/precyse-no-slogan.png' style={{maxHeight: "5vh", borderRadius: "50%"}} alt='logo'/> </a>
                        </div>
                    </div>
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav"/>
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="left-aligned">
                        {pages}
                    </Nav>
                </BootstrapNavbar.Collapse>
                <div id="scroll-progress" className="scroll-progress" ref={progressBarRef}>

                </div>
            </Container>
        </BootstrapNavbar>
    );
}
