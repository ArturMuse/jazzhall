// Header
window.onscroll = function () {
    var header = document.querySelector('.header');
    if (window.pageYOffset > 130) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
};
// Календарь
let calSection = document.querySelector(".calendar");
if (calSection) {
    // Календарь
    const calendarBtn = document.querySelector(".calendar__inner > button");
    const calendarBody = document.querySelector(".calendar__body");

    calendarBtn.addEventListener("click", () => {
        calendarBody.classList.toggle("calendar__body-show");
    })

    // Переключение месяцев
    const calBtnLeft = document.querySelector(".calendar__inner .calendar__body .calendar__control button");
    const calBtnRight = document.querySelector(".calendar__inner .calendar__body .calendar__control button:last-child");
    const monthBase = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const monthVal = document.querySelector('.calendar__inner .calendar__body .calendar__control p');

    // Вставка месяца текущего
    monthItem = 11
    monthVal.innerHTML = `${monthBase[monthItem]}`;

    // Изменение по кнопкам
    calBtnLeft.addEventListener("click", () => {
        monthItem = monthItem - 1;
        if (monthItem === -1) {
            monthItem = 11
        };
        monthVal.innerHTML = `${monthBase[monthItem]}`;
    })

    calBtnRight.addEventListener("click", () => {
        monthItem = monthItem + 1;
        if (monthItem === 12) {
            monthItem = 0
        }
        monthVal.innerHTML = `${monthBase[monthItem]}`;
    })
    // Показ мероприятий на календаре
    const calDay = document.querySelectorAll(".calendar__nums-active");
    const calDayShow = document.querySelector(".calendar__event");

    for (let i = 0; i < calDay.length; i++) {
        calDay[i].addEventListener('click', () => {
            if (calDay[i].classList.contains("calendar__nums-active-on") && calDayShow.classList.contains("calendar__event-show")) {
                for (let j = 0; j < calDay.length; j++) {
                    calDay[j].classList.remove("calendar__nums-active-on");
                }
                calDayShow.classList.remove("calendar__event-show");
            } else {
                for (let j = 0; j < calDay.length; j++) {
                    calDay[j].classList.remove("calendar__nums-active-on");
                }
                calDay[i].classList.add("calendar__nums-active-on");
                calDayShow.classList.add("calendar__event-show");
            }
        })
    }

    // Текущая дата
    let date = new Date();
    calDay[date.getDate()].classList.add("calendar__nums-active-today");
}

// Валидация формы
const subInput = document.querySelector(".footer__sub");
const subThanks = document.querySelector(".footer__form-thanks");
const subName = document.querySelector(".footer__form-name");
const subBody = document.querySelector(".footer__form-body");
const formVal = () => {
    let emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailVal.test(subInput.value)) {
        subInput.style.border = "1px solid #d1d1d1";
        subThanks.classList.add('footer__form-thanks-on');
        subName.style.display = "none";
        subBody.style.display = "none";
        setTimeout(() => {
            subThanks.classList.remove('footer__form-thanks-on');
            subName.style.display = "block";
            subBody.style.display = "block";
        }, 5000)
    } else {
        subInput.style.border = "1px solid #d21810";
    }
}
// Форма поиска
const searchBtn = document.querySelector(".footer__btn-search");
const searchBody = document.querySelector(".footer__search");
let main = document.querySelector(".main");
searchBtn.addEventListener("click", () => {
    searchBody.classList.add("footer__search-show");
})
main.addEventListener("click", () => {
    searchBody.classList.remove("footer__search-show");

})

// Открытие попапов
// Большой зал
let bigHall = document.querySelector(".big-hall");
const wrapperOff = document.querySelector(".wrapper");
const bigHallShow = () => {
    bigHall.classList.add("big-hall-show");
    wrapperOff.classList.add("wrapper-off");
}
const bigHallHide = () => {
    bigHall.classList.remove("big-hall-show");
    wrapperOff.classList.remove("wrapper-off");
}
// Малый зал
const smallHall = document.querySelector(".small-hall");
const smallHallShow = () => {
    smallHall.classList.add("small-hall-show");
    wrapperOff.classList.add("wrapper-off");
}
const smallHallHide = () => {
    smallHall.classList.remove("small-hall-show");
    wrapperOff.classList.remove("wrapper-off");
}
// Доступность
// Шрифт
const fontInput = document.querySelectorAll(".access-bar-font-input");
for (let i = 0; i < fontInput.length; i++) {
    fontInput[i].addEventListener("click", () => {
        if (fontInput[0].checked) {
            document.documentElement.style.setProperty('--fs', '100%');
        }
        if (fontInput[1].checked) {
            document.documentElement.style.setProperty('--fs', '110%');
        }
        if (fontInput[2].checked) {
            document.documentElement.style.setProperty('--fs', '120%');
        }
    })
}
// Фон
const wrapper = document.querySelector(".wrapper");
const backInput = document.querySelectorAll(".access-bar__back-input");
for (let i = 0; i < backInput.length; i++) {
    backInput[i].addEventListener("click", () => {
        if (backInput[0].checked) {
            wrapper.classList.remove("wrapper-bg-b");
            wrapper.classList.remove("wrapper-bg-bl");
        }
        if (backInput[1].checked) {
            wrapper.classList.add("wrapper-bg-b");
            wrapper.classList.remove("wrapper-bg-bl");
        }
        if (backInput[2].checked) {
            wrapper.classList.add("wrapper-bg-bl");
            wrapper.classList.remove("wrapper-bg-b");
        }
    })
}
// Изображения
const imgInput = document.querySelectorAll(".access-bar__img-input");
for (let i = 0; i < imgInput.length; i++) {
    imgInput[i].addEventListener('click', () => {
        if (imgInput[0].checked) {
            wrapper.classList.remove("wrapper-img-off");
        }
        if (imgInput[1].checked) {
            wrapper.classList.add("wrapper-img-off");
        }
    })

}
// Выйти и зайти в панели доступности
const accessExit = document.querySelector(".access-bar__exit");
const accessBar = document.querySelector(".access-bar");
const accessBarShow = document.querySelector(".footer__btn-access");
const footer = document.querySelector(".footer");
accessBarShow.addEventListener("click", () => {
    accessBar.classList.add("access-bar-show");
    footer.classList.add("footer-mb");
})
accessExit.addEventListener("click", () => {
    accessBar.classList.remove("access-bar-show");
    wrapper.classList.remove("wrapper-bg-b");
    wrapper.classList.remove("wrapper-bg-bl");
    wrapper.classList.remove("wrapper-img-off");
    document.documentElement.style.setProperty('--fs', '100%');
    footer.classList.remove("footer-mb");
})
// Шапка мобильная
const menuClose = document.querySelector(".header__nav-close");
const menuOpen = document.querySelector(".header__burger-btn");
const menu = document.querySelector(".header__nav");

menuOpen.addEventListener("click", () => {
    menu.classList.add("header__nav-show");
})

menuClose.addEventListener("click", () => {
    menu.classList.remove("header__nav-show");
})
// Фото
let photo = document.querySelectorAll(".photo__body-item");
if (photo) {
    photoRowBase = [];
    for (let i = 0; i < photo.length; i++) {
        photoRowBase[i] = 6;
    };
    for (let i = 0; i < photo.length; i++) {
        let photoLi = document.querySelectorAll(`.photo__body-item${i} ul li`);
        let photoBtn = document.querySelector(`.photo__body-item${i} button`);
        let photoRowOld = photoRowBase[i];
        for (let j = 6; j < photoLi.length; j++) {
            photoLi[j].style.display = "none";
        }
        photoBtn.addEventListener("click", () => {
            for (let j = 0; j < 6; j++) {
                if (photoLi[j + photoRowOld]) {
                    photoLi[j + photoRowOld].style.display = "block";
                } else {
                    photoBtn.style.display = "none";
                }
            }
            photoRowOld = photoRowOld + 6;
        })
    }
    const photoTab = document.querySelectorAll(".photo__label");
    const photoInput = document.querySelectorAll(".photo__body input");
    for (let i = 0; i < photoInput.length; i++) {
        photoTab[i].addEventListener("click", () => {
            setTimeout(() => {
                for (let j = 0; j < photoTab.length; j++) {
                    if (photoInput[j].checked) {
                        photoTab[j].classList.add("photo__label-active");
                    } else {
                        photoTab[j].classList.remove("photo__label-active");
                    }
                }
            }, 1)
        })
    }

    for (let j = 0; j < photoTab.length; j++) {
        if (photoInput[j].checked) {
            photoTab[j].classList.add("photo__label-active");
        } else {
            photoTab[j].classList.remove("photo__label-active");
        }
    }

}
// Фото слайдер
let wrapPh = document.querySelectorAll('.photo__slider-wrap');
if (wrapPh) {
    let trap = document.querySelectorAll(".photo__trap");
    let phBase = []
    for (let i = 0; i < wrapPh.length; i++) {
        phBase[i] = 4;
    };
    for (let i = 0; i < wrapPh.length; i++) {
        const dotsUpdate = () => {
            // Нумерование
            wrapPh[i].classList.add(`photo__wrap${i}`);
            const dots = document.querySelectorAll(`.photo__wrap${i} .photo__slider .slick-dots li`).length;
            let str = `<style type="text/css">\
            .photo__wrap${i} .photo__slider .slick-dots li:after {\
                  content: "/ ${dots}";\
            </style>`;
            trap[i].innerHTML = str;
            // Сокрытие и открытие элементов
            const phSliderItem = document.querySelectorAll(`.photo__wrap${i} .photo__slider .photo__slider-item`);
            const phSliderBtn = document.querySelector(`.photo__wrap${i} + .photo__btn-more`);
            console.log(phSliderItem);
            if (document.documentElement.clientWidth < 1000) {
                for (let j = 4; j < phSliderItem.length; j++) {
                    phSliderItem[j].style.display = "none";
                }
            }
            phSliderBtn.addEventListener("click", () => {
                if (document.documentElement.clientWidth < 1000) {
                    for (let n = 0; n < 4; n++) {
                        if (phSliderItem[n + phBase[i]]) {
                            phSliderItem[n + phBase[i]].style.display = "block";
                        } else {
                            document.querySelector(`.photo__wrap${i} + .photo__btn-more`).style.display = "none";
                        }
                    }
                    phBase[i] = phBase[i] + 4;
                }
            })
        }
        setTimeout(function () { dotsUpdate(); }, 100);
    }
}
// Музыканты
let musician = document.querySelector(".musician");
if (musician) {
    const mLabel = document.querySelectorAll(".musician__tabs-label");
    const mInput = document.querySelectorAll(".musician__input");
    let mBase = []
    for (let i = 0; i < mLabel.length; i++) {
        if (document.documentElement.clientWidth < 1000) {
            mBase[i] = 10;
        } else if (document.documentElement.clientWidth < 1250) {
            mBase[i] = 8;
        } else {
            mBase[i] = 10;
        }
    };
    for (let i = 0; i < mLabel.length; i++) {
        const mBodyList = document.querySelectorAll(`.musician__body${i} .musician__body-list li`);
        const mBtnMore = document.querySelector(`.musician__body${i} .musician__more`);
        if (mInput[i].checked) {
            mLabel[i].classList.add('musician__tabs-label-active');
        }
        mLabel[i].addEventListener("click", () => {
            for (let j = 0; j < mLabel.length; j++) {
                mLabel[j].classList.remove('musician__tabs-label-active');
            }
            setTimeout(() => {
                if (mInput[i].checked) {
                    mLabel[i].classList.add('musician__tabs-label-active');
                }
            }, 10)
        })

        if (document.documentElement.clientWidth < 1000) {
            for (let j = 10; j < mBodyList.length; j++) {
                mBodyList[j].style.display = "none";
            }
        } else if (document.documentElement.clientWidth < 1250) {
            for (let j = 8; j < mBodyList.length; j++) {
                mBodyList[j].style.display = "none";
            }
        } else {
            for (let j = 10; j < mBodyList.length; j++) {
                mBodyList[j].style.display = "none";
            }
        }
        mBtnMore.addEventListener("click", () => {
            if (document.documentElement.clientWidth < 1000) {
                for (let n = 0; n < 4; n++) {
                    if (mBodyList[n + mBase[i]]) {
                        mBodyList[n + mBase[i]].style.display = "block";
                    } else {
                        mBtnMore.style.display = "none";
                    }
                }
                mBase[i] = mBase[i] + 4;
            } else if (document.documentElement.clientWidth < 1250) {
                for (let n = 0; n < 4; n++) {
                    if (mBodyList[n + mBase[i]]) {
                        mBodyList[n + mBase[i]].style.display = "block";
                    } else {
                        mBtnMore.style.display = "none";
                    }
                }
                mBase[i] = mBase[i] + 4;
            } else {
                for (let n = 0; n < 5; n++) {
                    if (mBodyList[n + mBase[i]]) {
                        mBodyList[n + mBase[i]].style.display = "block";
                    } else {
                        mBtnMore.style.display = "none";
                    }
                }
                mBase[i] = mBase[i] + 5;
            }
        })
    }
}
let mMoreText = document.querySelector(".musician__btn-more");
if (mMoreText) {
    const mText = document.querySelector(".musician__text");
    mMoreText.addEventListener("click", () => {
        mText.classList.remove("musician__text-hide");
        mMoreText.style.display = "none";
    })
}
let mSlider = document.querySelector(".musician__slider");
if (mSlider) {
    const mTrap = document.querySelector(".musician__trap");
    const mSliderItem = document.querySelectorAll(".musician__slider-item").length;
    // Нумерование
    const mDots = document.querySelectorAll(`.musician__slider .slick-dots li`).length;
    console.log(mSliderItem);
    let str = `<style type="text/css">\
    .musician__slider .slick-dots li:after {\
          content: "/ ${mSliderItem}";\
    </style>`;
    mTrap.innerHTML = str;
}

let contactFormWrap = document.querySelector(".contacts__form-inner");
if (contactFormWrap) {
    const formName = document.querySelector(".contacts__form-name");
    const formMail = document.querySelector(".contacts__form-email");
    const formText = document.querySelector(".contacts__form-inner div + div + textarea");
    const formBtn = document.querySelector(".contacts__form-btn");
    const formThanks = document.querySelector(".contacts__form-thanks");
    let nCheck = false;
    let emCheck = false;
    let tCheck = false;
    const contactFormVal = () => {
        // Почта
        let emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailVal.test(formMail.value)) {
            formMail.style.border = "1px solid #d1d1d1";
            emCheck = true;
        } else {
            formMail.style.border = "1px solid #d21810";
            emCheck = false;
        }
        // Имя
        if (formText.value.length > 1) {
            formText.style.border = "1px solid #d1d1d1";
            tCheck = true;
        } else {
            formText.style.border = "1px solid #d21810";
            tCheck = false;
        }
        if (formName.value.length > 1) {
            formName.style.border = "1px solid #d1d1d1";
            nCheck = true;
        } else {
            formName.style.border = "1px solid #d21810";
            nCheck = false;
        }
        if (nCheck && tCheck && emCheck) {
            formThanks.classList.add("contacts__form-thanks-active");
            setTimeout(() => {
                formThanks.classList.remove("contacts__form-thanks-active");
            }, 5000)
        }
    }
    formBtn.addEventListener("click", () => {
        contactFormVal();
    })
}
let afishaList = document.querySelectorAll(".afisha__list");
if (afishaList) {
    const afishaLabel = document.querySelectorAll(".afisha__tabs-label");
    const afishaInput = document.querySelectorAll(".afisha__input");
    let afishaListAll = document.querySelectorAll('.afisha__list-item');
    let aBase = []
    for (let i = 0; i < afishaLabel.length; i++) {
        aBase[i] = 6;
        let afishaList = document.querySelectorAll(`.afisha__list${i} .afisha__list-item`);

        let afishaListBtn = document.querySelector(`.afisha__list${i} button`);

        for (let j = 6; j < afishaList.length; j++) {
            afishaList[j].style.display = "none";
        }

        afishaListBtn.addEventListener("click", () => {
            for (let n = 0; n < 6; n++) {
                if (afishaList[n + aBase[i]]) {
                    afishaList[n + aBase[i]].style.display = "flex";
                } else {
                    afishaListBtn.style.display = "none";
                }
            }
            aBase[i] = aBase[i] + 6;
        });

        if (afishaList.length <= 6) {
            afishaListBtn.style.display = "none";
        }
    };
    for (let i = 0; i < afishaInput.length; i++) {
        if (afishaInput[i].checked) {
            for (let l = 0; l < afishaLabel.length; l++) {
                afishaLabel[l].classList.remove("afisha__tabs-label-active");
            }
            afishaLabel[i].classList.add("afisha__tabs-label-active");
        };
        afishaLabel[i].addEventListener("click", () => {
            setTimeout(() => {
                for (let l = 0; l < afishaLabel.length; l++) {
                    afishaLabel[l].classList.remove("afisha__tabs-label-active");
                }
                afishaLabel[i].classList.add("afisha__tabs-label-active");
            }, 10)
        });

    }
    const listBtnBuy = document.querySelectorAll(".afisha__list-item-content a + div + div a");
    for (let i = 0; i < afishaListAll.length; i++) {
        if (afishaListAll[i].classList.contains("afisha__list-item-cancel")) {
            listBtnBuy[i].innerHTML = "Концерт отменен!";
        }
    }
}
let podcast = document.querySelector(".podcast");
if (podcast) {
    const podLabel = document.querySelectorAll(".podcast__tabs-label");
    const podInput = document.querySelectorAll(".podcast__input");
    let podBase = [];
    for (let i = 0; i < podLabel.length; i++) {
        podBase[i] = 5;
        for (let j = 0; j < podInput.length; j++) {
            podLabel[j].classList.remove("podcast__tabs-label-active");
        }
        setTimeout(() => {
            if (podInput[i].checked) {
                podLabel[i].classList.add("podcast__tabs-label-active");
            }
        }, 10);
        podLabel[i].addEventListener("click", () => {
            for (let j = 0; j < podInput.length; j++) {
                podLabel[j].classList.remove("podcast__tabs-label-active");
            }
            setTimeout(() => {
                if (podInput[i].checked) {
                    podLabel[i].classList.add("podcast__tabs-label-active");
                }
            }, 10);
        });
        const podListItem = document.querySelectorAll(`.podcast__list${i} ul li`);
        const podListBtn = document.querySelector(`.podcast__list${i} button`);
        for (let l = 5; l < podListItem.length; l++) {
            podListItem[l].style.display = "none";
        }
        podListBtn.addEventListener("click", () => {
            for (let n = 0; n < 5; n++) {
                if (podListItem[n + podBase[i]]) {
                    podListItem[n + podBase[i]].style.display = "block";
                } else {
                    podListBtn.style.display = "none";
                }
            }
            podBase[i] = podBase[i] + 5;
        })
    }
}
let programPlay = document.querySelector(".radio__play .radio__program");
if (programPlay) {
    const programBtn = document.querySelector(".radio__play-program");
    const programTitle = document.querySelector(".radio__play .radio__program h3");
    programBtn.addEventListener("click", () => {
        programPlay.style.display = "block";
        programBtn.style.display = "none";
    });
    programTitle.addEventListener("click", () => {
        programPlay.style.display = "none";
        programBtn.style.display = "block";
    });
};
let errorSearch = document.querySelector(".error-search");
if (errorSearch) {
    const searchBody = document.querySelector(".footer__search");
    errorSearch.addEventListener('click', () => {
        setTimeout(() => {
            searchBody.classList.add("footer__search-show");
        }, 10)
    })
}



