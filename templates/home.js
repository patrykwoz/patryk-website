const heroHeading = document.createElement('div')
heroHeading.classList.add('hero-heading-container');
heroHeading.innerHTML = `
    <p class="hero-heading">Blending Computer Science, Design and Fabrication to <span class="span-highlight">Fine-Tune</span> Our Future Habitats</p>
`;

const heroCanvas = document.createElement('div')
heroCanvas.classList.add('canvas-container')
heroCanvas.innerHTML = `
    <canvas></canvas>
`;

// SHORT STATEMENT ELEMENT
const shortStatement = document.createElement('div');
shortStatement.innerHTML = `
<div class="short-statement">
    <p class="iam">
        I’m a computational designer and maker of things.
    </p>
    <p class="iam">
        I specialize in solving real-world problems through a unique blend of computational design thinking, algorithm development, computer programming, and design for digital fabrication.
    </p>
</div>
`;

// PROJECTS
const projectsHeading = document.createElement('h2')
projectsHeading.innerText=`
Highlighted Projects
`;

const projectsContainer = document.createElement('div');
projectsContainer.classList.add('project-container');

//Ideas Tracker (Capstone One) IdeaLog
const ideaLog = document.createElement('div');
ideaLog.classList.add('project-card');
ideaLog.setAttribute('data-project-link', 'templates/compEnvDesign.js');
ideaLog.innerHTML = `
<div class="project-card-header">
    <p class="project-card-header-timeline">2023</p>
    <p class="project-card-header-type">Software Engineering</p>
</div>
<p class="project-title">IDEALog (WIP)</p>
<div class="project-image">
    <img src="assets/idealog/idealog.png" alt=""> 
</div>
`;
ideaLog.addEventListener('mouseenter', handleMouseEnter);
ideaLog.addEventListener('mouseleave', handleMouseLeave);
ideaLog.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        window.location.href = 'https://github.com/patrykwoz/idealog';

        // const contentParam = 'bim';
        // appendTemplateObjects(contentParam); 
    }
});

projectsContainer.appendChild(ideaLog);

//Small design app (Capstone Two)

//Adaptive Artifacts
const adaptiveArtifacts = document.createElement('div');
adaptiveArtifacts.classList.add('project-card');
adaptiveArtifacts.setAttribute('data-project-link', 'templates/adaptiveArtifacts.js');
adaptiveArtifacts.innerHTML = `
<div class="project-card-header">
    <p class="project-card-header-timeline">2022-Present</p>
    <p class="project-card-header-type">Applied Research</p>
</div>
<p class="project-title">Adaptive Artifacts</p>
<div class="project-image">
    <img src="assets/adaptive_artifacts/Screenshot 2021-05-03 170628.jpg" alt=""> 
</div>
`;
adaptiveArtifacts.addEventListener('mouseenter', handleMouseEnter);
adaptiveArtifacts.addEventListener('mouseleave', handleMouseLeave);
adaptiveArtifacts.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'adaptive-artifacts';
        appendTemplateObjects(contentParam); 
    }
});

projectsContainer.appendChild(adaptiveArtifacts);

//Media House
const mediaHouse = document.createElement('div');
mediaHouse.classList.add('project-card');
mediaHouse.setAttribute('data-project-link', 'templates/compEnvDesign.js');
mediaHouse.innerHTML = `
<div class="project-card-header">
    <p class="project-card-header-timeline">2013</p>
    <p class="project-card-header-type">Architectural Design</p>
</div>
<p class="project-title">Media House</p>
<div class="project-image">
    <img src="assets/media_house/pierwszaStronaDuze02powt250.jpg" alt=""> 
</div>
`;
mediaHouse.addEventListener('mouseenter', handleMouseEnter);
mediaHouse.addEventListener('mouseleave', handleMouseLeave);
mediaHouse.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'media-house';
        appendTemplateObjects(contentParam); 
    }
});

projectsContainer.appendChild(mediaHouse);

//Digital Fabrication
const digitalFabrication = document.createElement('div');
digitalFabrication.classList.add('project-card');
digitalFabrication.setAttribute('data-project-link', 'templates/compEnvDesign.js');
digitalFabrication.innerHTML = `
<div class="project-card-header">
    <p class="project-card-header-timeline">2014</p>
    <p class="project-card-header-type">Design for Manufacturing</p>
</div>
<p class="project-title">Digital Fabrication</p>
<div class="project-image">
    <img src="assets/digital_fabrication/IMG_9178.jpg" alt=""> 
</div>
`;
digitalFabrication.addEventListener('mouseenter', handleMouseEnter);
digitalFabrication.addEventListener('mouseleave', handleMouseLeave);
digitalFabrication.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'digital-fabrication';
        appendTemplateObjects(contentParam); 
    }
});

projectsContainer.appendChild(digitalFabrication);


//Beautifully Grotesque
const beautifullyGrotesque = document.createElement('div');
beautifullyGrotesque.classList.add('project-card');
beautifullyGrotesque.setAttribute('data-project-link', 'templates/compEnvDesign.js');
beautifullyGrotesque.innerHTML = `
<div class="project-card-header">
    <p class="project-card-header-timeline">2015</p>
    <p class="project-card-header-type">Computational Geometry and Perception of Beauty</p>
</div>
<p class="project-title">Beautifully Grotesque</p>
<div class="project-image">
    <img src="assets/beautifully_grotesque/imageCROPPED.png" alt=""> 
</div>
`;
beautifullyGrotesque.addEventListener('mouseenter', handleMouseEnter);
beautifullyGrotesque.addEventListener('mouseleave', handleMouseLeave);
beautifullyGrotesque.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'beautifully-grotesque';
        appendTemplateObjects(contentParam); 
    }
});

projectsContainer.appendChild(beautifullyGrotesque);


//Evolving Configurations
const evolvingConfigurations = document.createElement('div');
evolvingConfigurations.classList.add('project-card');
evolvingConfigurations.setAttribute('data-project-link', 'templates/compEnvDesign.js');
evolvingConfigurations.innerHTML = `
<div class="project-card-header">
    <p class="project-card-header-timeline">2019</p>
    <p class="project-card-header-type">Master Thesis</p>
</div>
<p class="project-title">Evolving Configurations</p>
<div class="project-image">
    <img src="assets/evolving_configurations/01228039_Patryk_Jacek_Wozniczka_animationNewtBW.gif" alt=""> 
</div>
`;
evolvingConfigurations.addEventListener('mouseenter', handleMouseEnter);
evolvingConfigurations.addEventListener('mouseleave', handleMouseLeave);
evolvingConfigurations.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'evolving-configurations';
        appendTemplateObjects(contentParam); 
    }
});

projectsContainer.appendChild(evolvingConfigurations);

//bim
const bim = document.createElement('div');
bim.classList.add('project-card');
bim.setAttribute('data-project-link', 'templates/compEnvDesign.js');
bim.innerHTML = `
<div class="project-card-header">
    <p class="project-card-header-timeline">2011-Present</p>
    <p class="project-card-header-type">Design Production</p>
</div>
<p class="project-title">Building Information Modeling</p>
<div class="project-image">
    <img src="assets/bim/MC-03-AS-Pers-01-Var2-Obj86_150dpiSMALL.jpg" alt=""> 
</div>
`;
bim.addEventListener('mouseenter', handleMouseEnter);
bim.addEventListener('mouseleave', handleMouseLeave);
bim.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'bim';
        appendTemplateObjects(contentParam); 
    }
});

projectsContainer.appendChild(bim);

//All the way down
const allTheWayDown = document.createElement('div');
allTheWayDown.classList.add('project-card');
allTheWayDown.setAttribute('data-project-link', 'templates/compEnvDesign.js');
allTheWayDown.innerHTML = `
<div class="project-card-header">
    <p class="project-card-header-timeline">2023</p>
    <p class="project-card-header-type">Software Engineering</p>
</div>
<p class="project-title">AllTheWayDown</p>
<div class="project-image">
    <img src="assets/all_the_way_down/rhinoFlat.png" alt=""> 
</div>
`;
allTheWayDown.addEventListener('mouseenter', handleMouseEnter);
allTheWayDown.addEventListener('mouseleave', handleMouseLeave);
allTheWayDown.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        window.location.href = 'https://github.com/maxdumas/aectech-hackathon';

        // const contentParam = 'bim';
        // appendTemplateObjects(contentParam); 
    }
});

projectsContainer.appendChild(allTheWayDown);

//GHCHOMP

//Gamify Design



//Small Apps (Exercises from the bootcamp)

//Volunteering and Community Organizing

//Manufacturing

//Sketches/painting

//Data Science >> Which should be integrated with Comp Env Design


//Computational Environmental Design
const computationalEnvironmentalDesign = document.createElement('div');
computationalEnvironmentalDesign.classList.add('project-card');
computationalEnvironmentalDesign.setAttribute('data-project-link', 'templates/compEnvDesign.js');
computationalEnvironmentalDesign.innerHTML = `
<div class="project-card-header">
    <p class="project-card-header-timeline">2019-Present</p>
    <p class="project-card-header-type">Applied Research</p>
</div>
<p class="project-title">Computational Environmental Design</p>
<div class="project-image">
    <img src="assets/comp_env_design/Type00-permutation27.png" alt=""> 
</div>
`;
computationalEnvironmentalDesign.addEventListener('mouseenter', handleMouseEnter);
computationalEnvironmentalDesign.addEventListener('mouseleave', handleMouseLeave);
computationalEnvironmentalDesign.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'comp-env-design';
        appendTemplateObjects(contentParam); 
    }
});

projectsContainer.appendChild(computationalEnvironmentalDesign);
 

const homeFooter = document.createElement('div');
homeFooter.classList.add('footer');



const homeHeroObjects = [heroHeading, heroCanvas];
const homeContentObjects = [shortStatement, projectsHeading, projectsContainer, homeFooter];