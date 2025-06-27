import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {collapsibleProps} from "../interfaces/collapsibleProps.ts";



export const Collapsible: React.FC<collapsibleProps> = ({ open = false, children, title, id }) => {
    const [isOpen, setIsOpen] = useState(open);
    const location = useLocation();

    useEffect(() => {
        // Check if the current URL has the specific collapse ID
        const params = new URLSearchParams(location.search);
        const collapseId = params.get('collapseId');

        if (collapseId === id) {
            setIsOpen(true);
        }
    }, [location.search, id]);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div id={id} className="collapse-card">
                <div>
                    <div className="d-flex justify-content-between px-4">
                        <h6 className="font-weight-bold collapsible-a">{title}</h6>
                        <a onClick={handleFilterOpening}>
                            {!isOpen ? (
                                <img className='updown' src="https://static.igem.wiki/teams/5247/design/icons/angle-small-down.png" />
                            ) : (
                                <img className='updown' src="https://static.igem.wiki/teams/5247/design/icons/angle-small-up32px.png" />
                            )}
                        </a>
                    </div>
                </div>

                <div className="">
                    <div>{isOpen && <div className="p-3"><hr className='collapsible-hr' />{children}</div>}</div>
                </div>
            </div>
        </>
    );
};

export const CollapsibleTwo: React.FC<collapsibleProps> = ({ open, children, title }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <section id={title}>
                <div className="collapse-card">
                    <div>
                        <div className="d-flex justify-content-between">
                            <h3 className="font-weight-bold collapsible-a">{title}</h3>
                            <button type="button" className="btn" onClick={handleFilterOpening}>
                                {!isOpen ? (
                                    <img className='updown' src="https://static.igem.wiki/teams/5247/design/icons/angle-small-down.png" />
                                ) : (
                                    <img className='updown' src="https://static.igem.wiki/teams/5247/design/icons/angle-small-up32px.png" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <div>{isOpen && <div className="p-3"> <hr className='collapsible-hr'/> {children}</div>}</div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Collapsible;

export const CollapsibleInfoBox: React.FC<collapsibleProps> = ({ open, children, title }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div className="collapse-card bg-info">
                <div>
                    <div className="d-flex justify-content-between">
                        <h6 className="font-weight-bold collapsible-a">{title}</h6>
                        <button type="button" className="btn" onClick={handleFilterOpening}>
                            {!isOpen ? (
                                <img className='updown' src="https://static.igem.wiki/teams/5247/design/icons/angle-small-down.png" />
                            ) : (
                                <img className='updown' src="https://static.igem.wiki/teams/5247/design/icons/angle-small-up32px.png" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="">
                    <div>{isOpen && <div className="p-3"> <hr className='collapsible-hr'/> {children}</div>}</div>
                </div>
            </div>
        </>
    );
};

