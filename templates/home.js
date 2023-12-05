const heroHeading = document.createElement('div');
heroHeading.classList.add('hero-heading-container');
heroHeading.innerHTML = `
    <p class="hero-heading">Blending Computer Science, Design and Fabrication to <span class="span-highlight">Fine-Tune</span> Our Future Habitats</p>
`;

const heroButton = document.createElement('a');
heroButton.classList.add('hero-btn');
heroButton.innerText = 'Explore';

heroButton.addEventListener('click', function (e) {
    e.preventDefault(); 
    console.log('hello')
    contentContainer.scrollIntoView({
        behavior: 'smooth' 
    });
});

// heroHeading.appendChild(heroButton);

const heroCanvas = document.createElement('div')
heroCanvas.classList.add('canvas-container')
heroCanvas.innerHTML = `
    <canvas></canvas>
`;

// SHORT STATEMENT ELEMENT
const shortStatement = document.createElement('div');
shortStatement.classList.add('short-statement')
shortStatement.innerHTML = `
    <p class="iam-header" id="iam">
    I'm a computational designer and software engineer.</p>
    <div class="iam-columns">
        <div class="iam-column-left">
            <p class="iam">
                I specialize in digital fabrication and assembly, geometry computation and AI for built environments.
            </p>
            <p class="iam">

                Passionate about integrating living systems and buildings, I am a computational designer and software developer with more than seven years in the architecture, engineering, and construction industry. My focus is in developing computer programs that optimize the design, manufacturing, and assembly of user-centric built environments.
            </p>    
            <p class="iam">
                As a software engineer, I’m capable of crafting these solutions into full-stack web applications.
            </p>
        </div>

        <div class="iam-column-right">
            <p class="iam">
                What I bring to the table:
            </p>
            <ul>
                <li>A bridge between computer science and the design of built environments.</li>
                <li>Years of experience delivering innovative design technology.</li>
                <li>Expertise in computational geometry.</li>
            </ul>

            <p class="iam">
                I've worked on projects from design to construction of complex buildings as a hands-on BIM and computational design lead.
            
            
                I've made design software work harder and smarter, leading teams to:
    
            </p>

            <ul>
                <li>Save time.</li>
                <li>Design better.</li>
                <li>Use Machine Learning for new ideas.</li>
                <li>Find creative solutions using computation.</li>
            
            </ul?
            
    
    
    
        </div>
        


    </div>
`;

// PROJECTS
const projectsHeading = document.createElement('p')
projectsHeading.classList.add('project-container-header');
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
adaptiveArtifacts.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'adaptive-artifacts';
        appendTemplateObjects(contentParam);
        // window.location.href = `https://patrykwozniczka.com/?content=${contentParam}`;
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
mediaHouse.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'media-house';
        // appendTemplateObjects(contentParam); 
        window.location.href = `https://patrykwozniczka.com/?content=${contentParam}`;
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
digitalFabrication.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'digital-fabrication';
        // appendTemplateObjects(contentParam);
        window.location.href = `https://patrykwozniczka.com/?content=${contentParam}`; 
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
beautifullyGrotesque.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'beautifully-grotesque';
        // appendTemplateObjects(contentParam); 
        window.location.href = `https://patrykwozniczka.com/?content=${contentParam}`;
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
evolvingConfigurations.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'evolving-configurations';
        // appendTemplateObjects(contentParam); 
        window.location.href = `https://patrykwozniczka.com/?content=${contentParam}`;
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
bim.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'bim';
        // appendTemplateObjects(contentParam); 
        window.location.href = `https://patrykwozniczka.com/?content=${contentParam}`;
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
computationalEnvironmentalDesign.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        const contentParam = 'comp-env-design';
        // appendTemplateObjects(contentParam); 
        window.location.href = `https://patrykwozniczka.com/?content=${contentParam}`;
    }
});

projectsContainer.appendChild(computationalEnvironmentalDesign);
 

const homeFooter = document.createElement('div');
homeFooter.classList.add('footer');



const homeHeroObjects = [heroHeading, heroCanvas];
const homeContentObjects = [shortStatement, projectsContainer, homeFooter];