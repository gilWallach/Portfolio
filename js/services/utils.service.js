'use strict'

function getProjById(projId) {
    const projIdx = gProjects.findIndex(proj => proj.id === projId)
    return gProjects[projIdx]
}