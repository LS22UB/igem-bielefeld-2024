import {Page} from "../interfaces/pagesInterface.ts";
import {Pages} from "../pages.ts";

export const getPathMapping = () => {
  return Pages.reduce<{
    [key: string]: Page;
  }>((map, item) => {
    if ("path" in item && item.path && item.component) {
      console.log("Path: " + item.path + " und " + item.navlist )
      map[item.path] = {
        name: item.name,
        title: item.title,
        path: item.path,
        component: item.component,
        header: item.header,
        navlist: item.navlist, 
      };
    
    } else if ("folder" in item && item.folder) {
      item.folder.forEach((page) => {
        if (page.path && page.component) {
          map[page.path] = {
            name: page.name,
            title: page.title,
            path: page.path,
            component: page.component,
            header: page.header!,
            navlist: page.navlist!, 
          };
        }
      });
    }
    return map;
  }, {});
};
