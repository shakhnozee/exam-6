import { addColumnBtn, boardColumn } from "./elements";

export function addColumn() {
    let name = prompt('Enter the name of column');
    console.log(name);
    const column = document.createElement('div');
    column.className = 'column';

    const columnHeader = document.createElement('div');
    columnHeader.className = 'column__header';

    const columnTitle = document.createElement('h2')
    columnTitle.textContent = name;

    const columnDelete = document.createElement('button')
    columnDelete.className = 'column__delete';
    columnDelete.textContent = "×";
    columnDelete.addEventListener('click', () => {
        column.remove()
    })

    columnHeader.append(columnTitle, columnDelete);

    const columnCards = document.createElement('div');
    columnCards.className = "column__cards";

    const addCard = document.createElement('button');
    addCard.textContent = '+ Add card';
    addCard.className = 'column__add-card';


    column.append(columnHeader, columnCards, addCard)

    boardColumn.appendChild(column)

    addCard.addEventListener('click', () => {
        handleAddCard(columnCards)
    })
}

function handleAddCard(columnCards: HTMLDivElement) {
    const title = prompt('Enter the name of task');
    const description = prompt('Enter the description of task (optional)')

    const card = document.createElement('div');
    card.className = 'card';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card__title';
    cardTitle.textContent = title;

    const cardDesc = document.createElement('p');
    cardDesc.className = 'card__description';
    cardDesc.textContent = description;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card__footer';

    const cardDate = document.createElement('span');
    cardDate.className = 'card__date';

    cardDate.textContent = getDate();

    const cardDelete = document.createElement('button');
    cardDelete.className = "card__delete";
    cardDelete.textContent = 'Delete';
    cardDelete.addEventListener('click', () => {
        card.remove()
    })


    cardFooter.append(cardDate, cardDelete);
    card.append(cardTitle, cardDesc, cardFooter);

    columnCards.append(card)

    console.log({ title, description })
}

function getDate() {
    const date = new Date().toLocaleDateString();
    console.log(date)
    return date;
}