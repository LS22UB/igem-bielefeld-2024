import { useEffect, useState } from "react";
import {TabItem} from "../types/tabitem.ts";
import { Highlight, NewHighlight } from "../utils/highlight.ts";
import {BackUp} from "./Buttons/BackToTop.tsx";
import {useNavigation} from "../utils/useNavigation.tsx";
import { useLocation } from "react-router-dom";
import {stringToSlug} from "../utils/stringToSlug.ts";

export function OurSidebar({tabs}: {tabs: TabItem}){
    console.log("Sidebar function:" + tabs)
    if (tabs && tabs.length > 0) {
        let sidebar = createSidebar(tabs);
        console.log("TAB INFO IST DA")
        return(
            <div className="col-2 d-none d-lg-block">
                <div className="sticky-top" style={{top: "10%"}}>
                    {sidebar}
                </div>
            </div>
        )
    } else {
        return(
            <div className="col-1 d-none d-lg-block">

            </div>
        )
    }
}

// Funktion zur Erstellung der Sidebar
function createSidebar(tabs: TabItem) {

    const location = useLocation();
    let url = `/${location.pathname.startsWith("/") ? location.pathname.slice(1) : location.pathname}`;

    const {goToPlace} = useNavigation();

    const { numsBig, numsSub } = deriveTabsData(tabs);
    //console.log({ numsBig, numsSub })
    const [openTab, setOpenTab] = useState<string | null>(null);


    useEffect(() => {
        const handleScroll = () => {
            numsBig.forEach((item, ind) => {
                const element = document.getElementById(item);
                const subtitleElement = document.getElementById(`subtitle${ind}`);
                //console.log("Getting: " + `subtitle${ind}`)
                if (element && subtitleElement) {

                    Highlight({ el: element }, { subtitle: subtitleElement });
                }
            });

            numsSub.forEach((item, ind) => {
                const element = document.getElementById(item);
                //console.log("Element: " + element);
                const subtitleElement = document.getElementById(`newsubtitle${ind}`);
                if (element && subtitleElement) {
                    //console.log("Getting: " + `newsubtitle${ind}`)
                    NewHighlight({ el: element }, { subtitle: subtitleElement });
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [numsBig, numsSub, openTab]);

    const toggleTab = (tab: string) => {
        setOpenTab(openTab === tab ? null : tab);
    };

    let subtitlenumber = 0;


    return (
        <>
            <br />
            <div className="sticky-top">
                <nav className="sidebar">
                    {tabs.map((tab, index) => {
                        let slugtab = stringToSlug(tab.tab);
                        const tabId = `tab-${slugtab}`;
                        const parentId = `parent-${slugtab}`;
                        const subtitleId = `subtitle${index}`;

                        return (
                            <div key={index}>

                                <div id={subtitleId} className="detail-sideitem">
                                    <div id={parentId} className="sideitem">
                                        <a
                                            onClick={() => {
                                                toggleTab(slugtab);
                                                goToPlace({path: url, scrollToId: `${slugtab}H`});
                                                tabs.forEach((t) => {
                                                    let slugt = stringToSlug(t.tab);
                                                    if (slugt !== slugtab) {
                                                        document.getElementById(`tab-${slugt}`)!.style.display = "none";
                                                        //console.log("`tab-${slugt}`: " + `tab-${slugt}`)
                                                        document.getElementById(`parent-${slugt}`)!.classList.remove("active-sideitem");
                                                    }
                                                });
                                            }}
                                        >
                                            <summary>{tab.tab}</summary>
                                        </a>
                                        {tab.subtabs && (
                                            <span
                                                id={tabId}
                                                className="sidesubtab"
                                                style={{ display: openTab === slugtab ? "block" : "none" }}
                                            >
                            <ul>
                              {tab.subtabs.map((subtab) => {
                                  const subTabId = `newsubtitle${subtitlenumber}`;
                                  subtitlenumber = subtitlenumber + 1;
                                  let subslugtab = `${stringToSlug(subtab)}H`;
                                  return (
                                      <li key={subtitlenumber} id={subTabId}>
                                          <a
                                              onClick={() => {
                                                  goToPlace({path: url, scrollToId: subslugtab});
                                              }}>
                                              {subtab}
                                          </a>
                                      </li>
                                  );
                              })}
                            </ul>
                          </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </nav>
                <BackUp/>
            </div>
        </>
    );
}


function deriveTabsData(tabs: Array<{ tab: string; subtabs?: Array<string> }>) {
    const numsBig: string[] = [];
    const numsSub: string[] = [];

    tabs.forEach(tab => {
        let count = 1;
        numsBig.push(stringToSlug(tab.tab));
        if (tab.subtabs) {
            tab.subtabs.forEach((index) => {
                //console.log(index)
                numsSub.push(stringToSlug(index));
                count += 1;
            });
        }
    });

    return { numsBig, numsSub };
}


