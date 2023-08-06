const generateElement = (tagName, id, classes, children = '') => {
  const element = document.createElement(tagName);
  element.id = id;
  element.classList.add(...classes);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      const childElement = generateElement(...child);
      element.appendChild(childElement);
    });

    return element;
  }

  element.innerText = children;
  return element;
};
