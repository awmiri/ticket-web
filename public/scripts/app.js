"use strict"

// landing page items 
let allCountryArry = [
    { id: 1, img: "../imge/imge/turky/image 37.png", toreName: "تور آنتالیا", price: 45000000, score: 4.1, day: 3, night: 4, discount: true, discountMount: '10%' },
    { id: 2, img: "../imge/imge/dubai/Frame 31.png", toreName: 'تور دبی', price: 65000000, score: 4.9, day: 4, night: 5, discount: false, discountMount: '5%' },
    { id: 3, img: "../imge/imge/malezi/image 39.png", toreName: 'تور مالزی', price: 70000000, score: 4.1, day: 6, night: 5, discount: true, discountMount: '2%' },
    { id: 4, img: "../imge/imge/esfahan/esfahan.jpg", toreName: 'اصفهان', price: 15000000, score: 4.4, day: 6, night: 5, discount: false, discountMount: '20%' },
]

// header img items
let headerImgArry = [
    { id: 1, nameCountry: "تایلند", capital: "پاتایا", imgSrc: "../imge/imge/image 2.png" },
    { id: 2, nameCountry: "امارات متحده عربی", capital: "دبی", imgSrc: "../imge/imge/dubai/RBP06201.jpg" },
    { id: 3, nameCountry: "ایتالیا", capital: "میلان", imgSrc: "../imge/imge/italy/view-Milan-Italy.webp" },
    { id: 4, capital: "مالزی", nameCountry: "کوالانپور", imgSrc: "../imge/imge/malezi/Malaysia-Kuala-Lumpur.jpg" },
    { id: 5, capital: "ایران", nameCountry: "اصفهان", imgSrc: "../imge/imge/esfahan/esfahan-header.jpg" },
]

// $ === document
let $ = document


let selectBar = $.querySelector('#fa-bar')   //select element fa-fa bar or burger btn
let selecMobileNav = $.querySelector('.mobile_nav')  // navigation bar in mobil 
let getDarkBlank = $.querySelector('.dark-blank')  // dark blank when nav open

// open bar and navigation event 
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
// when click on dark bg nav close
getDarkBlank.addEventListener('click', function () {
    selecMobileNav.classList.add('right-[-208px]')
    selecMobileNav.classList.remove('right-0')
    closeBlank()
    navOpen = true
})
// open dark bg
function openBlank() {
    getDarkBlank.classList.remove('hidden')
}
// close dark bg
function closeBlank() {
    getDarkBlank.classList.add('hidden')
}
// ///////////////////////////////////////////////////////

// for click and chang header img  
var arryIndex = 0  // index of pic
let nextPic = $.querySelector('.next-pic')  // next pic btn
let lastPic = $.querySelector('.pervious-pic')  // previous btn
let getHeaderImg = $.querySelector('.header-img')  // header img content
let capital = $.querySelector('.capital')  // captal of city in header
let nameCountry = $.querySelector('.nameCountry')  // country name in header
let pageNumber = $.querySelector('.page-number')  // page number
getHeaderImg.setAttribute('src', headerImgArry[arryIndex].imgSrc) // get img src for event
capital.innerHTML = headerImgArry[arryIndex].capital  // inner for city
nameCountry.innerHTML = headerImgArry[arryIndex].nameCountry  // inner content for country 
pageNumber.innerHTML = "0" + headerImgArry[arryIndex].id  // set number for pages

// event for go next pic
nextPic.addEventListener('click', function (e) {
    arryIndex++ // index of pic++

    // change img content and img
    getHeaderImg.setAttribute('src', headerImgArry[arryIndex].imgSrc)
    capital.innerHTML = headerImgArry[arryIndex].capital
    nameCountry.innerHTML = headerImgArry[arryIndex].nameCountry
    pageNumber.innerHTML = "0" + headerImgArry[arryIndex].id
    // /////////////////////////// 

    // go last pic and next pic
    lastPic.classList.remove('deactivate')
    lastPic.classList.add('active')
    if (arryIndex === headerImgArry.length - 1) {
        nextPic.classList.remove('active')
        nextPic.classList.add('deactivate')
    }
    e.preventDefault
    // //////////////////
})
// ///////////////////////////

// event for previous page
lastPic.addEventListener('click', function () {
    arryIndex--  // index of pic--

    // change img content and img
    getHeaderImg.setAttribute('src', headerImgArry[arryIndex].imgSrc)
    capital.innerHTML = headerImgArry[arryIndex].capital
    nameCountry.innerHTML = headerImgArry[arryIndex].nameCountry
    pageNumber.innerHTML = "0" + headerImgArry[arryIndex].id
    // /////////////////////////// 

    // go last pic and next pic
    nextPic.classList.add('active')
    nextPic.classList.remove('deactivate')
    if (arryIndex === 0) {
        lastPic.classList.add('deactivate')
        lastPic.classList.remove('active')
        arryIndex = 0
    }
    // //////////////////
})
// ////////////////

let getItemContainer = $.querySelector('.papular-travel')



allCountryArry.forEach(function (item) {
    getItemContainer.insertAdjacentHTML('beforeend', `
    <div class="py-4 px-5 rounded-4xl border border-textLight/20 relative transition item ${item.id > 3 ? 'h-0 opacity-0' : ''} ">
        <!-- لینک برای تصویر -->
        <a href="#" class="block">
            <img src="${item.img}" alt="" class="rounded-3xl h-[230px] w-full">
        </a>
        <div>
            <div class="flex items-center justify-between mt-8">
                <span class="font-IranMedium text-xl text-textLight">${item.toreName}</span>
                <span class="flex items-center font-RokhBold text-lg text-textLight">
                    ${item.score} <svg class="w-4 h-4"><use href="#star"></use></svg>
                </span>
            </div>
            <div class="font-IranLight text-textLight/50">${item.night} روز و ${item.day} شب</div>
        </div>
        <div class="flex items-center justify-between">
            <span>
                <span class="font-RokhBold text-lg lg:text-xl">${item.price} تومان </span>
                <span class="font-IranLight text-textLight/50 text-nowrap align-bottom">هر فرد</span>
            </span>
            <!-- دکمه‌ی پلاس به عنوان لینک -->
            <a href="" class="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] bg-blue rounded-full flex items-center justify-center text-white">
                <svg class="w-6 lg:w-7 h-6 lg:h-7"><use href="#plus"></use></svg>
            </a>
        </div>
        <div class="discount-items bg-orang w-16 h-16 absolute rounded-full right-[-10px] top-[-20px] 
            ${item.discount === true ? 'flex' : 'hidden'} items-center justify-center flex-col text-white text-base font-RokhMedium">
            <p>${item.discountMount}</p>
            <p>تخفیف</p>
        </div>
    </div>`)

})
let getShowMoreItemBtn = $.querySelector('.btn')
getShowMoreItemBtn.addEventListener('click', function () {
    if (getShowMoreItemBtn.classList.contains('none')) {
        this.classList.remove('none')
        this.classList.add('show')
        this.classList.add('rotate-180')
        $.querySelectorAll('.item.h-0.opacity-0').forEach(item => {
            item.classList.remove('h-0', 'opacity-0')
            item.classList.add('show-items')
        })

    } else if (getShowMoreItemBtn.classList.contains('show')) {
        this.classList.remove('show')
        this.classList.remove('rotate-180')
        this.classList.add('none')
        $.querySelectorAll('.item.show-items').forEach(item => {
            item.classList.add('h-0', 'opacity-0')
        })

    }


})


let getItems = $.querySelectorAll('.best-sell--item')

getItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        $.querySelector('.select-tour_best-sell').classList.remove('select-tour_best-sell')
        this.classList.add('select-tour_best-sell')
    })
})