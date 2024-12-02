// Data Object
const data = {
    title: "Welcome to CS3210 Template Engine Lab",
    content: "This is a simple template engine demonstration.",
    author: "Dr. Red",
};

// Function to replace placeholders with actual data
function renderTemplate(template, data) {
    for (const key in data) {
        const regex = new RegExp('{{' + key + '}}', 'g');
        template = template.replace(regex, data[key]);
    }
    return template;
}

// Template String
const template = `
    <h3>{{title}}</h3>
    <p>{{content}}</p>
    <p>Author: {{author}}</p>
`;

// Render Template and Update #app Content
// const app = document.getElementById('app');
// app.innerHTML = renderTemplate(template, data);
