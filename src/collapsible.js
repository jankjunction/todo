const collapse = (() => {
    let coll = document.getElementsByClassName('collapsible');
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', () => {
            coll[i].lastChild.classList.toggle('invisible');
        })
    }
});

export { collapse };