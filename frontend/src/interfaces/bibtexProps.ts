export interface BibEntry {
    ENTRYTYPE: string;
    TITLE?: string;
    AUTHOR?: string;
    journal?: string;
    volume?: string;
    pages?: string;
    year?: string;
    doi?: string;
    [key: string]: any;
}

export interface BibtexParserProps {
    bibtexSources: string[]; // Accept an array of BibTeX strings
    special?: string,
    start?: number
}