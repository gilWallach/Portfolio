import { storageService } from "./storage-service"
import { utilService } from "./util-service"

const KEY = 'projectDB'
_createProjects()

export const projectService = {
    query,
    get,
}

function query() {
    return storageService.query(KEY)
}

function get(projectId) {
    return storageService.get(KEY, projectId)
}

function _createProjects() {
    let projects = utilService.loadFromStorage(KEY)
    if (!projects || !projects.length) {
        projects = [
            {
                id: 'p104',
                name: 'Nexflix',
                subHeading: 'Movies app inspired by Netflix',
                generalDescription: 'Discover movies and manage profiles',
                techDescription: 'In this project, I focused on properly updating nested objects with Mongodb. \n\n  Implementing user authentication in the backend with cryptr & bcrypt, each account can manage several profiles. In the frontend, I used immer to update the nested profiles in the Redux store and in the backend, MongoDB Query Language. \n\n  As the content database I used The Movie Database api (TMDB) api, incorporating it with my own api. This approach allowed me to effectively fetch the correct data from TMDB and send it back to the frontend properly formatted.',
                thumbnailUrl: 'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634009/Portfolio/Projects/Nexflix/Nexflix_-_signup_2_lbhuqg.png',
                imgUrls: [
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634009/Portfolio/Projects/Nexflix/Nexflix_-_signup_2_lbhuqg.png',
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634016/Portfolio/Projects/Nexflix/Nexflix_-_login_tkwry2.png',
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634001/Portfolio/Projects/Nexflix/Nexflix_-_choose_user_natxmb.png',
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634014/Portfolio/Projects/Nexflix/Nexflix_-_homepage_ykhe4j.png',
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634014/Portfolio/Projects/Nexflix/Nexflix_-_video_player_ajuyjp.png'
                ],
                stack: ['Javascript', 'React', 'Redux', 'Node.js', 'Express.js', 'Mongodb'],
                tools: ['Material UI', 'react-styles-components', 'Postman', 'Studio3t'],
                link: 'https://nexflix.onrender.com/'
            },
            {
                id: 'p102',
                name: 'AirGnb',
                subHeading: 'Room rental app inspired by AirBnb',
                generalDescription: 'Discover accommodation all over the world',
                techDescription: ' Collaboration with two other developers as a final project of the Coding Academy Bootcamp. We implemented partial flow of both buyer and seller, including filtering options, order management, notifications about order status, in a time frame of 14 days. \n\n We worked remotely, collaborating on github, 3-4 video meetings a day & having our code reviewed by each other. We divided the development of features & components between us, consulting on strategies, complex logic & choice of tools',
                thumbnailUrl: 'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702633950/Portfolio/Projects/AirGnb/AirGnb-_Home_sy3ovr.png',
                imgUrls: [
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702633950/Portfolio/Projects/AirGnb/AirGnb-_Home_sy3ovr.png',
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702633948/Portfolio/Projects/AirGnb/AirGnb_-_filter_where_ekypxi.png',
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702633951/Portfolio/Projects/AirGnb/AirGnb_-_additional_filters_2_fstyva.png'
                ],
                stack: ['Javascript', 'Vue', 'Vuex', 'scss', 'Web Sockets', 'Node.js', 'Express.js', 'Mongodb'],
                tools: ['Element +', 'Postman', 'Studio3t', 'Mongodb Atlas'],
                link: 'https://airgnb.onrender.com'
            },
            {
                id: 'p103',
                name: 'Meme generator',
                subHeading: 'Create your own memes',
                generalDescription: 'Choose picture, add text & emojis, then download you meme',
                techDescription: 'This is a Vanilla JS project, making use of the HTML canvas element. \n\n  Implementing filtering options of pictures as well as drag & drop elements on the canvas. I enjoyed getting to know the HTML canvas tag. \n\n The project was developed in a time frame of two days.',
                thumbnailUrl: 'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634137/Portfolio/Projects/Meme%20generator/Meme_generator_-_homepage_mqy7or.png',
                imgUrls: [
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634137/Portfolio/Projects/Meme%20generator/Meme_generator_-_homepage_mqy7or.png',
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634124/Portfolio/Projects/Meme%20generator/Meme_generator_-_type_search_el1pot.png',
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634130/Portfolio/Projects/Meme%20generator/Meme_generator_-_editor_last_n0xm2r.png',
                ],
                shortDescription: 'Create your own memes',
                stack: ['Vanilla Javascript', 'HTML', 'ES6', 'HTML canvas', 'css'],
                tools: ['MVC Approach'],
                link: 'https://gilwallach.github.io/meme-generator/'
            },
            {
                id: 'p101',
                name: 'Sous-chef',
                subHeading: 'Get inspiring recipes with the help of ChatGPT',
                generalDescription: 'Utilize your available ingredients and get recipe ideas',
                techDescription: 'The idea for this project came from my need to use all the food in my fridge. \n I wanted to get recipes with the specific ingredients available to me. This seemed like a good opportunity to explore the ChatGPT api. \n\n  I developed a TS React app using the Web speech api to make the process of entering ingredients faster. Enter ingredients by typing them or using the voice recognition option and get a recipe. Making use of custom react hooks for component reusability and efficient rendering.',
                thumbnailUrl: 'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634199/Portfolio/Projects/Sous-chef/Sous-chef_-_voice_recognition_hover_avwyrs.png',
                imgUrls: [
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634199/Portfolio/Projects/Sous-chef/Sous-chef_-_voice_recognition_hover_avwyrs.png',
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634195/Portfolio/Projects/Sous-chef/Sous-chef_-_type_new_ingredient_ay8547.png',
                    'https://res.cloudinary.com/dmfzwepkf/image/upload/v1702634193/Portfolio/Projects/Sous-chef/Sous-chef_-_recipe_lfk5ox.png',
                ],
                stack: ['Typescript', 'React', 'Redux', 'scss', 'Node.js', 'Express.js'],
                tools: ['OpenAi Api', 'Web Speech API', 'Material UI'],
                link: 'https://sous-chef-qxaw.onrender.com/',
            },
        ]

        utilService.saveToStorage(KEY, projects)
    }
    return projects
}