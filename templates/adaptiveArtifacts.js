// HERO CONTAINER

const adaptiveArtifactsHeroHeading = document.createElement('div')
adaptiveArtifactsHeroHeading.classList.add('hero-heading-container');
adaptiveArtifactsHeroHeading.innerHTML = `
    <p class="hero-heading">Adaptive Artifacts</p>
`;

const adaptiveArtifactsHeroCanvas = document.createElement('div')
adaptiveArtifactsHeroCanvas.classList.add('canvas-container')
adaptiveArtifactsHeroCanvas.innerHTML = `
    <canvas></canvas>
`;

// CONTENT CONTAINER

const adaptiveArtifactsProjectContentContainer = document.createElement('div');
adaptiveArtifactsProjectContentContainer.classList.add('project-content-container');

const adaptiveArtifactsProjectHeader = document.createElement('div')
adaptiveArtifactsProjectHeader.classList.add('project-content-header');
adaptiveArtifactsProjectHeader.innerHTML=`
<a href="https://www.adaptiveartifacts.ca/">Project Website</a>
<p>|</p>
<a href="https://github.com/Adaptive-Artifacts">GitHub</a>
<p>|</p>
<a href="https://github.com/patrykwoz/patryk-website/blob/main/assets/adaptive_artifacts/Adaptive%20Artifacts%20-%20Full%20Research%20Paper.pdf">Unpublished Paper</a>
`;


const adaptiveArtifactsProjectContent = document.createElement('div');
adaptiveArtifactsProjectContent.classList.add('project-content');

adaptiveArtifactsProjectContent.innerHTML = `
<h2 class="project-content-heading">
Harnessing Adaptive Artifacts for Outdoor Thermal Comfort.
</h2>
<p>
Picture urban spaces that don’t just endure the environment, but interact and adapt to
it. This concept powers our exploration into Adaptive Artifacts, dynamic installations that
evolve according to the surrounding conditions with and/or without the use of motors.
They can respond through mechanical and passive actuation, and human interaction,
merging architecture with nature’s adaptability.
</p>

<p>
Adaptive Artifacts don’t simply exist in an environment; they learn from it. Acting as
weather stations, they garner information about local microclimates, and this data steers
their transformation. The goal? To reshape our urban experiences, concentrating on
enhancing thermal comfort and optimizing our interaction with wind elements.
</p>

<p>
With a dedicated app and web platform, people can interact with Adaptive Artifacts,
exploring anonymized environmental data and sharing their personal experiences. This
interaction feeds into real-time predictions for the most fitting spatial configurations
and contributes to an open-source database, fueling future innovations and inviting
collaboration from other visionaries.
</p>

<p>
The vision that drives this research is an urban landscape speckled with these adaptive
installations, fostering a connected, adaptive ecosystem. These installations are more than
architectural marvels—they’re catalysts for a shift in urban living. With Adaptive Artifacts,
we’re crafting a future where cities don’t just house us—they engage and adapt with us.
</p>

<h3>My Skills:</h3>

<ul>
<li>Project Lead, Roadmap and Implementation</li>
<li>Stakeholder Relations Management, Fundraising</li>
<li>Computational Design Framework, Python Programming</li>
<li>Algorithm and System Design</li>
<li>Outdoor Thermal Comfort, Computational Fluid Dynamics</li>
<li>Architectural Design</li>
<li>Urban Design</li>
</ul>

<div class="project-content-img">
    <img src="assets/adaptive_artifacts/Patryk 2.0 Website - Baseline.jpg" alt=""></img>
    <p class="project-content-caption">Baseline wind conditions with reinforced wind speed patterns. CFD Simulation.</p>
</div>

<div class="project-content-img">
    <img src="assets/adaptive_artifacts/Patryk 2.0 Website - Hypothesis.jpg" alt=""></img>
    <p class="project-content-caption">Computational Fluid Dynamics Hypothesis. Adaptive Artifacts Wind Shelter modulating 
    the local wind conditions.</p>
</div>

<div class="project-content-img">
    <div class="image-group-four">
        <img src="assets/adaptive_artifacts/IMG_5797.jpg" alt=""></img>
        <img src="assets/adaptive_artifacts/IMG_5786.jpg" alt=""></img>
        <img src="assets/adaptive_artifacts/IMG_4903.jpg" alt=""></img>
        <img src="assets/adaptive_artifacts/IMG_4909.jpg" alt=""></img>
    </div>
    <p class="project-content-caption">A series of images showcasing various prototypes of the fabricated weather stations.</p>
</div>

<div class="project-content-img">
    <img src="assets/adaptive_artifacts/digitalPrototypeShelter.jpg" alt=""></img>
    <p class="project-content-caption">Digital Prototype of the Adaptive Artifacts Wind Shelter.</p>
</div>

<div class="project-content-img">
    <img src="assets/adaptive_artifacts/Patryk 2.0 Website - Technical Overview.jpg" alt=""></img>
    <p class="project-content-caption">Technical Setup Diagram.</p>
</div>

<div class="project-content-img">
    <img src="assets/adaptive_artifacts/digitalMockUp.jpg" alt="" style="width: 300px; height: auto;"></img>
    <p class="project-content-caption">Digital Mock-up of the Custom Weather Station.</p>
</div>

<div class="project-content-img">
    <img src="assets/adaptive_artifacts/ioTsetup.jpg" alt=""></img>
    <p class="project-content-caption"><span>IoT</span> Setup.</p>
</div>

<div class="project-content-img">
    <img src="assets/adaptive_artifacts/geometryOptimizationForStrips.jpg" alt=""></img>
    <p class="project-content-caption">Geometry optimization for strips of ruled, developable surfaces that can be
    unfolded onto a flat surface and machined from sheet material.
    </p>
</div>

<div class="project-content-img">
    <img src="assets/adaptive_artifacts/unfoldedStrips.jpg" alt=""></img>
    <p class="project-content-caption">Unfolded strips are ready to be procedurally packed onto a sheet and machined.</p>
</div>

<div class="footer"></div>


`;

adaptiveArtifactsProjectContentContainer.appendChild(adaptiveArtifactsProjectHeader);
adaptiveArtifactsProjectContentContainer.appendChild(adaptiveArtifactsProjectContent);

const adaptiveArtifactsHeroObjects = [adaptiveArtifactsHeroHeading, adaptiveArtifactsHeroCanvas];
const adaptiveArtifactsContentObjects = [adaptiveArtifactsProjectContentContainer];

templatesManager['adaptive-artifacts-hero'] = adaptiveArtifactsHeroObjects;
templatesManager['adaptive-artifacts-content'] = adaptiveArtifactsContentObjects;