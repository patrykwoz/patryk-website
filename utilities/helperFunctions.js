function handleMouseEnter(e) {
    const projectCard = e.target;

    if (projectCard) {
        const myElement = projectCard.querySelector('.project-image');

        if (myElement && window.innerWidth > 650) {
            myElement.style.display = 'block';
        }
    }
}

function handleMouseLeave(e) {
    const projectCard = e.target;

    if (projectCard) {
        const myElement = projectCard.querySelector('.project-image');

        if (myElement && window.innerWidth > 650) {
            myElement.style.display = 'none';
        }
    }
}

function appendDomObjects(container, objects) {
    for (let object of objects) {
        if (object instanceof HTMLElement) {
            container.appendChild(object);
        }
    }
}

function appendDomObjectsWithFragment(container, objects) {
    const fragment = document.createDocumentFragment();
    for (const object of objects) {
        if (object instanceof HTMLElement) {
            fragment.appendChild(object);
        } else if (typeof object === 'object') {
            const element = document.createElement(object.type);

            if (object.className) {
                element.className = object.className;
            }

            if (object.textContent) {
                element.textContent = object.textContent;
            }

            if (object.attributes) {
                for (const [attrName, attrValue] of Object.entries(object.attributes)) {
                    element.setAttribute(attrName, attrValue);
                }
            }

            if (object.children) {
                for (const child of object.children) {
                    if (child instanceof HTMLElement) {
                        element.appendChild(child);
                    }
                }
            }

            // Check if this object has a mouseenter event
            if (object.mouseenter) {
                element.addEventListener('mouseenter', object.mouseenter);
            }

            fragment.appendChild(element);
        }
    }
    container.innerHTML = '';
    container.appendChild(fragment);
}

function insertHtml(container, html) {
    container.innerHTML = '';
    container.innerHTML = html;
}

function handleQueryParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const contentParam = urlParams.get('content');
    if (contentParam) {
        appendTemplateObjects(contentParam);
    }
}

function appendTemplateObjects(contentParam) {
    const templateNames = Object.keys(templatesManager);
    if (templateNames.includes(`${contentParam}-hero`)) {
        const heroObjects = templatesManager[`${contentParam}-hero`];
        const contentObjects = templatesManager[`${contentParam}-content`];
        heroContainer.innerHTML = '';
        contentContainer.innerHTML = '';
        appendDomObjects(heroContainer, heroObjects);
        appendDomObjects(contentContainer, contentObjects);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

function setElementHeightToWindoInnerHeight(element) {
    const windowHeight = window.innerHeight;
    element.style.height = windowHeight + 'px';
}