import {
    upcomingEvents as upcomingEventsDummy,
    endedEvents as endedEventsDummy
} from './dummies.js';

let upcomingEvents = document.getElementById('upcoming-events');
let endedEvents = document.getElementById('ended-events');

let card = (event) => {

    let date = new Date(event.date);
    let localDate = new Intl.DateTimeFormat('id-ID', {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);

    return `
    <div class="card border-0 me-3" style="height: 380px; width: 230px; box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.25);">
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

upcomingEventsDummy.forEach((event) => {
    let element = document.createElement('div');
    element.innerHTML = card(event);

    upcomingEvents.appendChild(element);
})

endedEventsDummy.forEach((event) => {
    let element = document.createElement('div');
    element.innerHTML = card(event);

    endedEvents.appendChild(element);
})
