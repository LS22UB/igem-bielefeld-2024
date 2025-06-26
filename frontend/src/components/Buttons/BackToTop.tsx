export function BackUp(){
    return(
        <>
            <br/>
            <div className="col" id="eng-backup" style={{display: "flex", alignItems: "right"}}>
                <button onClick={() => scrollUpWithOffset()} className="btn backtotop">
                    Back to Top &#8593;
                </button>
            </div>
        </>
    )
}

function scrollUpWithOffset() {
    if (typeof window !== 'undefined') {
        const offset = window.innerHeight  ; // 50% der Viewport-Höhe
        const targetScrollPosition = Math.max(0,  offset); // Neue Scroll-Position, aber nicht unter 0

        //console.log(`Scrolling up to position: ${targetScrollPosition}`);
        window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
    }
}