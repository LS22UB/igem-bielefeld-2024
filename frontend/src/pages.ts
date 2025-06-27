import {Folder, Page } from "./interfaces/pagesInterface"
import { Home } from "./pages/home"
import {HumanPractices} from "./pages/human practices/humanPractices.tsx";
import {Biosafety} from "./pages/biosafety.tsx";
import {Contribution} from "./pages/contribution.tsx";
import {Description} from "./pages/description.tsx";
import {Engineering} from "./pages/engineering.tsx";
import {igemBielefeld} from "./pages/igemBielefeld.tsx";
import {Judging} from "./pages/judging.tsx";
import {bielefeldtabs} from "./data/sidebartabs.ts";
import {Methods} from "./pages/methods.tsx";
import {Notebook} from "./pages/Notebook.tsx";
import {Parts} from "./pages/parts.tsx";
import {Results} from "./pages/results.tsx";
import {Roster} from "./pages/roster.tsx";
import {Paper} from "./pages/paper.tsx";

export const Pages: (Page | Folder)[] = [
    {
        name: "Home",
        title: "Home",
        path: "/",
        component: Home,
        header: undefined,
        navlist: []
    },
    {
        name: "Home",
        title: "Home",
        path: "/home",
        component: Home,
        header: undefined,
        navlist: []
    },
    {
        name: "Biosafety",
        title: "Biosafety",
        path: "/safety",
        component: Biosafety,
        header: undefined,
        navlist: []
    },
    {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
        header: undefined,
        navlist: []
    },
    {
        name: "Description",
        title: "Description",
        path: "/description",
        component: Description,
        header: undefined,
        navlist: []
    },
    {
        name: "Engineering",
        title: "Engineering",
        path: "/engineering",
        component: Engineering,
        header: undefined,
        navlist: []
    },
    /*{
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
        header: undefined,
        navlist: []
    },*/
    {
        name: "Home",
        title: "Home",
        path: "/",
        component: Home,
        header: undefined,
        navlist: []
    },
    {
        name: "Home",
        title: "Home",
        path: "/home",
        component: Home,
        header: undefined,
        navlist: []
    },
    {
        name: "Human Practices",
        title: "Human Practices",
        path: "/human-practices",
        component: HumanPractices,
        header: undefined,
        navlist: []
    },
    {
        name: "iGEM Bielefeld",
        title: "iGEM Bielefeld",
        path: "/igem-bielefeld",
        component: igemBielefeld,
        header: undefined,
        navlist: bielefeldtabs
    },
    {
        name: "Overview",
        title: "Overview",
        path: "/judging",
        component: Judging,
        header: undefined,
        navlist: []
    },
    {
        name: "Materials & Methods",
        title: "Materials & Methods",
        path: "/materials-methods",
        component: Methods,
        header: undefined,
        navlist: []
    },
    {
        name: "Notebook",
        title: "Notebook",
        path: "/notebook",
        component: Notebook,
        header: undefined,
        navlist: []
    },
    {
        name: "Parts",
        title: "Parts",
        path: "/parts",
        component: Parts,
        header: undefined,
        navlist: []
    },
   /* {
        name: "Project Documentation",
        title: "Project Documentation",
        path: "/project-documentation",
        component: ,
        header: undefined,
        navlist: []
    },*/
    {
        name: "Results",
        title: "Results",
        path: "/results",
        component: Results,
        header: undefined,
        navlist: []
    },
    /*{
        name: "Sponsors & Partners",
        title: "Sponsors & Partners",
        path: "/partners",
        component: Partners,
        header: undefined,
        navlist: []
    },*/
    {
        name: "Team",
        title: "Team",
        path: "/team",
        component: Roster,
        header: undefined,
        navlist: []
    },
    {
        name: "Publication",
        title: "Publication",
        path: "/publication",
        component: Paper,
        header: undefined,
        navlist: []
    },


]