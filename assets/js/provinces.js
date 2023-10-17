import {
    islands,
} from './dummies.js';

let sidebar = document.getElementById('sidebar');

let generateIslandHTML = (item) => {
    let provinceHTML = item.provinces.map((province) => {
        return `
            <li>
                <a class="nav-link" href="${province.slug}">${province.name}</a>
            </li>
        `;
    }).join('');

    let islandHTML = `
        <li>
            <a class="nav-link" href="${item.island_slug}">${item.island}</a>
            <ul class="nav navbar-nav">
                ${provinceHTML}
            </ul>
        </li>
    `;

    return islandHTML;
}

islands.forEach((item) => {
    let islandElement = document.createElement('ul');
    islandElement.className = "nav navbar-nav";
    islandElement.innerHTML = generateIslandHTML(item);

    sidebar.appendChild(islandElement);
});
