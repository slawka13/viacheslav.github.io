const tabItems = document.querySelectorAll('.tab-item');/*Кнопки вкладок*/
const tabContentItems = document.querySelectorAll('.tab-content-item');/*Вкладоки*/

// Select tab content item Это выберет элемент содержимого вкладки
function selectItem(e) {
   //Чтобы граница на кнопке исчезала
   removeBorder();
   //Как удаление границ только show
   removeShow();
   // Add border to current tab Добавить границу на текущую вкладку
   this.classList.add('tab-border');
   //Grab content item from DOM
   const tabContentItems = document.querySelector(`#${this.id}-content`);
   //Add show class
   tabContentItems.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));//Чтобы граница на кнопке оставалась
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));//Как удаление границ только show
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
