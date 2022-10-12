'use strict'

const gProjects = [
  {
    id: "bookShop",
    name: "Book shop",
    title: "Manage your bookshop",
    desc: "The owner can change info about the books",
    url: "projects/bookShop/index.html",
    publishedAt: 1448693940000, //! ??
    labels: ["paging", "display choices"],
  },
  {
    id: "safeContent",
    name: "Safe content",
    title: "Login as user or admin",
    desc: `Login as a use or as an admin and access content accordingly. </br> 
    </br>
    To login as user use 'Muki as the username and 'blabla' as the password </br>
    To login as admin use 'Puki' as the username and 'secret' as the password`,
    url: "projects/safeContent/index.html",
    publishedAt: 1448693940000, //! ??
    labels: ["input validation", "query strings"],
  },
  {
    id: "todo",
    name: "To do",
    title: "Organize your tasks",
    desc: "Organize your tasks by importance, sort and filter them",
    url: "projects/todo/index.html",
    publishedAt: 1448693940000, //! ??
    labels: ["sorting", "filtering"],
  },
]

$(document).ready(initPage)

function initPage() {
  renderPortfolio()
}

function renderPortfolio() {
  var strHtmls = gProjects.map(project => `
    <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModalInfo(
      '${project.id}'
    )">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="${project.name}">
    </a>
    <div class="portfolio-caption">
      <h4>${project.name}</h4>
      <p class="text-muted title">${project.title}</p>
      <p class="badge text-bg-warning label">${project.labels[0]}</p>
      <p class="badge text-bg-warning label">${project.labels[1]}</p>
    </div>
  </div>
    `)

  $('.items-container').html(strHtmls)
}

function renderModalInfo(id) {
  const project = getProjById(id)

  const strHTML = `
  <h2>${project.name}</h2>
  <p class="item-intro text-muted">${project.title}.</p>
  <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.png" alt="">
  <p>${project.desc}</p>
  <button class="btn btn-primary"><a href="projects/${project.id}/index.html" target="_blank">Check it Out!</a></button>
  `

  $('.modal-body').html(strHTML)
}

/* <ul class="list-inline">
    <li>Date: January 2017</li>
    <li>Client: Threads</li>
    <li>Category: Illustration</li>
  </ul>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project
  </button> */

function onSubmitContact() {
  const email = document.querySelector('.email-input').value
  const subject = document.querySelector('.contact-sec .subject-input').value
  const message = document.querySelector('.message-input').value

  const strUrl = `http://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${message}`

  window.open(`${strUrl}`)
}