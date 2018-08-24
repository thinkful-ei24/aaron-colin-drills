'use strict';


const store = [
  { name: 'apples', checked: false },
  { name: 'oranges', checked: false },
  { name: 'milk', checked: true },
  { name: 'bread', checked: false },
];




function addListItem() {
  $('#js-shopping-list-form').submit(function(e){
    e.preventDefault();
    store.push($(this).$('.js-shopping-list-entry').val());
  });
}
$(addListItem());




function checkListItem() {

}




function deleteListItem() {

}




function generateLi(item, index) {
  const checkedClass = item.checked ? 'shopping-item__checked': '';
  return `
      <li class="js-item-index-element" data-item-index="${index}">
        <span class="shopping-item ${checkedClass}">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
  `;
}





function renderShoppingList() {
  const elements = store.map((data, dataIndex) => {
    return (generateLi(data, dataIndex));
  });
  return elements.join('');
}
$(renderShoppingList());