let $ = document

let selectBar = $.querySelector('#fa-bar')
let selecMobileNav = $.querySelector('.mobile_nav')
let getDarkBlank = $.querySelector('.dark-blank')


let navOpen = true
selectBar.addEventListener('click', function () {
    if (navOpen) {
        selecMobileNav.classList.remove('right-[-208px]')
        selecMobileNav.classList.add('right-0')
        openBlank()
        navOpen = false
    } else {
        selecMobileNav.classList.add('right-[-208px]')
        selecMobileNav.classList.remove('right-0')
        closeBlank()
        navOpen = true
    }
})
getDarkBlank.addEventListener('click', function () {
    selecMobileNav.classList.add('right-[-208px]')
    selecMobileNav.classList.remove('right-0')
    closeBlank()
    navOpen = true
})

function openBlank() {
    getDarkBlank.classList.remove('hidden')
}
function closeBlank() {
    getDarkBlank.classList.add('hidden')
}