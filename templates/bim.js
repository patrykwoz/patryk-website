// HERO CONTAINER

const bimHeroHeading = document.createElement('div')
bimHeroHeading.classList.add('hero-heading-container');
bimHeroHeading.innerHTML = `
    <p class="hero-heading">Building Information Modeling</p>
`;

const bimHeroCanvas = document.createElement('div')
bimHeroCanvas.classList.add('canvas-container')
bimHeroCanvas.innerHTML = `
    <canvas></canvas>
`;

// CONTENT CONTAINER

const bimProjectContentContainer = document.createElement('div');
bimProjectContentContainer.classList.add('project-content-container');

const bimProjectHeader = document.createElement('div')
bimProjectHeader.classList.add('project-content-header');
bimProjectHeader.innerHTML=`
<p hidden>|</p>
<a hidden href="">GitHub</a>
<p hidden>|</p>
`;


const bimProjectContent = document.createElement('div');
bimProjectContent.classList.add('project-content');

bimProjectContent.innerHTML = `
<h2 class="project-content-heading">
Advancing Design Technology:
Bridging BIM Expertise and Future-Ready Architectural Innovation.
</h2>
<p>
In the realm of design technology for built environments, my role as a BIM Specialist,
Consultant, and Manager presents a unique intersection of design, programming, and
management. Central to my work are the creation and management of Revit family libraries
and templates, scripting via Dynamo, and the development of algorithmic architectural
tools utilizing Python and Grasshopper. The task of optimizing and refining BIM workflows
as well as evaluating the quality of BIM content is a consistent and critical part of my
practice.
</p>

<p>
In my consulting capacity, I am responsible for interfacing with diverse design professionals,
ensuring computational methods are woven seamlessly into architectural processes.
Beyond this, my role encompasses training staff, showcasing my ability to distill complex
information into understandable, actionable instruction.
</p>

<p>
Throughout my portfolio, you’ll find a consistent thread of commitment to constant
learning and exploration of computational methods. This enables me to provide innovative
solutions to design challenges and push the boundaries of architectural forms and
processes. I maintain an ongoing relationship with the future, ensuring my projects aren’t
just relevant for today, but are ready to meet the demands of the architectural landscape
of tomorrow.
</p>

<h3>My Skills:</h3>

<ul>
<li>Architectural Design and Coordination</li>
<li>BIM Management</li>
<li>Algorithm Design</li>
<li>Revit, Dynamo</li>
<li>Rhino, Grasshopper</li>
<li>Python</li>
<li>R&D</li>
</ul>

<div class="project-content-img">
    <img src="assets/bim/MC-03-AS-Pers-01-Var2-Obj86_150dpiSMALL.jpg" alt=""></img>
    <img src="assets/bim/02jpg.jpg" alt=""></img>
    <img src="assets/bim/01jpg.jpg" alt=""></img>
    <p class="project-content-caption">Architectural Evolution in Images: The Merkur Campus Project. This triptych 
    reveals the transformative journey of the Merkur Campus project: from an architectural rendering showcasing its 
    aesthetic ambition, to a digital twin visualization depicting the convergence of virtual and physical realities, 
    to a structural model illuminating the complex’s intricate framework. Now standing as the headquarters of a renowned 
    Austrian insurance company in Graz – the capital of Styria, this architectural feat is marked by two commanding towers, 
    symbolizing a striking landmark at the city’s gateway. Inside, the interconnected ground floor unfolds into a dynamic hub 
    of activity, weaving together a restaurant, a lobby, and a fitness center. The Merkur Campus is not only an exemplar of 
    mixed-use design but also a testament to 
    Zechner & Zechner’s ingenuity, heralding the future of architectural landscapes. Image Credits: Zechner & Zechner, Isochrom.</p>
</div>

<div class="project-content-img">
    <img src="assets/bim/image.png" alt=""></img>
    <img src="assets/bim/04jpg.jpg" alt=""></img>
    <p class="project-content-caption">These two images paint a vivid portrayal of the Viertel Zwei Plus project: an architectural 
    3D visualization breathing life into the architectural concept, and a digital twin rendering capturing the intricacies of the 
    design. Nestled on the edge of Vienna’s vast Prater Park, this unique design breathes new life into one of the world’s oldest 
    harness racing tracks, the ‘Trabrennbahn Krieau’. The project, a collaboration with Mario Cuccinella Architects, is marked by 
    two distinct towers – ‘Weitblick’ and ‘Grünblick’. The ‘Weitblick’ tower, a bold 123m landmark, boasts an elliptical shape 
    housing restaurants, workspaces, conference rooms, hotel spaces, offices, and a rooftop bar. In contrast, the 
    rectangular ‘Grünblick’ stands 95m tall, predominantly accommodating residential units, and connects to the ‘Weitblick’ 
    through a mixed-use link spanning the first three floors. Image Credits: Mario Cuccinella Architects, Zechner & Zechner.</p>
</div>




<div class="footer"></div>


`;

bimProjectContentContainer.appendChild(bimProjectHeader);
bimProjectContentContainer.appendChild(bimProjectContent);

const bimHeroObjects = [bimHeroHeading, bimHeroCanvas];
const bimContentObjects = [bimProjectContentContainer];

templatesManager['bim-hero'] = bimHeroObjects;
templatesManager['bim-content'] = bimContentObjects;