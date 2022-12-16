let initialHomeScore = 0
let initialGuestScore = 0


let homePoints = document.getElementById('home-points')
let guestPoints = document.getElementById('guest-points')

homePoints.textContent = initialHomeScore
guestPoints.textContent = initialGuestScore

function add1h() {
    initialHomeScore += 1
    homePoints.textContent = initialHomeScore
}
function add2h() {
    initialHomeScore += 2
    homePoints.textContent = initialHomeScore
}
function add3h() {
    initialHomeScore += 3
    homePoints.textContent = initialHomeScore
}



function add1g() {
    initialGuestScore += 1
    guestPoints.textContent = initialGuestScore
}
function add2g() {
    initialGuestScore += 2
    guestPoints.textContent = initialGuestScore
}
function add3g() {
    initialGuestScore += 3
    guestPoints.textContent = initialGuestScore
}

function restart() {
    initialGuestScore = 0
    initialHomeScore = 0

    guestPoints.textContent = initialGuestScore
    homePoints.textContent = initialHomeScore
}
