const data = [
    { name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" },
    { name: "Item 4" }, { name: "Item 5" }, { name: "Item 6" },
    { name: "Item 7" }, { name: "Item 8" }, { name: "Item 9" },
    { name: "Item 10" }, { name: "Item 11" }, { name: "Item 12" },
    { name: "Item 13" }, { name: "Item 14" }, { name: "Item 15" },
    { name: "Item 16" }, { name: "Item 17" }, { name: "Item 18" },
    { name: "Item 19" }, { name: "Item 20" }
];
const itemsPerPage = 5;
let currentPage = 1;

document.addEventListener('DOMContentLoaded', function() {
    renderPage(currentPage);
    createPaginationControls();
});

function renderPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = data.slice(startIndex, endIndex);

    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';

    pageData.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.name;
        dataContainer.appendChild(div);
    });
}

function createPaginationControls() {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginationControls = document.getElementById('paginationControls');
    paginationControls.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('span');
        pageItem.textContent = i;
        pageItem.classList.add('page-item');
        if (i === currentPage) {
            pageItem.classList.add('active');
        }
        pageItem.addEventListener('click', function() {
            currentPage = i;
            renderPage(currentPage);
            updatePaginationControls();
        });
        paginationControls.appendChild(pageItem);
    }
}

function updatePaginationControls() {
    const pageItems = document.querySelectorAll('.page-item');
    pageItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index + 1 === currentPage) {
            item.classList.add('active');
        }
    });
}
