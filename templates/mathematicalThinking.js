//?content=mathematical-thinking

// REFERENCE CONTAINER

const mathematicalThinkingReference = document.createElement('div')
mathematicalThinkingReference.classList.add('reference-container');
mathematicalThinkingReference.innerHTML = `
    <div class="reference-content">
        <p class="reference-quote">'If the universe hands you a hard problem,
            try to solve an easier one instead, and hope the simple version is close enough to the
            original problem that the universe doesn't object.'</p>
        <p class="reference-citation">
            Jordan Ellenberg, "How Not to Be Wrong: The Power of Mathematical Thinking", p. 35
        </p>
    </div>
`;

const mathematicalThinkingObjects = [mathematicalThinkingReference]

templatesManager['mathematical-thinking-reference'] = mathematicalThinkingObjects;