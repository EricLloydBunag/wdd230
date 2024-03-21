function displayList(){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
            
    li.textContent = input.value.trim();
    deleteButton.textContent = '✕';
    deleteButton.classList.add('delete');
            
    li.append(deleteButton);
    list.append(li);
            
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
};

function setChaptersList(){
    localStorage.setItem('favChaptersList', JSON.stringify(chaptersArray));
};

function getChapterList(){
    return JSON.parse(localStorage.getItem('favChaptersList'));
};

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChaptersList()
};

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});
button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChaptersList();
            
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});