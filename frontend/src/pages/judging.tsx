import { useTabNavigation } from "../utils/useTabNavigation";

export function Judging() {
    useTabNavigation();
    return (
        <>
            <div className="row align-items-center">
                <h3 style={{textAlign: "center"}}>Our Project, Our Victory</h3>
                <h4 style={{textAlign: "center"}}>Gold Medal for Excellence in Synthetic Biology and Engineering Success as one of the best therapeutic projects</h4>

                <p style={{textAlign: "center"}}>A true honor for our <b>cutting-edge</b> contributions to the world of synthetic biology and <b>engineering breakthroughs</b>.</p>

                <br/>
            </div>
            <div className="row align-items-center">
                <div className="col-4 justify-content-center d-flex">
                    <img height="400px" className="center" src="https://static.igem.wiki/teams/5247/thaw/best-integrated-human-pratices.webp" />
                </div>
                <div className="col-4 justify-content-center d-flex">
                    <img height="400px" className="center" src="https://static.igem.wiki/teams/5247/thaw/best-presentation-award.webp" />
                </div>
                <div className="col-4 justify-content-center d-flex">
                    <img height="400px" className="center" src="https://static.igem.wiki/teams/5247/thaw/safety-and-security-neu.webp" />
                </div>
            </div>
            <div className="row align-items-center" style={{marginBottom: "none !important", paddingBottom: "0px !important"}}>
                <div className="col" style={{marginBottom: "none !important", paddingBottom: "0px !important"}}>
                    <h3 style={{textAlign: "center"}}>Best Integrated Human Practices</h3>
                </div>
                <div className="col" style={{marginBottom: "none !important", paddingBottom: "0px !important"}}>
                    <h3 style={{textAlign: "center"}}>Best Presentation</h3>
                </div>
                <div className="col" style={{marginBottom: "none !important", paddingBottom: "0px !important"}}>
                    <h3 style={{textAlign: "center"}}>Safety and Security Award</h3>
                </div>
            </div>
        </>
    )
}