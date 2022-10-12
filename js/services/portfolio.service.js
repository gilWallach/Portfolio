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
    desc: "You can login as a use or as an admin and access content accordingly",
    url: "projects/safeContent/index.html",
    publishedAt: 1448693940000, //! ??
    labels: ["input validation", "query strings"],
  },
  {
    id: "todo",
    name: "To do",
    title: "Organize your tasks",
    desc: "You can organize your tasks by importance, sort and filter them",
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
    <div class="col-md-4 col-sm-6 portfolio-item">
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

function renderModalInfo(){

}