interface pictureinfos {
    link: string,
    alttext: string,
    description:  React.ReactNode | string,
    num: string |number;
}

export interface FigureProps{
    pictures: pictureinfos[],
    bg?: string;
    orientation?: "vertical" | "horizontal";
}