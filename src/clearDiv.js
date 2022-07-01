const clearDiv = (div) => {
  for (let i = 0; i < div.children.length + 1; i += 1) {
    div.removeChild(div.firstElementChild);
  }
  const parent = div.parentNode;
  parent.removeChild(div);
};

export default clearDiv;
