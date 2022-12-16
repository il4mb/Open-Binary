window.addEventListener('load', () => {

    let content = DOM("div", {
        attr : {class: "container bg-danger"},
        inner: [

            DOM("h1", {
                attr: {class: "text-center text-white"},
                inner: "BINARY CALCULATOR"
            })
        ]
    });

    loadStyle("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");

    document.body.prepend(content);
})

function loadStyle(link) {

    document.head.appendChild(DOM("link", {attr : {rel: "stylesheet", href: link}}));
}