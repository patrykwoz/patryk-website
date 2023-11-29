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

const adaptiveArtifactsProjectContentContainer = document.createElement('div');
adaptiveArtifactsProjectContentContainer.classList.add('project-content-container');

const adaptiveArtifactsProjectContent = document.createElement('div');
adaptiveArtifactsProjectContent.classList.add('project-content');

adaptiveArtifactsProjectContent.innerHTML = `
<p>
Picture urban spaces that don’t just endure the environment, but interact and adapt to it. This concept powers our exploration into Adaptive Artifacts, dynamic installations that evolve according to the surrounding conditions with and/or without the use of motors. They can respond through mechanical and passive actuation, and human interaction, merging architecture with nature’s adaptability.
</p>
<p>
Adaptive Artifacts don’t simply exist in an environment; they learn from it. Acting as weather stations, they garner information about local microclimates, and this data steers their transformation. The goal? To reshape our urban experiences, concentrating on enhancing thermal comfort and optimizing our interaction with wind elements.
</p>
`;


adaptiveArtifactsProjectContentContainer.appendChild(adaptiveArtifactsProjectContent);

const adaptiveArtifactsHeroObjects = [adaptiveArtifactsHeroHeading, adaptiveArtifactsHeroCanvas];
const adaptiveArtifactsContentObjects = [adaptiveArtifactsProjectContentContainer];