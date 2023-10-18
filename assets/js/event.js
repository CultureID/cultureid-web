import {
    events as eventsDummy
} from './dummies.js';

let events = document.getElementById('events');

let card = (event, index) => {

    let date = new Date(event.date);
    let localDate = new Intl.DateTimeFormat('id-ID', {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);

    return `
    <div class="card border-0 mb-4" style="height: 380px; box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.25);">
        <img src="assets/images/events/${event.thumbnail}" class="card-img-top object-fit-cover" alt="${event.name}" height="150px">
        <div class="card-body d-flex flex-column justify-content-between">
            <p class="card-text fw-lighter" style="color: var(--light-color); font-size: 11pt">${localDate}</p>
            <h5 class="card-title fw-semibold flex-grow-1" style="font-size: 14pt">
                    <a class="nav-link" href="${event.url}">${event.name}</a>
            </h5>
            <p class="card-text fw-lighter flex-grow-1 align-content-start" style="color: var(--light-color); font-size: 11pt">${event.location}<br>${event.city}</p>
            <p class="card-text fw-bold fs-6">${event.is_free ? "GRATIS" : 'Rp.' + event.fee}</p>
        </div>
    </div>
    `
}

eventsDummy.forEach((event) => {
    let element = document.createElement('div');
    // element.className = "col-md-4"
    element.innerHTML = card(event);

    events.appendChild(element);
})
