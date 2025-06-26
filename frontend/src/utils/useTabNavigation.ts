import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { openFromOtherPage } from './openFromOtherPage.ts';
import { handleScroll } from './handleScroll.ts';
import { openNestedTab } from './openNestedTab.ts';
import { openTab } from './openTab.ts';
import { openTabInCollapsible } from './opentTabinCollapsible.ts';

// Custom Hook for central tab navigation
export const useTabNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [activeSubTab, setActiveSubTab] = useState<string | null>(null);
    const [, setActiveCollapsible] = useState<string | null>(null);


    // Tab Visibility Handler
    const updateTabVisibility = (tabId: string | null, subTabId?: string | null) => {
        document.querySelectorAll('.enginneeringtab').forEach((tab) => {
            (tab as HTMLElement).style.display = 'none'; // All tabs hidden
        });

        if (tabId) {
            const tabElement = document.getElementById(`tab-${tabId}`);
            if (tabElement) {
                tabElement.style.display = 'block'; // Show the current tab
            }

            // Handle nested subtabs
            if (subTabId) {
                const subTabElement = document.getElementById(subTabId);
                if (subTabElement) {
                    subTabElement.style.display = 'block'; // Show subtab
                }
            }
        }
    };

    // Tab Change and URL Update
    const handleTabChange = (tabId: string, subTabId?: string) => {
        console.log("📌 handleTabChange aufgerufen!");
        console.log("📌 Neuer Tab:", tabId);
        console.log("📌 Neuer SubTab:", subTabId);
        setActiveTab(tabId);
        setActiveSubTab(subTabId || null);

        // Update URL
        let newUrl = `${location.pathname}?tab=${tabId}`;
        if (subTabId) {
            newUrl += `&subTab=${subTabId}`;
        }
        console.log("➡️ Navigiere zu:", newUrl);
        navigate(newUrl, { replace: true });

        // Immediately update tab visibility
        updateTabVisibility(tabId, subTabId);
    };
    useEffect(() => {
        /* console.log("📢 useEffect ausgelöst durch pathname-Änderung!");
        console.log("🛤️ Neuer Pathname:", location.pathname); */
    }, [location.pathname]);


    // On Location Change
    useEffect(() => {
        /* console.log("On Location Change") */
        const params = new URLSearchParams(location.search);
        const tabId = params.get('tab');
        const subTabId = params.get('subTab');

        // Restore visibility
        updateTabVisibility(tabId, subTabId);

        // Handle scroll or collapsibles
        const collapseId = params.get('collapseId');
        const scrollToId = params.get('scrollTo');
        const changeTo = params.get('changeTo');
        const colTab = params.get('colTab');
        //  const navigate = useNavigate();




        // scrolls to a specific collapsible element
        if (collapseId) {
            setActiveCollapsible(collapseId);
            handleScroll(collapseId);
        }
        if (colTab && collapseId) {
            setActiveCollapsible(collapseId);
            openTabInCollapsible(colTab, collapseId); // Öffne den Tab innerhalb des Collapsibles

        }

        // opens main and (if necessary) subtab
        if (tabId) {
            let tab = document.getElementById(tabId);
            let tabClass = tab!.className;
            if (subTabId) {
                let subTab = document.getElementById(subTabId);
                let parentClass = (subTab as HTMLElement).classList[1];
                openNestedTab(tabId, subTabId, parentClass, tabClass);
            } else {
                openTab(tabId, tabClass);
            }
        }



        // opens tab on another page
        if (tabId) {
            openFromOtherPage(tabId)({ currentTarget: document.getElementById(tabId)! });
        }

        if (scrollToId) {
            const element = document.getElementById(scrollToId);
            if (element) {
                const viewportHeight = window.innerHeight;
                const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const scrollToPosition = targetPosition - viewportHeight / 5 + element.clientHeight / 2;
                window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
            }
        }
        if (changeTo) {
            const element = document.getElementById(changeTo);
            if (element) {
                const viewportHeight = window.innerHeight;
                const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const scrollToPosition = targetPosition - viewportHeight / 2 + element.clientHeight / 2;
                window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
            }
        }

        setActiveTab(tabId);
        setActiveSubTab(subTabId || null);
    }, [location.search]);

    return { activeTab, activeSubTab, handleTabChange };
};
