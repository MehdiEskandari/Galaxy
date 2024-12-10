const count = 64;

for (let index = 0; index < count; index++) {
    const planet = document.createElement('span');
    planet.setAttribute("id", "planet-" + (index + 1))
    document.querySelector('#galaxy').appendChild(planet)
}