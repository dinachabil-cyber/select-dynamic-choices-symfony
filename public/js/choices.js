
const choicesData = [
    {
        id: 1,
        title: "dina 1",
        children: [
            {
                id: 11,
                title: "Choix 1.1",
                children: [
                    { id: 111, title: "Option 1.1.1" },
                    { id: 112, title: "Option 1.1.2" },
                    { id: 113, title: "Option 1.1.3" },
                    { id: 114, title: "Option 1.1.4" }
                ]
            },
            {
                id: 12,
                title: "Choix 1.2",
                children: [
                    { id: 121, title: "Option 1.2.1" },
                    { id: 122, title: "Option 1.2.2" },
                    { id: 123, title: "Option 1.2.3" },
                    { id: 124, title: "Option 1.2.4" }
                ]
            },
            {
                id: 13,
                title: "Choix 1.3",
                children: [
                    { id: 131, title: "Option 1.3.1" },
                    { id: 132, title: "Option 1.3.2" },
                    { id: 133, title: "Option 1.3.3" },
                    { id: 134, title: "Option 1.3.4" }
                ]
            },
            {
                id: 14,
                title: "Choix 1.4",
                children: [
                    { id: 141, title: "Option 1.4.1" },
                    { id: 142, title: "Option 1.4.2" },
                    { id: 143, title: "Option 1.4.3" },
                    { id: 144, title: "Option 1.4.4" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "dina 2",
        children: [
            {
                id: 21,
                title: "Choix 2.1",
                children: [
                    { id: 211, title: "Option 2.1.1" },
                    { id: 212, title: "Option 2.1.2" },
                    { id: 213, title: "Option 2.1.3" },
                    { id: 214, title: "Option 2.1.4" }
                ]
            },
            {
                id: 22,
                title: "Choix 2.2",
                children: [
                    { id: 221, title: "Option 2.2.1" },
                    { id: 222, title: "Option 2.2.2" },
                    { id: 223, title: "Option 2.2.3" },
                    { id: 224, title: "Option 2.2.4" }
                ]
            },
            {
                id: 23,
                title: "Choix 2.3",
                children: [
                    { id: 231, title: "Option 2.3.1" },
                    { id: 232, title: "Option 2.3.2" },
                    { id: 233, title: "Option 2.3.3" },
                    { id: 234, title: "Option 2.3.4" }
                ]
            },
            {
                id: 24,
                title: "Choix 2.4",
                children: [
                    { id: 241, title: "Option 2.4.1" },
                    { id: 242, title: "Option 2.4.2" },
                    { id: 243, title: "Option 2.4.3" },
                    { id: 244, title: "Option 2.4.4" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "dina 3",
        children: [
            {
                id: 31,
                title: "Choix 3.1",
                children: [
                    { id: 311, title: "Option 3.1.1" },
                    { id: 312, title: "Option 3.1.2" },
                    { id: 313, title: "Option 3.1.3" },
                    { id: 314, title: "Option 3.1.4" }
                ]
            },
            {
                id: 32,
                title: "Choix 3.2",
                children: [
                    { id: 321, title: "Option 3.2.1" },
                    { id: 322, title: "Option 3.2.2" },
                    { id: 323, title: "Option 3.2.3" },
                    { id: 324, title: "Option 3.2.4" }
                ]
            },
            {
                id: 33,
                title: "Choix 3.3",
                children: [
                    { id: 331, title: "Option 3.3.1" },
                    { id: 332, title: "Option 3.3.2" },
                    { id: 333, title: "Option 3.3.3" },
                    { id: 334, title: "Option 3.3.4" }
                ]
            },
            {
                id: 34,
                title: "Choix 3.4",
                children: [
                    { id: 341, title: "Option 3.4.1" },
                    { id: 342, title: "Option 3.4.2" },
                    { id: 343, title: "Option 3.4.3" },
                    { id: 344, title: "Option 3.4.4" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "dina 4",
        children: [
            {
                id: 41,
                title: "Choix 4.1",
                children: [
                    { id: 411, title: "Option 4.1.1" },
                    { id: 412, title: "Option 4.1.2" },
                    { id: 413, title: "Option 4.1.3" },
                    { id: 414, title: "Option 4.1.4" }
                ]
            },
            {
                id: 42,
                title: "Choix 4.2",
                children: [
                    { id: 421, title: "Option 4.2.1" },
                    { id: 422, title: "Option 4.2.2" },
                    { id: 423, title: "Option 4.2.3" },
                    { id: 424, title: "Option 4.2.4" }
                ]
            },
            {
                id: 43,
                title: "Choix 4.3",
                children: [
                    { id: 431, title: "Option 4.3.1" },
                    { id: 432, title: "Option 4.3.2" },
                    { id: 433, title: "Option 4.3.3" },
                    { id: 434, title: "Option 4.3.4" }
                ]
            },
            {
                id: 44,
                title: "Choix 4.4",
                children: [
                    { id: 441, title: "Option 4.4.1" },
                    { id: 442, title: "Option 4.4.2" },
                    { id: 443, title: "Option 4.4.3" },
                    { id: 444, title: "Option 4.4.4" }
                ]
            }
        ]
    }
];

const choicesContainer = document.getElementById("choices");
const sectionTitle = document.getElementById("sectionTitle");
const choiceCount = document.getElementById("choiceCount");
const breadcrumb = document.getElementById("breadcrumb");
const homeButton = document.getElementById("homeButton");

let currentChoices = choicesData;
let navigationHistory = [];

function renderChoices(choices, title) {
    currentChoices = choices;

    sectionTitle.textContent = title;
    choiceCount.textContent = `${choices.length} choix`;

    choicesContainer.innerHTML = "";

    choices.forEach((choice) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "choice-card";

        const hasChildren = Array.isArray(choice.children) && choice.children.length > 0;

        card.innerHTML = `
            <span class="choice-number">${choice.id}</span>
            <span class="choice-title">${choice.title}</span>
            <span class="choice-arrow">${hasChildren ? "→" : "✓"}</span>
        `;

        card.addEventListener("click", () => {
            if (hasChildren) {
                navigationHistory.push({
                    choices: currentChoices,
                    title: sectionTitle.textContent
                });

                renderChoices(choice.children, choice.title);
                updateBreadcrumb();
            } else {
                sectionTitle.textContent = choice.title;
                choiceCount.textContent = "Option sélectionnée";
                choicesContainer.innerHTML = `
                    <div class="selected-message">
                        <h3>${choice.title}</h3>
                        <p>Vous avez sélectionné cette option.</p>
                    </div>
                `;
            }
        });

        choicesContainer.appendChild(card);
    });
}

function updateBreadcrumb() {
    breadcrumb.innerHTML = "";

    const home = document.createElement("button");
    home.type = "button";
    home.textContent = "Accueil";
    home.addEventListener("click", goHome);
    breadcrumb.appendChild(home);

    navigationHistory.forEach((item, index) => {
        const separator = document.createElement("span");
        separator.textContent = " / ";
        breadcrumb.appendChild(separator);

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = item.title;
        button.addEventListener("click", () => goToLevel(index));
        breadcrumb.appendChild(button);
    });
}

function goToLevel(index) {
    const target = navigationHistory[index];

    navigationHistory = navigationHistory.slice(0, index);

    renderChoices(target.choices, target.title);
    updateBreadcrumb();
}

function goHome() {
    navigationHistory = [];
    renderChoices(choicesData, "Choisissez une catégorie");
    updateBreadcrumb();
}

homeButton.addEventListener("click", goHome);

renderChoices(choicesData, "Choisissez une catégorie");
