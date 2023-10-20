function openSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '0';
}

function closeSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '-300px';
}

const menuToggle = document.querySelector('.menu-toggle');
const closeMenuButton = document.querySelector('.close-button');

menuToggle.addEventListener('click', openSlideInMenu);
closeMenuButton.addEventListener('click', closeSlideInMenu);

function listBooks(books) {
    const table = document.querySelector('.book-table');
    table.innerHTML = '';

    for (const book of books) {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const linkCell = row.insertCell(1);
    }
}

function sortBooks(books) {
    const sortedBooks = quickSort(books);
    listBooks(sortedBooks);
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].name < pivot.name) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

window.addEventListener('load', () => {
    const showBooksPage = document.querySelector('#show-book-list');

    if (showBooksPage) {
        listBooks(books);
    }
    const sortBooksPage = document.querySelector('#sort-book-list');

    if (sortBooksPage) {
        sortBooks(books);
    }
});

const tableBody = document.getElementById("book-list");

function addRowsToTable(data) {
    data.forEach((anime) => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell(0);
        const coverCell = row.insertCell(1);

        nameCell.textContent = anime.name;
        const img = document.createElement("img");
        img.src = anime.coverUrl;
        img.alt = anime.name;
        img.className = "subject-image";
        coverCell.appendChild(img);
    });
}
addRowsToTable(animeData);

function playMusic(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}


function playMusic(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

function stopMusic(audioId) {
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0;
}