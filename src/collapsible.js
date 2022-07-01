const collapse = () => {
  const coll = document.getElementsByClassName('collapsible');
  for (let i = 0; i < coll.length; i += 1) {
    coll[i].addEventListener('click', () => {
      coll[i].lastChild.classList.toggle('invisible');
    });
  }
};

export { collapse };
