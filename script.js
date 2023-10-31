const itemsPerPage = 5;
const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

const paginationContainer = document.getElementById("pagination");
const dataList = document.getElementById("data-list");

function displayData(start, end) {
    dataList.innerHTML = "";
    for (let i = start; i < end; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = data[i];
        dataList.appendChild(listItem);
    }
}

function createPaginationButtons() {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add("pagination-button");
        button.addEventListener("click", function () {
            const start = (i - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            displayData(start, end);
        });
        paginationContainer.appendChild(button);
    }
}

createPaginationButtons();
displayData(0, itemsPerPage);
