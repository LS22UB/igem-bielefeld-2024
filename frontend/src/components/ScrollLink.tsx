import {OurLink} from "./Link.tsx";
import {useLocation} from "react-router-dom";

interface SupScrollLinkProps {
    label: string;
}


export const SupScrollLink : React.FC<SupScrollLinkProps> = ({label }) => {
    let targetId = "desc-" + label
    const location = useLocation();
    return (
        <sup> <OurLink path={location.pathname} scrollToId={targetId} text={label}/>
        </sup>
    );
};
