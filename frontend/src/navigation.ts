import { Folder, PageRef, Page } from "./interfaces/pagesInterface.ts";

export const Navigation: (Page | PageRef | Folder)[] = [
    {
        name: "Home",
        title: "Home",
        path: "/",
    },
    {
        name: "Project",
        folder: [
            {
                name: "Description",
                title: "Description",
                path: "/description",
            },
            {
                name: "Engineering",
                title: "Engineering",
                path: "/engineering",
            },
            {
                name: "Biosafety",
                title: "Biosafety",
                path: "/safety",
            },
           /* {
                name: "Project Documentation",
                title: "Project Documentation",
                path: "/project-documentation",
            }*/
        ],
    },
    {
        name: "Team",
        folder: [
            {
                name: "Roster",
                title: "Roster",
                path: "/team",
            },
            /* {
                 name: "Attributions",
                 title: "Attributions",
                 path: "/attributions",
             },
             {
                 name: "Sponsors & Partners",
                 title: "Sponsors & Partners",
                 path: "/partners",
             },*/
            {
                name: "iGEM Bielefeld",
                title: "iGEM Bielefeld",
                path: "/igem-bielefeld",
            },
        ],
    },
    {
        name: "Project",
        folder: [
            {
                name: "Description",
                title: "Description",
                path: "/description",
            },
            {
                name: "Engineering",
                title: "Engineering",
                path: "/engineering",
            },
            {
                name: "Biosafety",
                title: "Biosafety",
                path: "/safety",
            },
            {
                name: "Project Documentation",
                title: "Project Documentation",
                path: "/project-documentation",
            }
        ],
    },
    {
        name: "Lab",
        folder: [
            {
                name: "Materials & Methods",
                title: "Materials & Methods",
                path: "/materials-methods",
            },
            {
                name: "Results",
                title: "Results",
                path: "/results",
            },
            {
                name: "Parts",
                title: "Parts",
                path: "/parts",
            },
            {
                name: "Notebook",
                title: "Notebook",
                path: "/notebook",
            },
        ]
    },
    {
        name: "Human Practices",
        title: "Human Practices",
        path: "/human-practices",
    },
    {
        name: "Jamboree",
        folder: [
            {
                name: "Overview",
                title: "Overview",
                path: "/judging",
            },
            {
                name: "Judging Session",
                title: "Judging Session",
                path: "/judging",
            },
        ]
    },
    {
        name: "Continuation",
        folder: [
            {
                name: "Publication",
                title: "Publication",
                path: "/publication",
            },
        ]
    }
    ]