const clearDiv = ((div) => {
    for (let i = 0; i < div.children.length + 1; i++) {
        div.removeChild(div.firstElementChild);
    }
});

export default clearDiv;