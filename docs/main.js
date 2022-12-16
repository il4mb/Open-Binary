const AppName = "OPEN BINARY";

window.addEventListener('load', () => {

    loadStyle("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");

    let navbar = DOM("nav", {
        attr : {class: "navbar navbar-expand-lg bg-light"},
        inner: DOM("div", {
            attr : {class: "container"},
            inner: [
                DOM("a", {
                    attr : {class: "navbar-brand", href: "#"},
                    todo: e => {

                        e.addEventListener('click', () => window.location.reload() );
                    },
                    inner: DOM("img", {
                        attr : {src: "https://img.shields.io/badge/OPEN-BINARY-red?style=for-the-badge&&logoColor=black&labelColor=blue"}
                    })
                })
            ]
        })
    });

    let content = DOM("div", {
        attr : {class: "container"},
        inner: [

            DOM("h1", {
                attr: {class: "text-center text-danger"},
                inner: "BINARY CALCULATOR"
            }),

            DOM("div", {
                attr : {class: "calculator"},
                inner: [
                    DOM("input", {
                        attr : {class: "screen"}
                    }),

                    DOM("div", {
                        attr : {class: "pad"},
                        todo: E => {

                            let pad = [1, 0],
                                table = DOM("table");


                            pad.forEach( _E => {

                                if(_E%3 == 0) {

                                    let tr = table.querySelectorAll("tr");
                                    tr = tr[ tr.length -1]

                                    tr.appendChild(DOM("td", {
                                        inner: String(_E)
                                    }));

                                    table.appendChild(DOM("tr"));

                                } else {

                                    let tr = table.querySelectorAll("tr");
                                    tr = tr[ tr.length -1];

                                    if(tr == null || tr == undefined) {
                                        tr = DOM("tr");
                                        table.appendChild(tr);
                                    }

                                    tr.appendChild(DOM("td", {
                                        inner: String(_E)
                                    }));


                                }
                                

                            })

                            E.prepend(table)

                        }
                    })
                ]
            })
        ]
    });

    document.body.prepend(navbar, content);
});

function loadStyle(link) {

    document.head.appendChild(DOM("link", {attr : {rel: "stylesheet", href: link}}));
}