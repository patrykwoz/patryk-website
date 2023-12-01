// HERO CONTAINER

const digitalFabricationHeroHeading = document.createElement('div')
digitalFabricationHeroHeading.classList.add('hero-heading-container');
digitalFabricationHeroHeading.innerHTML = `
    <p class="hero-heading">Digital Fabrication</p>
`;

const digitalFabricationHeroCanvas = document.createElement('div')
digitalFabricationHeroCanvas.classList.add('canvas-container')
digitalFabricationHeroCanvas.innerHTML = `
    <canvas></canvas>
`;

// CONTENT CONTAINER

const digitalFabricationProjectContentContainer = document.createElement('div');
digitalFabricationProjectContentContainer.classList.add('project-content-container');

const digitalFabricationProjectHeader = document.createElement('div')
digitalFabricationProjectHeader.classList.add('project-content-header');
digitalFabricationProjectHeader.innerHTML=`
<p hidden>|</p>
<a hidden href="">GitHub</a>
<p hidden>|</p>
`;


const digitalFabricationProjectContent = document.createElement('div');
digitalFabricationProjectContent.classList.add('project-content');

digitalFabricationProjectContent.innerHTML = `
<h2 class="project-content-heading">
Digital Fabrication Meets Architecture: A Journey through Material Science and Computational Design.
</h2>
<p>
Under the expert guidance of project advisor Florian Rist at the TU Vienna Digital Production Module,
I embarked on an exploration at the intersection of computational design and material science during
the winter semester of 2013/2014.
</p>

<p>
The mission was to design an architectural pavilion model, but with a twist.
This was not a mere static representation; it was to be constructed with a system of custom-designed click-in elements.
To accomplish this, I utilized a toolkit that included Rhino/Gh, Python, G-Code, and CNC-Milling virtualization freeware.
</p>

<p>
The conception of the click-in system was deeply tied to the material chosen for this artifact.
The material’s inherent properties — its ability to flex given the right thickness
and its relative rigidity — laid the groundwork for the implementation of a simple but effective connection mechanism: twist, insert, release.
</p>

<p>
As the project progressed, the method unveiled an unexpected feature. 
It allowed for the introduction of pre-stress into the entire structure by subtly adjusting the lengths of specific vertical elements. 
This pre-stress endowed 
the whole structure with rigidity, secured the interconnected elements in place, and enabled them to maintain the intended design shape.
</p>

<p>
From the initial birth of the simple architectural pavilion to the intricate scripting of the g-code for machine interaction, 
every step was orchestrated using a Python plug-in for Grasshopper. The brilliance of this approach lay in its scalability. 
The algorithm, employed for this prototype, 
can be readily adapted to manufacture more sophisticated and asymmetrical geometries, promising a wealth of design potential.
</p>

<p>
Ultimately, this project served as an investigation into the transformative power of digital fabrication strategies in 
the realm of architectural design, offering a fresh lens to manipulate material properties and craft distinctive architectural forms.
</p>

<h3>My Skills:</h3>

<ul>
<li>Design for Digital Fabrication</li>
<li>Material Science</li>
<li>Python Programming</li>
<li>G-Code</li>

</ul>

<div class="project-content-img">
    <img src="assets/digital_fabrication/IMG_9178.jpg" alt=""></img>
    <p class="project-content-caption">Connection detail of the click-in system.</p>
</div>

<div class="project-content-img">
    <img src="assets/digital_fabrication/readyLasering-cropped.jpg" alt=""></img>
    <p class="project-content-caption">Scripting click-in elements onto any input surface.</p>
</div>

<div class="project-content-img">
    <img src="assets/digital_fabrication/categoriesElements.jpg" alt=""></img>
    <p class="project-content-caption">There are three categories of elements (bottom, middle, top elements
        of the structure); angle of their side arms is adjusted to match the
        position of arms of the adjacent elements; length and width of
        elements is set according to the length of the vector upon which they
        are constructed.
        </p>
</div>

<div class="project-content-img">
    <img src="assets/digital_fabrication/handPacked.png" alt=""></img>
    <p class="project-content-caption">Machining simulation.</p>
</div>


<div class="project-content-img">
    <img src="assets/digital_fabrication/IMG_9165.jpg" alt=""></img>
    <p class="project-content-caption">Model of an architectural pavilion assembled from click-in elements, prototype.</p>
</div>

<div class="footer"></div>


`;

digitalFabricationProjectContentContainer.appendChild(digitalFabricationProjectHeader);
digitalFabricationProjectContentContainer.appendChild(digitalFabricationProjectContent);

const digitalFabricationHeroObjects = [digitalFabricationHeroHeading, digitalFabricationHeroCanvas];
const digitalFabricationContentObjects = [digitalFabricationProjectContentContainer];

templatesManager['digital-fabrication-hero'] = digitalFabricationHeroObjects;
templatesManager['digital-fabrication-content'] = digitalFabricationContentObjects;