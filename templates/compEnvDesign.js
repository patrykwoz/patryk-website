// HERO CONTAINER

const compEnvDesignHeroHeading = document.createElement('div')
compEnvDesignHeroHeading.classList.add('hero-heading-container');
compEnvDesignHeroHeading.innerHTML = `
    <p class="hero-heading">Computational Environmental Design</p>
    <img class="hero-img-background" src="assets/comp_env_design/combination0042impactOnTheSite-original.jpg"></img>
`;

const compEnvDesignHeroCanvas = document.createElement('div')
compEnvDesignHeroCanvas.classList.add('canvas-container')
compEnvDesignHeroCanvas.innerHTML = `
    <canvas></canvas>
`;

// CONTENT CONTAINER

const compEnvDesignProjectContentContainer = document.createElement('div');
compEnvDesignProjectContentContainer.classList.add('project-content-container');

const compEnvDesignProjectHeader = document.createElement('div')
compEnvDesignProjectHeader.classList.add('project-content-header');
compEnvDesignProjectHeader.innerHTML=`
<p hidden>|</p>
<a hidden href="https://github.com/Adaptive-Artifacts">GitHub</a>
<p hidden>|</p>
`;


const compEnvDesignProjectContent = document.createElement('div');
compEnvDesignProjectContent.classList.add('project-content');

compEnvDesignProjectContent.innerHTML = `
<h2 class="project-content-heading">
A Journey Towards Sustainable and Efficient Built Environments.
</h2>
<p>
Venture into Computational Environmental Design (CED), where disciplines like computer
science, architecture, engineering, and material science blend. With computational tools
and methodologies, CED aims to create sustainable and efficient environments.
</p>

<p>
Computational Tools: These allow us to simulate, analyze, and visualize environmental
data and design possibilities. Tools like Ladybug and Computational Fluid Dynamics (CFD)
aid the design process by optimizing thermal comfort and energy efficiency.
</p>

<p>
Algorithmic Design & Math: This is the heart of the design process. Algorithms play a
crucial role in solving complex problems, shaping building performance, and ensuring
material efficiency
</p>

<p>
Complex Geometry: Computational design tools help manage complex geometries,
enabling intricate, responsive, and efficient designs.
</p>

<p>
Environmental Integration: Designs are tied to environmental factors. The goal is to create
energy-efficient environments in harmony with nature that promote human well-being.
</p>

<p>
Construction and Operation: CED also guides the construction and operation stages,
optimizing material and energy efficiency, and improving building performance.
</p>

<h3>My Skills:</h3>

<ul>
<li>Ladybug Tools, EnergyPlus, and OpenStudio</li>
<li>Python Programming and Machine Learning Libraries</li>
<li>Design Thinking</li>
<li>Workshop Facilitation</li>
<li>Lean and Circular Design Principles</li>
<li>Designing for DfMA and Disassembly</li>
<li>Urban Design</li>
</ul>

<div class="project-content-img">
    <img src="assets/comp_env_design/competitionModel.jpg" alt=""></img>
    <p class="project-content-caption">Physical model of the proposed design.</p>
</div>

<div class="project-content-img">
    <img src="assets/comp_env_design/arrayOfRoofGeometries.jpg" alt=""></img>
    <p class="project-content-caption">
    An array of roof geometries and their corresponding solar radiation
performance in kWh/m2, highlighting the power of architectural design in
harnessing the sun’s energy
    </p>
</div>

<div class="project-content-img">
    <img src="assets/comp_env_design/overhangAnimate.gif" alt=""></img>
    <p class="project-content-caption">
    Striking the Balance: This GIF showcases the asymptotic relationship between
overhang depth and solar heat gain. As the overhang deepens, the environmental benefit – reducing
heating load – initially increases significantly, but eventually plateaus, highlighting the law of
diminishing returns. The graphic underscores the need for optimizing the balance between structural
cost and environmental performance in sustainable architectural design.
    </p>
</div>

<div class="project-content-img">
    <img src="assets/comp_env_design/massing.jpg" alt=""></img>
    <p class="project-content-caption">Architectural rendering of the proposed design.</p>
</div>

<div class="project-content-img">
    <div class="image-group-two">
        <img src="assets/comp_env_design/solarRadiationBenefit.jpg" alt=""></img>
        <img hidden src="assets/comp_env_design/solarRadiationBenefitLegend.jpg" alt=""></img>
    </div>
    <p class="project-content-caption">
    Solar Radiation Benefit Study: Most of the building envelope is exposed to beneficial radiation. For areas
with high harmful radiation values, we proposed optimized shading elements.
    </p>
</div>




<div class="project-content-img">
    <div class="image-text-group-four">
        <div>
            <img src="assets/comp_env_design/helpfulSkydome.jpg" alt=""></img>
            <p class="project-content-caption">Helpful Sky Dome. 2783 Hours out of Total 4451 Sun Hours in the Year 63%.</p>
        </div>
        <div>
            <img src="assets/comp_env_design/harmfulSkydome.jpg" alt=""></img>
            <p class="project-content-caption">Harmful Sky Dome. 1650 Hours out of Total 4451 Sun Hours in the Year 37%.</p>
        </div>
        <div>
            <img src="assets/comp_env_design/eastFacadeExposureWithoutShadingElements.jpg" alt=""></img>
            <p class="project-content-caption">East façade exposure to the Harmful Sky without the shading elements.</p>
        </div>
        <div>
            <img src="assets/comp_env_design/eastFacadeExposureToHarmfulSky.jpg" alt=""></img>
            <p class="project-content-caption">East façade exposure to the Harmful Sky with the shading elements.</p>
        </div>

    </div>
</div>

<div class="project-content-img">
    <div class="image-group-two">
        <img src="assets/comp_env_design/directSunlightAvSpatial.jpg" alt=""></img>
        <img hidden src="assets/comp_env_design/spatialLegend.jpg" alt=""></img>
    </div>
    <p class="project-content-caption">
    Direct Sunlight Availability – Spatial Distribution: The availability of direct sunlight in the courtyard is plotted on the analysis surface.
    </p>
</div>

<div class="project-content-img">
    <img src="assets/comp_env_design/directSunlightAvTemporal.jpg" alt=""></img>
    <p class="project-content-caption">Direct Sunlight Availability – Temporal Distribution: The availability of direct sunlight in the courtyard is
    plotted on an hourly diagram.</p>
</div>

<div class="project-content-img">
    <img src="assets/comp_env_design/image.png" alt=""></img>
    <p class="project-content-caption">Unreal Engine Model.</p>
</div>

<div class="project-content-img">
    <img src="assets/comp_env_design/directSunExposureStudiesFreeze.jpg" alt=""></img>
    <p class="project-content-caption">Direct sun exposure studies: analytical surface positioned above the freeze.</p>
</div>

<div class="project-content-img">
    <img src="assets/comp_env_design/temporalDiagram4431.png" alt=""></img>
    <p class="project-content-caption">Temporal diagram representing the hours when the sun is up throughout the year in Ottawa,
    where the sun is visible for 4,431 hours annually. The diagrams below indicate the specific hours
    of the year when the bottom part of the frieze is directly hit by the sun.
    </p>
</div>

<div class="project-content-img">
    <img src="assets/comp_env_design/diagramRoofEveImpactDirectSun.jpg" alt=""></img>
    <p class="project-content-caption">Diagrams illustrating the impact of the roof eave on the direct sun exposure of the frieze. The upper diagrams
    represent the hours in the year when the bottom of the frieze is directly hit by the sun, denoted by 1 (for
    direct sun exposure) or 0 (for no direct sun exposure). The lower row of diagrams shows the percentage of
    the frieze that is directly hit by the sun, ranging from 0 to 100%, throughout the year.
    </p>
</div>




<div class="footer"></div>


`;

compEnvDesignProjectContentContainer.appendChild(compEnvDesignProjectHeader);
compEnvDesignProjectContentContainer.appendChild(compEnvDesignProjectContent);

const compEnvDesignHeroObjects = [compEnvDesignHeroHeading, compEnvDesignHeroCanvas];
const compEnvDesignContentObjects = [compEnvDesignProjectContentContainer];

templatesManager['comp-env-design-hero'] = compEnvDesignHeroObjects;
templatesManager['comp-env-design-content'] = compEnvDesignContentObjects;