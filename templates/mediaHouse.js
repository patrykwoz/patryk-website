// HERO CONTAINER

const mediaHouseHeroHeading = document.createElement('div')
mediaHouseHeroHeading.classList.add('hero-heading-container');
mediaHouseHeroHeading.innerHTML = `
    <p class="hero-heading">Media House</p>
`;

const mediaHouseHeroCanvas = document.createElement('div')
mediaHouseHeroCanvas.classList.add('canvas-container')
mediaHouseHeroCanvas.innerHTML = `
    <canvas></canvas>
`;

// CONTENT CONTAINER

const mediaHouseProjectContentContainer = document.createElement('div');
mediaHouseProjectContentContainer.classList.add('project-content-container');

const mediaHouseProjectHeader = document.createElement('div')
mediaHouseProjectHeader.classList.add('project-content-header');
mediaHouseProjectHeader.innerHTML=`
<p hidden>|</p>
<a hidden href="">GitHub</a>
<p hidden>|</p>
`;


const mediaHouseProjectContent = document.createElement('div');
mediaHouseProjectContent.classList.add('project-content');

mediaHouseProjectContent.innerHTML = `
<h2 class="project-content-heading">
TU Vienna Small Design Studio.
</h2>
<p>
An impromptu design project aimed at rethinking and redefining the modern library. The
design mixes algorithmic methods with analog tools.
</p>

<p>
The primary function of a library is to facilitate access to information. Today, this is
increasingly occurring by electronic means. One could then imagine a library building that
is made up of one slab (quite thin) for the staff and servers that is connected to the
vast, empty space calculated for anticipated number of users (a climatic shelter only
with comfortable reading, working, printing furniture). Such was the basic intention for
this design. One should, however, take into consideration another important aspect of the
library building, namely, its educational purpose. In this regard, the aim is to facilitate an
educator’s ability to awaken interests, to attract the educated one to the subject being
explained.
</p>

<p>
As a result, this simple entity constituted from a slab and an open space had to grow. The
program was expanded by adding spaces for activities that were relevant in the context
of a local library and that could attract people visiting a nearby mall (city wide audience).
Spaces for reading and accessing data remained the centralizing theme of the building
giving it a specific character.
</p>

<p>
In a growing ensemble of activities, communication between the spaces started to
become an issue. In order to clarify it and stimulate engagement, a concept of transparency
was implemented: participants of one activity can see participants of the adjacent and
sometimes also more distant ones, and users circulate through various activity spaces
(corridors are eliminated). The vertical slabs, serving as main structural elements, are
intended to distribute vertical circulation of users. Librarians’ offices are also located
within the slabs. Finally, the overall transparency creates screens through which performed
activities are augmented, thus complimenting and completing communication between
different spaces.
</p>

<h3>My Skills:</h3>

<ul>
<li>Architectural Design</li>
<li>Algorithmic Thinking</li>
<li>Spatial Programming</li>
<li>Urban Design</li>
<li>Design Thinking</li>
<li>Social Logic of Space</li>
<li>Topology Optimization (Spatial Graphs)</li>
</ul>

<div class="project-content-img">
    <img src="assets/media_house/pierwszaStronaDuze02powt250.jpg" alt=""></img>
    <p class="project-content-caption">
    Architectural Rendering.
    </p>
</div>


<div class="project-content-img">
    <img src="assets/media_house/mebelkiFINALzm.jpg" alt=""></img>
    <p class="project-content-caption">
    Arrangement of openings, rooms and furniture supported through variable transparencies results in a high number of possible interaction patterns between users and the building
    </p>
</div>

<div class="project-content-img">
    <img src="assets/media_house/entire_house_hiddenliines.jpg" alt=""></img>
    <p class="project-content-caption">
    Proposed type is a complex topological entity inviting people to explore and play with it.
    </p>
</div>


<div class="project-content-img">
    <div class="image-group-two-row">
        <img src="assets/media_house/slabs_hidden_liness.jpg" alt=""></img>
        <img src="assets/media_house/slabs_interior.jpg" alt=""></img>
    </div>
    <p class="project-content-caption">
    Slabs connecting stripes and hosting
    <span style="font-weight:600;">librarian offices</span>,
    <span style="font-weight:600; color:grey;">servers</span>,
    <span style="font-weight:600; color:darkgrey">service areas</span>.
    </p>
</div>

<div class="project-content-img">
    <div class="image-group-three-stacked">
        <img src="assets/media_house/exploded_color_2.jpg" alt=""></img>
        <img src="assets/media_house/exploded_color_1.jpg" alt=""></img>
        <img src="assets/media_house/exploded_color_0.jpg" alt=""></img>
    </div>
    <p class="project-content-caption">
    Activities grouped in stripes:
    <span style="font-weight:600;">sports</span>,
    <span style="font-weight:600; color:grey;">education</span>,
    <span style="font-weight:600; color:grey;">libraries</span>,
    <span style="font-weight:600; color:grey;">attractors</span>,
    <span style="font-weight:600; color:darkgrey">exhibitions</span>.
    </p>
</div>



<div class="footer"></div>


`;

mediaHouseProjectContentContainer.appendChild(mediaHouseProjectHeader);
mediaHouseProjectContentContainer.appendChild(mediaHouseProjectContent);

const mediaHouseHeroObjects = [mediaHouseHeroHeading, mediaHouseHeroCanvas];
const mediaHouseContentObjects = [mediaHouseProjectContentContainer];

templatesManager['media-house-hero'] = mediaHouseHeroObjects;
templatesManager['media-house-content'] = mediaHouseContentObjects;