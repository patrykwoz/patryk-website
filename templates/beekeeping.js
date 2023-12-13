// /?content=beekeeping


// REFERENCE CONTAINER

const beekeepingReference = document.createElement('div')
beekeepingReference.classList.add('reference-container');
beekeepingReference.innerHTML = `
    <div class="reference-content">
        <img class="reference-image" src="assets/beekeeping/IMG 076.jpg"></img>
        <p class="reference-citation">
            Inspecting a bee hive.
        </p>
    </div>
`;

const beekeepingObjects = [beekeepingReference]

templatesManager['beekeeping-reference'] = beekeepingObjects;