export const RESUME_DOCUMENT_STYLES = `
.resume-document {
    font-family: Tinos, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: black;
    background: white;
    width: 100%;
    box-sizing: border-box;
}

.resume-document .spacer {
    margin: 0px auto;
}

.resume-document .vertical-spacer {
    height: 8px;
}

.resume-document h1,
.resume-document h2,
.resume-document h3,
.resume-document p,
.resume-document a,
.resume-document li {
    color: black;
}

.resume-document h2 {
    margin: 10px 0px;
    border-bottom: 1px solid #000000;
    text-transform: uppercase;
    font-size: 16px;
    padding: 0;
}

.resume-document h3 {
    margin: 6px 0px;
    display: flex;
    font-size: 15px;
    font-weight: 700;
    padding: 0;
    justify-content: space-between;
}

.resume-document h1 {
    color: black;
    text-transform: uppercase;
    text-align: left;
    font-size: 32px;
    margin: 0;
    padding: 0;
}

.resume-document p {
    margin: 0;
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 0;
    display: flex;
}

.resume-document li > p {
    display: inline;
}

.resume-document a {
    color: black;
}

.resume-document ul {
    margin: 4px 0;
    padding-left: 24px;
    padding-right: 24px;
    list-style: none;
}

.resume-document ul > li {
    position: relative;
    padding-left: 0.35em;
}

.resume-document ul > li::before {
    content: "•";
    position: absolute;
    left: -0.9em;
}

.resume-document strong,
.resume-document em,
.resume-document a {
    padding-left: 1px;
    padding-right: 2px;
}

.resume-document .headerInfo > ul {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 6px auto 0px !important;
    padding: 0;
}

.resume-document .headerInfo > ul > li {
    display: inline;
    white-space: pre;
    list-style-type: none;
    position: static;
    padding-left: 0;
}

.resume-document .headerInfo > ul > li::before {
    content: none;
}

.resume-document .headerInfo > ul > li:not(:last-child) {
    margin-right: 8px;
}

.resume-document .headerInfo > ul > li:not(:last-child):after {
    content: "•";
    margin-left: 8px;
}
`;
