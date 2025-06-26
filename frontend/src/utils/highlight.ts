// Subsections
export function NewHighlight({el}: {el: HTMLElement | null}, {subtitle}:{subtitle: HTMLElement | null}){
    let TopDistance = 195; 
    if (el != null && subtitle != null){
        if (el.getBoundingClientRect().top < TopDistance + 1 && el.getBoundingClientRect().bottom > TopDistance){
            subtitle.style.color = "var(--textColor)";
            subtitle.style.fontWeight = "700";   
        }
        else{
            subtitle.style.color = "var(--textColor)";
            subtitle.style.marginLeft = "0"; 
            subtitle.style.backgroundColor = "";
            subtitle.style.fontWeight = "normal";
        }
    }
    
  }

  // Sections
  export function Highlight({el}: {el: HTMLElement | null}, {subtitle}:{subtitle: HTMLElement | null}){
    let TopDistance = 195; 
    if (el != null && subtitle != null){
       if (el.getBoundingClientRect().top < TopDistance + 1 && el.getBoundingClientRect().bottom > TopDistance){
            (subtitle.childNodes[0] as HTMLElement).classList.add("active-sideitem");
            subtitle.style.color = "var(--textColor)";
            subtitle.style.fontWeight = "900";
            if(subtitle.childNodes[0].childNodes[1] != undefined){ 
                (subtitle.childNodes[0].childNodes[1] as HTMLElement).style.display = "block";
            }
        } else {
            (subtitle.childNodes[0] as HTMLElement).classList.remove("active-sideitem");
            subtitle.style.fontWeight = "normal";
            if(subtitle.childNodes[0] != undefined){
                 (subtitle.childNodes[0] as HTMLElement).classList.remove("active-sideitem");
                 if(subtitle.childNodes[0].childNodes[1] != undefined){
                     (subtitle.childNodes[0].childNodes[1] as HTMLElement).style.display = "none";
                 }
                }
        }
    } else {
        console.error("Element oder Subtitle nicht gefunden:", el, subtitle);
    }
}
