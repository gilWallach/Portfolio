import { storageService } from "./storage-service"
import { utilService } from "./util-service"

const KEY = 'toolDB'
_createTools()

export const toolService = {
    query,
}

function query() {
    return storageService.query(KEY)
}

function _createTools() {
    let tools = utilService.loadFromStorage(KEY)
    if (!tools || !tools.length) {
        tools = [
            {
                id: 's101',
                name: 'Javascript',
                description: "lorem",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702560251/Portfolio/Logos/Skills%20-%20Companies/icons8-javascript_htb0jm.svg"
            },
            {
                id: 's102',
                name: 'Typescript',
                description: "lorem ipsum",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702560248/Portfolio/Logos/Skills%20-%20Companies/icons8-typescript_flk9e7.svg"
            },
            {
                id: 's103',
                name: 'HTML',
                description: "lorem ipsum dolor",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702560250/Portfolio/Logos/Skills%20-%20Companies/icons8-html-5_fkkzxt.svg"
            },
            {
                id: 's104',
                name: 'CSS',
                description: "lorem ipsum",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702560249/Portfolio/Logos/Skills%20-%20Companies/icons8-css3_qjq52w.svg"
            },
            {
                id: 's105',
                name: 'React',
                description: "lorem ipsum",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702560247/Portfolio/Logos/Skills%20-%20Companies/icons8-react_wwce6m.svg"
            },
            {
                id: 's106',
                name: 'Redux',
                description: "lorem ipsum",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702563174/Portfolio/Logos/Skills%20-%20Companies/icons8-redux_jku0uy.svg"
            },
            {
                id: 's107',
                name: 'Vue',
                description: "lorem ipsum",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702560246/Portfolio/Logos/Skills%20-%20Companies/icons8-vue-js_wgo1m4.svg"
            },
            {
                id: 's108',
                name: 'Angular',
                description: "lorem ipsum",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702560252/Portfolio/Logos/Skills%20-%20Companies/icons8-angularjs_kon1po.svg"
            },
            {
                id: 's09',
                name: 'Node.js',
                description: "lorem ipsum",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702561788/Portfolio/Logos/Skills%20-%20Companies/icons8-nodejs_aeblph.svg"
            },
            {
                id: 's110',
                name: 'Express',
                description: "lorem ipsum",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702561788/Portfolio/Logos/Skills%20-%20Companies/icons8-express-js_zfguv6.svg"
            },
            {
                id: 's111',
                name: 'Sass',
                description: "lorem ipsum",
                imgUrl: "https://res.cloudinary.com/dmfzwepkf/image/upload/v1702562612/Portfolio/Logos/Skills%20-%20Companies/icons8-sass_adciqg.svg"
            },
        ]

        utilService.saveToStorage(KEY, tools)
    }
    return tools
}