const tabButtons = document.querySelectorAll('.design-list__item');
const tabDiscriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabDesign = document.querySelectorAll('.feature__img');
const tabTitle = document.querySelectorAll('.design__title');

const changeContent = (arr, value) => {
    arr.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    });
}

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler;
        
        changeContent(tabDiscriptions, dataValue);
        changeContent(tabImages, dataValue);
        changeContent(tabDesign, dataValue);
        changeContent(tabTitle, dataValue);
        
        tabTitle.forEach(title => {
            if(!title.classList.contains("hidden")) {
                document.title = title.innerText;
            }
        })

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        });

    });
});