import React, { useState, useEffect } from "react";
import bibtexParse from "bibtex-parser-js";
import {BibEntry, BibtexParserProps} from "../interfaces/bibtexProps.ts";




function formatPages(pages: string | undefined): JSX.Element | null {
    // Check if pages is provided and is a non-empty string
    if (pages && pages.length > 0) {
        // Check for common page range separators
        const pageRangeRegex = /--|-|–|â€“/; // RegEx to match various dash types
        if (pageRangeRegex.test(pages)) {
            const pag = pages.split(pageRangeRegex).map(p => p.trim());
            const begin = pag[0];
            const end = pag[1];

            // Return formatted JSX
            return (
                <>
                    ,&nbsp;<span property="schema:pageBegin">{begin}</span>-<span property="schema:pageEnd">{end}</span>
                </>
            );
        } else if (/^\d+(-\d+)?$/.test(pages)) {
            // If pages is a single numeric range, return it directly
            return (
                <>
                    ,&nbsp;<span property="schema:pageBegin">{pages}</span>
                </>
            );
        } else {
            // Handle non-numeric page info
            console.warn(`Non-numeric page information detected ('${pages}'). Treating as missing.`);
            return null; // Return null if invalid
        }
    } else {
        console.warn("Sorry, no page information.");
        return null; // Return null if no page info
    }
}


export const BibtexParser: React.FC<BibtexParserProps> = ({ bibtexSources , special, start}) => {
    const [parsedEntries, setParsedEntries] = useState<BibEntry[]>([]);

    // Parse BibTeX on component mount or when sources change
    useEffect(() => {
        //console.log("Parsing BibTeX sources: ", bibtexSources);

        try {
            const allEntries: BibEntry[] = [];
            bibtexSources.forEach((bibtex) => {
                // console.log(`Parsing BibTeX entry #${index + 1}: `, bibtex);
                const parsed = bibtexParse.toJSON(bibtex);
                // console.log(`Parsed entry: `, parsed);
                allEntries.push(...parsed);
            });
            setParsedEntries(allEntries);
            //console.log("All parsed entries: ", allEntries);
        } catch (error) {
            console.error("Error parsing BibTeX: ", error);
            alert("An error occurred while parsing the BibTeX entries. Please check the format." + bibtexSources);
        }
    }, [bibtexSources]);

    // Helper function to render AUTHORS
    const formatAuthors = (authors: string): string => {
        //console.log("Original input:", authors);

        // Bereinigen des Eingabestrings und Ersetzen von "and" durch "|"
        const cleanedAuthors = authors
            .replace(/\s*and\s*/g, "|") // "and" durch "|" ersetzen
            .replace(/\{|\}/g, "")      // geschweifte Klammern entfernen
            .trim();

        //console.log("Cleaned authors string:", cleanedAuthors);

        // Autoren in ein Array aufteilen
        const authorList = cleanedAuthors.split("|").map(author => author.trim());
        //console.log("Split author list:", authorList);

        // Maximale Anzahl der anzuzeigenden Autoren
        const maxAuthors = 7;

        // Formatiere jeden Autor
        const formattedAuthors = authorList.map((author, _index) => {
            //console.log(`Processing author #${index + 1}:`, author);

            // Nachname und Vornamen aufteilen
            const [last, firstNames] = author.includes(",") ?
                author.split(",").map(part => part.trim()) :
                ['', author]; // Wenn kein Komma vorhanden ist, wird der gesamte Name als Vorname behandelt

            // console.log(`Last name: "${last}", First names: "${firstNames}"`);

            // Initialen für Vornamen erstellen
            const initials = firstNames.split(' ').map(n => n[0] + '.').join(' ');
            //console.log(`Initials for "${firstNames}": "${initials}"`);

            const formattedName = `${last}, ${initials}`.trim(); // Rückgabe des formatierten Namens
            //console.log(`Formatted name: "${formattedName}"`);

            return formattedName;
        });

        //console.log("Formatted authors before adding et al.:", formattedAuthors);

        // Kombiniere die formatierten Autoren mit korrekter Interpunktion
        const output = formattedAuthors.slice(0, maxAuthors).join('; ') +
            (formattedAuthors.length > maxAuthors ? ' et al.' : '');

        //console.log("Final output:", output);
        return output;
    };

    let specialthing = "";

    if (special) {
        specialthing = `#${special}`;
    }

    // Helper function to render individual citations based on their type
    const renderCitation = (entry: BibEntry, index: number) => {
        // console.log(`Rendering citation for entry #${index + 1}: `, entry);

        // Use the index as citation number
        let citationNumber = index +1;
        if(start){
            citationNumber += start -1;
        }
        const entryType = entry.entryType.toLowerCase(); // Convert to lowercase for consistent comparison
        const entryTags = entry.entryTags; // Adjust based on your data structure
        // console.log("Entry Tags: ", entryTags);

        switch (entryType) {
            case "article":
                return (
                    <li key={index} typeof="schema:ScholarlyArticle" role="doc-biblioentry" property="schema:citation" id={`desc-${citationNumber}${specialthing}`}>
                        {/* Citation number as comment */}
                        {/*<!-- Citation num ${citationNumber} --> */}
                        {formatAuthors(entryTags.AUTHOR || entryTags.EDITOR || "")}
                        &nbsp;<span property="schema:name">{entryTags.TITLE.replace(/[?!.]/g, '').replace(/\n/g, ' ').trim()}.</span>
                        &nbsp;<i property="schema:publisher" typeof="schema:Organization">{entryTags.JOURNAL}</i>
                        &nbsp;<b property="issueNumber" typeof="PublicationIssue">{entryTags.VOLUME}</b>
                        {formatPages(entryTags.PAGES) && <span>{formatPages(entryTags.PAGES)}</span>}
                        {entryTags.YEAR && (
                            <span>&nbsp;(<time property="schema:datePublished" datatype="xsd:gYear" dateTime={entryTags.YEAR}>{entryTags.YEAR}</time>).</span>
                        )}
                        {entryTags.DOI && (
                            <span>&nbsp;<a className="doi" href={`https://doi.org/${entryTags.DOI}`}>doi: {entryTags.DOI}</a></span>
                        )}
                    </li>
                );

            case "book":
                return (
                    <li key={index} typeof="schema:Book" role="doc-biblioentry" property="schema:citation" id={`desc-${citationNumber}`}>
                        {/* Render authors */}
                        {formatAuthors(entryTags.AUTHOR || entryTags.EDITOR || "")}
                        {/* Render title or booktitle */}
                        {entryTags.TITLE ? (
                            <span property="schema:name">&nbsp;{entryTags.TITLE.replace(/[?!.]/g, '').replace(/\n/g, ' ').trim()}.</span>
                        ) : entryTags.BOOKTITLE ? (
                            <span property="schema:name">&nbsp;{entryTags.BOOKTITLE.replace(/[?!.]/g, '').replace(/\n/g, ' ').trim()}.</span>
                        ) : (
                            console.warn(`No title or booktitle found for entry ${citationNumber}`)
                        )}
                        {/* Render publisher */}
                        {entryTags.PUBLISHER && (
                            <i property="schema:publisher" typeof="schema:Organization">
                                &nbsp;{entryTags.PUBLISHER}
                            </i>
                        )}
                        {/* Render year */}
                        {entryTags.YEAR && (
                            <span>
                &nbsp;(<time property="schema:datePublished" datatype="xsd:gYear" dateTime={entryTags.YEAR}>
                  {entryTags.YEAR}
                </time>).
              </span>
                        )}
                        {entryTags.ISBN && (
                            <span property="isbn">&nbsp;{entryTags.ISBN}</span>
                        )
                        }
                    </li>
                );

            case "misc":
                return (
                    <li key={index} typeof="schema:WebPage" role="doc-biblioentry" property="schema:citation" id={`desc-${citationNumber}`}>
                        {/* Render authors */}
                        {(entryTags.AUTHOR || entryTags.EDITOR || "")}
                        {/* Render title */}
                        {entryTags.TITLE && (
                            <span property="schema:name">.&nbsp;{entryTags.TITLE.replace(/[?!.]/g, '').replace(/\n/g, ' ').trim()}.</span>
                        )}
                        {/* Render howpublished */}
                        {entryTags.HOWPUBLISHED && (
                            <i property="schema:publisher" typeof="schema:Organization">&nbsp;{entryTags.HOWPUBLISHED}</i>
                        )}
                        {/* Render year */}
                        {entryTags.YEAR && (
                            <span>&nbsp;(<time property="schema:datePublished" datatype="xsd:gYear" dateTime={entryTags.YEAR}>{entryTags.YEAR}</time>).</span>
                        )}
                    </li>
                );

            // Handle additional entry types here
            case "inproceedings":
                return (
                    <li key={index}>
                        <span>{formatAuthors(entryTags.AUTHOR || "")}</span>&nbsp;
                        <span>{entryTags.TITLE}</span>. In <i>{entryTags.BOOKTITLE}</i>,&nbsp;
                        <b>{entryTags.editor}</b>, {entryTags.YEAR}.
                    </li>
                );

            case "phdthesis":
                return (
                    <li key={index}>
                        <span>{formatAuthors(entryTags.AUTHOR || "")}</span>&nbsp;
                        <span>{entryTags.TITLE}</span>, PhD thesis, {entryTags.SCHOOL}, {entryTags.YEAR}.
                    </li>
                );

            default:
                console.warn(`Unknown entry type: ${entryType}`);
                return <li key={index}>Unknown entry type: {entryType}</li>;
        }
    };
    let startnumber = 1;
    if(start) {
        startnumber = start;
    }
    return (
        <div>
            {parsedEntries.length === 0 ? (
                <p>No citations available.</p>
            ) : (
                <ol start={startnumber}>
                    {parsedEntries.map((entry, index) => renderCitation(entry, index))}
                </ol>
            )}
        </div>
    );
};

export default BibtexParser;
