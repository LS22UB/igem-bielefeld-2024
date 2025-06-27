import { stringToSlug } from "../utils/stringToSlug.ts";

export function Section({title, children}: {title: string, children: React.ReactNode}){
    let id = stringToSlug(title);
    let sec_id = id;
    let header_id = `${id}H`;
    return(
        <div className="col">
            <section id={sec_id} className="section">
                <h1 id={header_id}>{title}</h1>
                {children}
            </section>
        </div>
    )
}

export function Subesction({title, children}: {title: string, children: React.ReactNode}){
    let id = stringToSlug(title);
    return(
        <section id={id}>
            <h2 id={id + "H"}>{title}</h2>
            {children}
        </section>
    )
}