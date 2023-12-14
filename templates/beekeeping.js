// /?content=beekeeping


// REFERENCE CONTAINER

const beekeepingReference = document.createElement('div')
beekeepingReference.classList.add('reference-container');
beekeepingReference.innerHTML = `
    <div class="reference-content">
        <img class="reference-image" src="assets/beekeeping/IMG 076.jpg"></img>
        <p class="reference-citation">
            Checking up on the hive near my parents' home in Poland, 2018.
        </p>
    </div>
`;

const beekeepingObjects = [beekeepingReference]

templatesManager['beekeeping-reference'] = beekeepingObjects;