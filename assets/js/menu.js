const dishesList = document.querySelector('.grid-list');

window.addEventListener('load', async () => {
    const response = await fetch('https://64b18070062767bc48264cc6.mockapi.io/dishes');
    const dishes = await response.json();

    dishes.forEach((dish, index) => {
        const html = `
            <li class="${ index > 3 ? 'hidden' : '' }" data-name="${dish.name}">
                <div class="menu-card hover:card">
                    <figure class="card-banner" style="--width: ; --height: ;">
                        <img src="${ dish.image }" width="100" height="100" loading="lazy"  alt="steak" class="menu-card__image">
                    </figure>

                    <div>
                        <div class="title-wrapper">
                            <h3>
                                <a href="/dish.html?id=${dish.id}" class="card-title">${ dish.name }</a>
                            </h3>
                            <span class="badge label-1">${ dish.label }</span>
                            <span class="span title-2">$${ dish.price }</span>
                        </div>
                        <p class="card-text label-1">
                            ${ dish.description }
                        </p>
                    </div>
                </div>
            </li>
        `
        dishesList.insertAdjacentHTML('beforeend', html);
    })

    const viewAllMenu = document.querySelector('.view-all-menu')
    const hiddenElement = document.querySelectorAll('li.hidden')

    viewAllMenu.addEventListener('click', function() {
        hiddenElement.forEach(element => {
            element.classList.remove('hidden')
        });
    });

    // SEARCH
    const searchInput = document.querySelector('#search');
    const dishItems = document.querySelectorAll('.menu-list li');

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase().trim();

        dishItems.forEach(item => {
            const dishName = item.dataset.name.toLowerCase();
            if (dishName.includes(searchValue)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        })
    });
});