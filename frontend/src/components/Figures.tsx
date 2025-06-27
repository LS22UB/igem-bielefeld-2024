import {FigureProps} from "../interfaces/figueProps.ts";


export function Figure(props: FigureProps) {
    let background = "";
    if (props.bg){
        background = "bg-" +  props.bg;
    }
    let orvalue = "";
    if (props.orientation == "horizontal") {
        orvalue = "row align-items-center";
    }
    return(
        <div>
            <div className={orvalue}>
                <figure className={"figure-wrapper "}>
                    {props.pictures.map((pic, index) => (
                        <div>
                            <img key={index} src={pic.link} alt={pic.alttext} className={"responsive-image " +  + background} />
                            <figcaption><b>Figure {pic.num ?? index}.</b> <span>{pic.description}</span></figcaption>
                        </div>
                    ))}
                </figure>
            </div>
        </div>

    )
}
