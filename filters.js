'use strict';

let fitler_popup = document.querySelector('.filter_popup');
let fitler_label = document.querySelector('.filter_label');
let filter_icon = document.querySelector('.filter_icon');

fitler_label.addEventListener('click', function () {
    fitler_popup.classList.toggle('hidden');
    fitler_label.classList.toggle('filter_label_pink');
    filter_icon.classList.toggle('filter_icon_pink');

    if (filter_icon.getAttribute('src') === 'images//new_arrivals/filter.svg') {
        filter_icon.setAttribute('src', 'images//new_arrivals/filter_hover.svg')
    } else {
        filter_icon.setAttribute('src', 'images//new_arrivals/filter.svg')
    }
});

let filter_headers = document.querySelectorAll('.filter_category_header');
filter_headers.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filter_sizes = document.querySelector('.filter_sizes');
let filter_size_wrap = document.querySelector('.filter_size_wrap');
filter_size_wrap.addEventListener('click', function () {
    filter_sizes.classList.toggle('hidden');
});
