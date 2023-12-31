import { islands } from "./dummies.js";

document.addEventListener("DOMContentLoaded", (e) => {
  let sidebar = document.getElementById("sidebar");

  let params = new URLSearchParams(document.location.search);
  let provinceActive = params.get("provinsi");

  let breadcrumbTitle = document.querySelector(".breadcrumb > .active")
  breadcrumbTitle.innerText = provinceActive || "Kepulauan Riau";

  let generateIslandHTML = (item) => {
    let provinceHTML = item.provinces
      .map((province) => {
        return `
            <li ${provinceActive == province.slug ? 'class="active"' : ""}>
                <a class="nav-link" href="${province.slug === 'aceh' ? 'provinsi-aceh.html?provinsi=aceh' : `provinsi.html?provinsi=${province.slug}`}">${province.name}</a>
            </li>
        `;
      })
      .join("");

    let islandHTML = `
        <li>
            <a class="nav-link" href="#">${item.island}</a>
            <ul class="nav navbar-nav">
                ${provinceHTML}
            </ul>
        </li>
    `;

    return islandHTML;
  };

  islands.forEach((item) => {
    let islandElement = document.createElement("ul");
    islandElement.className = "nav navbar-nav";
    islandElement.innerHTML = generateIslandHTML(item);

    sidebar.appendChild(islandElement);
  });
});
