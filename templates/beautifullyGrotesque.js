// HERO CONTAINER

const beautifullyGrotesqueHeroHeading = document.createElement('div')
beautifullyGrotesqueHeroHeading.classList.add('hero-heading-container');
beautifullyGrotesqueHeroHeading.innerHTML = `
    <p class="hero-heading">Beautifully Grotesque</p>
`;

const beautifullyGrotesqueHeroCanvas = document.createElement('div')
beautifullyGrotesqueHeroCanvas.classList.add('canvas-container')
beautifullyGrotesqueHeroCanvas.innerHTML = `
    <canvas></canvas>
`;

// CONTENT CONTAINER

const beautifullyGrotesqueProjectContentContainer = document.createElement('div');
beautifullyGrotesqueProjectContentContainer.classList.add('project-content-container');

const beautifullyGrotesqueProjectHeader = document.createElement('div')
beautifullyGrotesqueProjectHeader.classList.add('project-content-header');
beautifullyGrotesqueProjectHeader.innerHTML=`
<p hidden>|</p>
<a hidden href="">GitHub</a>
<p hidden>|</p>
`;


const beautifullyGrotesqueProjectContent = document.createElement('div');
beautifullyGrotesqueProjectContent.classList.add('project-content');

beautifullyGrotesqueProjectContent.innerHTML = `
<h2 class="project-content-heading">
A Journey from Basic Mesh to Emotive Installation.
</h2>

<p>
In the frigid embrace of winter 2015, at the TU Vienna Small Design Studio, under the seasoned mentorship of Christoph Müller 
and Michael Hansmeyer, we embarked on an ambitious journey: a mission to stir human emotion through the fusion of space and computational design.
</p>

<p>
Our canvas of choice was an architectural artifact resonating with history – the Vienna Secession Building. 
Our goal? To conceive a temporal artistic installation that could shift perceptions and ignite a sensory dialogue with its observers.
</p>

<p>
Our approach was rooted in a technique of generative design—employing procedural operations on a 3D mesh. 
The language we chose was the Processing sketch, a potent tool when it comes to harmonizing the visual arts with the realm of code.
</p>

<p>
Starting with a basic mesh, we manipulated it using control points to alter its structure. 
This basic mesh was then subdivided, with careful control maintained at each step of the process. The digital tools at our disposal? 
The comprehensive 3D modelling capabilities of 3ds Max for rendering and Processing 3D for generating the digital artifact.
</p>

<p>
Our aim was nothing short of a sensory revolution. By extracting and assembling contrasting elements 
from the various layers of the Vienna Secession Building, we created an installation that was not only symbolic but profoundly impactful, 
both topologically 
and geometrically. This strategy accentuated tactile and visual contradictions, offering observers a qualitatively fresh sensory input.
</p>

<p>
In essence, this project serves as a testament to the power of integrating computational design with traditional architecture. 
It illustrates how digital methodologies can evoke emotional resonance and extend the boundaries of spatial organization. 
This blending of the ethereal 
world of human emotions with the tangible realm of spatial design signals a thrilling new frontier in the ever-evolving field of architecture.
</p>

<h3>My Skills:</h3>

<ul>
<li>Algorithm Design</li>
<li>Mesh Optimization</li>
<li>Computational Geometry</li>
<li>Architectural Design</li>
<li>Algorithmic Thinking</li>
<li>Design Thinking</li>
</ul>

<div class="project-content-img">
    <img src="assets/beautifully_grotesque/bg_theproduct_algorithm.jpg" alt=""></img>
    <p class="project-content-caption">By applying simple operations on a primitive mesh via algorithmic techniques, 
    we’ve evolved a basic cube into an intricate product, vividly illustrating the expansive realm of design possibilities.</p>
</div>

<div class="project-content-img">
    <img src="assets/beautifully_grotesque/bg_design_space_exploration.jpg" alt=""></img>
    <p class="project-content-caption">Voyage through Design Space: A vibrant array of serendipitously selected outputs, 
    showcasing the breadth of our creative exploration.</p>
</div>

<div class="project-content-img">
    <img src="assets/beautifully_grotesque/1228039-wozniczka_patryk_end_4.jpg" alt=""></img>
    <p class="project-content-caption">Crossing Dimensions: A revealing cross-section through the artifact, 
    providing a unique window into its complex three-dimensional core.</p>
</div>

<div class="project-content-img">
    <img src="assets/beautifully_grotesque/1228039-wozniczka_patryk_end_3.jpg" alt=""></img>
    <p class="project-content-caption">A Perspective from Above: While the direct vantage point remains elusive to the onlooker, 
    this zenith view unveils a labyrinth of meticulously crafted layers. 
    Viewed from beneath, the sophisticated tapestry unfurls an engaging neural symphony, sparking a realm of wonder and curiosity.</p>
</div>

<div class="project-content-img">
    <img src="assets/beautifully_grotesque/batman in da haus.jpg" alt=""></img>
    <p class="project-content-caption">From Below, A Twist of Whimsy: Captured from a lower vantage point, 
    the artifact’s complex form takes on a playful character with the addition of a Batman silhouette. 
    This visual jest underscores the installation’s ability to tap into the realm of imagination, stimulating a lively dance of neural activity.</p>
</div>


<div class="footer"></div>


`;

beautifullyGrotesqueProjectContentContainer.appendChild(beautifullyGrotesqueProjectHeader);
beautifullyGrotesqueProjectContentContainer.appendChild(beautifullyGrotesqueProjectContent);

const beautifullyGrotesqueHeroObjects = [beautifullyGrotesqueHeroHeading, beautifullyGrotesqueHeroCanvas];
const beautifullyGrotesqueContentObjects = [beautifullyGrotesqueProjectContentContainer];

templatesManager['beautifully-grotesque-hero'] = beautifullyGrotesqueHeroObjects;
templatesManager['beautifully-grotesque-content'] = beautifullyGrotesqueContentObjects;