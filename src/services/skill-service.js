import { storageService } from "./storage-service"
import { utilService } from "./util-service"

const KEY = 'skillDB'
_createProjects()

export const skillService = {
    query,
}

function query() {
    return storageService.query(KEY)
}

function _createProjects() {
    let skills = utilService.loadFromStorage(KEY)
    if (!skills || !skills.length) {
        skills = [
            {
                id: 's104',
                title:"Api Design",
                iconName: 'fa-network-wired',
                description: "I prioritise the creation of APIs that fulfil technical requirements and contribute to a clear development process. With an understanding of HTTP/HTTPS protocols and REST principles, I can produce secure APIs."
            },
            {
                id: 's101',
                title:"Code Readability",
                iconName: 'fa-indent',
                description: "I strive to write clean & DRY code, keeping in mind that any other developer should understand my code easily. This makes the code less prone to mistakes and clears more energy to create smart code."
            },
            {
                id: 's102',
                title:"Reusability",
                iconName: 'fa-arrows-rotate',
                description: "In addition to being more time efficient, code & component reusability help keep consistency, modularity, maintainability & scalability in the code. It also makes debugging easier."
            },
            {
                id: 's103',
                title:"Code Review",
                iconName: 'fa-code-compare',
                description: "I jump on any opportunity to have my code reviewed or review someone else’s code. It's a great opportunity to get new perspectives, re-evaluate my logic and habits, as well as getting to know my peers' style."
            },
            {
                id: 's105',
                title:"CSS Structure",
                iconName: 'fa-cubes-stacked',
                description: "Comprehensive planning of the css structure makes an accurate, consistent & adaptable design. Working with css variables, helper classes & predefined layouts improves maintainability"
            },
            {
                id: 's106',
                title:"Responsive Design",
                iconName: 'fa-desktop',
                description: "I aim to design websites that effortlessly adapt across devices. By employing tools like CSS frameworks & media queries I ensure a consistent experience while prioritising performance and accessibility."
            },
        ]

        utilService.saveToStorage(KEY, skills)
    }
    return skills
}