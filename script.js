function openSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '0';
}

function closeSlideInMenu() {
    const slideInMenu = document.querySelector('.slide-in-menu');
    slideInMenu.style.left = '-300px';
}

const menuToggle = document.querySelector('.menu-toggle');
const closeMenuButton = document.querySelector('#close-menu');

menuToggle.addEventListener('click', openSlideInMenu);
closeMenuButton.addEventListener('click', closeSlideInMenu);


function listBooks(books) {
    const table = document.querySelector('#book-list');
    table.innerHTML = '';

    for (const book of books) {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const linkCell = row.insertCell(1);

        nameCell.textContent = book.name;
        linkCell.innerHTML = `<a href="${book.pdfLink}" target="_blank">Download PDF</a>`;
    }
}


function sortBooks() {
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
        sortBooks();
    }
});

const subjects = [
    { name: 'Volume 1', image: 'images/VOL1.webp', books: [
        {
            name: "Communication 1: Totally Normal",
            pdfLink: "books/CHAP1.pdf"
        },
        {
            name: "Communication 2: Peaceful",
            pdfLink: "books/CHAP2.pdf"
        },
        {
            name: "Communication 3: A Suspicious Individual",
            pdfLink: "books/CHAP3.pdf"
        },
        {
            name: "Communication 4: Not Very Good",
            pdfLink: "books/CHAP4.pdf"
        },
        {
            name: "Communication 5: Wanting to Talk",
            pdfLink: "books/CHAP5.pdf"
        },
        {
            name: "Communication 6: Wanting to Apologize",
            pdfLink: "books/CHAP6.pdf"
        },
        {
            name: "Communication 7: One More Time",
            pdfLink: "books/CHAP7.pdf"
        },
        {
            name: "Communication 8: Scary",
            pdfLink: "books/CHAP8.pdf"
        },
        {
            name: "Communication 9: Old Friends",
            pdfLink: "books/CHAP9.pdf"
        },
        {
            name: "Communication 10: Dark Past",
            pdfLink: "books/CHAP10.pdf"
        },
        {
            name: "Communication 11: Not a Killer",
            pdfLink: "books/CHAP11.pdf"
        },
        {
            name: "Communication 12: Errand Girl",
            pdfLink: "books/CHAP12.pdf"
        },
        {
            name: "Communication 13: First Errand",
            pdfLink: "books/CHAP13.pdf"
        },
        {
            name: "Communication 14: Nervous",
            pdfLink: "books/CHAP14.pdf"
        },
        {
            name: "Communication 15: Going to School",
            pdfLink: "books/CHAP15.pdf"
        },
        {
            name: "Communication 16: Cell Phone",
            pdfLink: "books/CHAP16.pdf"
        },
        {   name: "Communication 17: Class Council Election",         
            pdfLink: "books/CHAP17.pdf"
        },
        {
            name: "Communication 18: Accidental Phone Call",
            pdfLink: "books/CHAP18.pdf"
        },
        {
            name: "Communication 19: Saito",
            pdfLink: "books/CHAP19.pdf"
        }
    ] },
    { name: 'Volume 2', image: 'images/VOL2.webp', books: [
        {
            name: "Communication 20: The Physical",
            pdfLink: "books/CHAP20.pdf"
        },
        {
            name: "Communication 21: Fitness Test",
            pdfLink: "books/CHAP21.pdf"
        },
        {
            name: "Communication 22: Home Visit",
            pdfLink: "books/CHAP22.pdf"
        },
        {
            name: "Communication 23: Ren",
            pdfLink: "books/CHAP23.pdf"
        },
        {
            name: "Communication 24: Ren, Part 2",
            pdfLink: "books/CHAP24.pdf"
        },
        {
            name: "Communication 25: Ren, Part 3",
            pdfLink: "books/CHAP25.pdf"
        },
        {
            name: "Communication 26: Ren, Part 4",
            pdfLink: "books/CHAP26.pdf"
        },
        {
            name: "Communication 27: Summer Uniform",
            pdfLink: "books/CHAP27.pdf"
        },
        {
            name: "Communication 28: Soft Noodles, No Grease, Easy on the Ginger and Veggies",
            pdfLink: "books/CHAP28.pdf"
        },
        {
            name: "Communication 29: Jokes",
            pdfLink: "books/CHAP29.pdf"
        },
        {
            name: "Communication 30: Rain",
            pdfLink: "books/CHAP30.pdf"
        },
        {
            name: "Communication 31: Blood Contract",
            pdfLink: "books/CHAP31.pdf"
        },
        {
            name: "Communication 32: Tadano in Junior High",
            pdfLink: "books/CHAP32.pdf"
        },
        {
            name: "Communication 33: Shopping",
            pdfLink: "books/CHAP33.pdf"
        },
        {
            name: "Communication 34: Beauty Salon",
            pdfLink: "books/CHAP34.pdf"
        }
    ] },
    { name: 'Volume 3', image: 'images/VOL3.webp', books: [
     {
        name: "Communication 35: Worries",
        pdfLink: "books/CHAP35.pdf"
    },
    {
        name: "Communication 36: Studying for Tests",
        pdfLink: "books/CHAP36.pdf"
    },
    {
        name: "Communication 37: Summer Vacation",
        pdfLink: "books/CHAP37.pdf"
    },
    {
        name: "Communication 38: Meeting Up",
        pdfLink: "books/CHAP38.pdf"
    },
    {
        name: "Communication 39: The Pool",
        pdfLink: "books/CHAP39.pdf"
    },   
    {
        name: "Communication 40: Just a Scrape",
        pdfLink: "books/CHAP40.pdf"
    },
    {
        name: "CCommunication 41: The Library",
        pdfLink: "books/CHAP41.pdf"
    },
    {
        name: "Communication 42: Shaved Ice",
        pdfLink: "books/CHAP42.pdf"
    },
    {
        name: "Communication 43: Part-Time Job",
        pdfLink: "books/CHAP43.pdf"
    },   
    {
        name: "Communication 44: The Park",
        pdfLink: "books/CHAP44.pdf"
    },   
    {
        name: "Communication 45: Celebrating Obon",
        pdfLink: "books/CHAP45.pdf"
    },
    {
        name: "Communication 46: Festival",
        pdfLink: "books/CHAP46.pdf"
    },
    {
        name: "Communication 47: Festival, Part 2",
        pdfLink: "books/CHAP47.pdf"
    }
    ] }
];

function createSubjectCards() {
    const subjectCardsContainer = document.querySelector('.subject-cards');

    subjects.forEach((subject) => {
        const card = document.createElement('div');
        card.classList.add('subject-card');

        const image = document.createElement('img');
        image.src = subject.image;
        image.alt = subject.name;
        image.classList.add('subject-image');

        const name = document.createElement('div');
        name.textContent = subject.name;
        name.classList.add('subject-name');

        card.appendChild(image);
        card.appendChild(name);
        card.addEventListener('click', () => displayBooks(subject.books));

        subjectCardsContainer.appendChild(card);
    });
}

function displayBooks(books) {
    const booksList = document.querySelector('.books-list');
    booksList.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('book-table');

    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell(0);
    const linkHeader = headerRow.insertCell(1);
    nameHeader.textContent = 'Book Name';
    linkHeader.textContent = 'PDF Link';

    books.forEach((book) => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const linkCell = row.insertCell(1);

        nameCell.textContent = book.name;
        linkCell.innerHTML = `<a href="${book.pdfLink}" target="_blank">Download PDF</a>`;
    });

    booksList.appendChild(table);
}

window.addEventListener('load', createSubjectCards);

const semesters = [
    {
        name: "1st Semester",
        image: "images/1semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise1.0/",
    },
    {
        name: "2nd Semester",
        image: "images/2semester.jpg",
        websiteLink: "https://rohansoni0507.github.io/BookWise2.0/",
    },
];

function createSemesterCards() {
    const semesterCardsContainer = document.querySelector('.semester-cards');

    semesters.forEach((semester) => {
        const card = document.createElement('div');
        card.classList.add('semester-card');
        card.id = semester.name.toLowerCase().replace(/\s/g, '-');

        const image = document.createElement('img');
        image.src = semester.image;
        image.alt = semester.name;
        image.classList.add('semester-image');

        const name = document.createElement('div');
        name.textContent = semester.name;
        name.classList.add('semester-name');

        const websiteLink = document.createElement('a');
        websiteLink.href = semester.websiteLink;
        websiteLink.target = "_blank";
        websiteLink.textContent = "Visit Website";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(websiteLink);

        semesterCardsContainer.appendChild(card);
    });
}

window.addEventListener('load', createSemesterCards);

const projectsData = [
    {
        name: "TUP Library",
        image: "images/project-one.png",
        website: "https://github.com/komiry/TUP-LIBRARY",
    },
    {
        name: "TUPM Ticket System",
        image: "images/project-2.png",
        website: "https://github.com/komiry/TUPM-BOOKING-TICKET-SYSTEM",
    },
    {
        name: "Tup Bank System",
        image: "images/project-3.png",
        website: "https://github.com/komiry/TUP-BANK-SYSTEM",
    },
    {
        name: "First Website",
        image: "images/project-4.png",
        website: "https://github.com/komiry/PORTFOLIO",
    },
];

function createProjectCards() {
    const projectContainer = document.querySelector(".project-card-container");

    projectsData.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const image = document.createElement("img");
        image.src = project.image;
        image.alt = project.name;

        const projectName = document.createElement("h3");
        projectName.textContent = project.name;

        const projectLink = document.createElement("a");
        projectLink.href = project.website;
        projectLink.textContent = "Visit Project";

        card.appendChild(image);
        card.appendChild(projectName);
        card.appendChild(projectLink);

        projectContainer.appendChild(card);
    });
}
createProjectCards();

const tableBody = document.getElementById("book-list");
const animeData = [
    { name: "Anime 1", coverUrl: "image_url_1.jpg" },
    { name: "Anime 2", coverUrl: "image_url_2.jpg" },

];


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