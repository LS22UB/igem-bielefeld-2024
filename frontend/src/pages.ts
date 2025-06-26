import {Folder, Page } from "./interfaces/pagesInterface"
import { Home } from "./pages/home"

export const Pages: (Page | Folder)[] = [
    {
        name: "Home",
        title: "Home",
        path: "/",
        component: Home,
        header: undefined,
        navlist: []
    }
]