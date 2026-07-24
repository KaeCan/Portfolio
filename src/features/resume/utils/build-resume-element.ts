import type { ResumeData } from '../types';

const createSpacer = (doc: Document): HTMLSpanElement => {
    const spacer = doc.createElement('span');
    spacer.className = 'spacer';
    return spacer;
};

const appendBullets = (
    doc: Document,
    parent: HTMLElement,
    items: string[]
): void => {
    const list = doc.createElement('ul');
    for (const item of items) {
        const li = doc.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    }
    parent.appendChild(list);
};

export const buildResumeElement = (data: ResumeData): HTMLElement => {
    const doc = document;
    const root = doc.createElement('div');
    root.className = 'resume-document';

    const name = doc.createElement('h1');
    name.textContent = data.name;
    root.appendChild(name);

    const headerInfo = doc.createElement('div');
    headerInfo.className = 'section headerInfo';
    const contactList = doc.createElement('ul');

    const emailItem = doc.createElement('li');
    emailItem.textContent = data.email;
    contactList.appendChild(emailItem);

    const phoneItem = doc.createElement('li');
    phoneItem.textContent = data.phone;
    contactList.appendChild(phoneItem);

    const websiteItem = doc.createElement('li');
    const websiteLink = doc.createElement('a');
    websiteLink.href = data.website;
    websiteLink.textContent = data.website;
    websiteItem.appendChild(websiteLink);
    contactList.appendChild(websiteItem);

    const locationItem = doc.createElement('li');
    locationItem.textContent = data.location;
    contactList.appendChild(locationItem);

    headerInfo.appendChild(contactList);
    root.appendChild(headerInfo);

    const skillsHeading = doc.createElement('h2');
    skillsHeading.textContent = 'Technical Skills';
    root.appendChild(skillsHeading);

    for (const skill of data.skills) {
        const row = doc.createElement('p');
        const label = doc.createElement('strong');
        label.textContent = skill.category;
        row.appendChild(label);
        row.appendChild(doc.createTextNode(` | ${skill.items.join(', ')}`));
        root.appendChild(row);
    }

    const skillsSpacer = doc.createElement('div');
    skillsSpacer.className = 'vertical-spacer';
    root.appendChild(skillsSpacer);

    const experienceHeading = doc.createElement('h2');
    experienceHeading.textContent = 'Experience';
    root.appendChild(experienceHeading);

    for (const job of data.experience) {
        const titleRow = doc.createElement('h3');
        titleRow.appendChild(
            doc.createTextNode(`${job.position} | ${job.company}`)
        );
        titleRow.appendChild(createSpacer(doc));
        const duration = doc.createElement('span');
        duration.textContent = job.duration;
        titleRow.appendChild(duration);
        root.appendChild(titleRow);

        if (job.summary) {
            const metaRow = doc.createElement('p');
            const summary = doc.createElement('em');
            summary.textContent = job.summary;
            metaRow.appendChild(summary);
            root.appendChild(metaRow);
        }

        appendBullets(doc, root, job.description);

        const jobSpacer = doc.createElement('div');
        jobSpacer.className = 'vertical-spacer';
        root.appendChild(jobSpacer);
    }

    const educationHeading = doc.createElement('h2');
    educationHeading.textContent = 'Education';
    root.appendChild(educationHeading);

    for (const entry of data.education) {
        const heading = doc.createElement('p');
        const institution = doc.createElement('strong');
        institution.textContent = entry.institution;
        heading.appendChild(institution);

        const degreeLine = entry.gpa
            ? ` - ${entry.degree}, ${entry.gpa}`
            : ` - ${entry.degree}`;
        heading.appendChild(doc.createTextNode(degreeLine));
        heading.appendChild(createSpacer(doc));

        const date = doc.createElement('span');
        date.textContent = entry.graduationDate;
        heading.appendChild(date);
        root.appendChild(heading);

        appendBullets(doc, root, entry.highlights);
    }

    return root;
};
