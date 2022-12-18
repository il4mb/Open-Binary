const AppName = "OPEN BINARY";

var monitor;

window.addEventListener('load', () => {

    loadStyle("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");

    let navbar = DOM("nav", {
        attr: { class: "navbar navbar-expand-lg bg-light" },
        inner: DOM("div", {
            attr: { class: "container" },
            inner: [
                DOM("a", {
                    attr: { class: "navbar-brand", href: "#" },
                    todo: e => {

                        e.addEventListener('click', () => window.location.reload());
                    },
                    inner: DOM("img", {
                        attr: { src: "https://img.shields.io/badge/OPEN-BINARY-red?style=for-the-badge&&logoColor=black&labelColor=blue" }
                    })
                })
            ]
        })
    });

    let content = DOM("div", {
        attr: { class: "container-sm" },
        inner: [

            DOM("h1", {
                attr: { class: "text-center text-danger" },
                inner: "OPEN BINARY"
            }),

            DOM("p", {
                attr: { class: "text-center" },
                inner: "Open Binary has a simple code to add and subtract binary numbers"
            }),

            DOM("div", {
                attr: { class: "calculator" },
                inner: [
                    DOM("h4", {
                        attr : {class: "text-center text-danger"},
                        inner: "BINARY CALCULATOR"
                    }),
                    DOM("input", {
                        attr: { class: "screen", onblur: "this.focus()", autofocus: true },
                        todo: E => {

                            let allowed = ['0', '1', '-', '+', "="];
                            current = E.value;

                            E.addEventListener("input", event => {

                                if (event.data == null)
                                    event.data = '<';
                                else
                                    E.value = E.value.substr(0, E.value.length - 1);

                                if (allowed.includes(event.data))
                                    numpad(event.data);
                            });

                            E.addEventListener("keypress", event => {

                                event.preventDefault();

                                if (event.key == "Enter")
                                    numpad("=");

                                if (allowed.includes(event.key))
                                    numpad(event.key);
                            });
                        }
                    }),

                    DOM("div", {
                        attr: { class: "monitor" },
                        todo: E => { monitor = E; }
                    }),

                    DOM("div", {
                        attr: { class: "pad" },
                        todo: E => {

                            let table = DOM("table"),
                                num = [0, 1, '<', '-', '+', '='];

                            table.appendChild(DOM("tr"));
                            num.forEach(_E => {

                                let tr = table.querySelectorAll("tr");
                                tr = tr[tr.length - 1];

                                tr.appendChild(DOM("td", {
                                    attr: { dataValue: _E },
                                    inner: String(_E),
                                    todo: e => e.addEventListener("click", () => numpad(_E))
                                }));

                                if (_E == "<") {

                                    table.appendChild(DOM("tr"));
                                }

                            })

                            E.prepend(table)
                        }
                    })
                ]
            }),

            DOM("div", {
                attr : {style: "padding-top: 5rem; max-width: 800px; margin: 0 auto;"},
                inner: [

                    DOM('p', {
                        inner : "This code is <a href='https://github.com/ilh4mb/Open-Binary'><img src='https://img.shields.io/badge/OPEN-source-26beff?style=flat-square&logo=github&logoColor=white'/></a>"
                    }),
                    DOM('p', {
                        inner : [
                            DOM("img", {
                                attr: {class: "me-2", src: "https://img.shields.io/github/issues/ilh4mb/open-binary"}
                            }),
                            DOM("img", {
                                attr: {class: "me-2", src: "https://img.shields.io/github/checks-status/ilh4mb/open-binary/master"}
                            }),
                            DOM("img", {
                                attr: {class: "me-2", src: "https://img.shields.io/github/languages/code-size/ilh4mb/open-binary"}
                            }),
                            DOM("img", {
                                attr: {class: "me-2", src: "https://img.shields.io/github/license/ilh4mb/open-binary"}
                            }),
                            DOM("img", {
                                attr: {class: "me-2", src: "https://img.shields.io/github/languages/count/ilh4mb/open-binary"}
                            }),
                        ]
                    }),
                    DOM('p', {
                        inner : "<i>Copyright by ilhamB 2022</i>"
                    })

                ]
            })
        ]
    });

    document.body.prepend(navbar, content);

    print("WELCOME");
});

var isFinal = false;
function numpad(dataValue) {

    let screen = document.querySelectorAll(".screen");

    screen = screen[0];

    if (dataValue == "<") {

        screen.value = screen.value.substr(0, screen.value.length - 1);
        return;
    }

    if (dataValue == "=") {

        let values = [];

        if (screen.value.includes("+")) {

            values = screen.value.split("+").filter(n => n);
        } else if (screen.value.includes("-")) {

            values = screen.value.split("-").filter(n => n);
        } else {

            print("Error");
            return;
        }

        if (screen.value.length <= 0) {

            print("Error");
            return;
        }

        if (values.length == 2) {
            isFinal = true;

            binary = new Biner(values[0]);

            if (screen.value.includes("+")) {

                binary.sumWith(values[1]);
            } else if (screen.value.includes("-")) {

                binary.subWith(values[1]);
            }

            print("Success");

            screen.value = binary.value;
            return;
        }
        else {
            print("No value");
            return;
        }
    }

    if (dataValue == "+" || dataValue == "-") {
        if (screen.value.includes("+") || screen.value.includes("-")) {
            print("Error");
            return;
        }

        if (screen.value.length <= 0) {
            print("Value Empty");
            return;
        }

    }

    if (isFinal == true) {
        screen.value = "";
        isFinal = false;
    }

    screen.value += dataValue;

}

function print(txt) {

    monitor.innerHTML = null;

    let text = DOM("span", { inner: txt });

    monitor.appendChild(text);

    setTimeout(() => {

        text.classList.add("close");
        setTimeout(text.remove(), 500);
    }, 2000)
}

function loadStyle(link) {

    document.head.appendChild(DOM("link", { attr: { rel: "stylesheet", href: link } }));
}

function isNumeric(str) {

    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}