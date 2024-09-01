function absolution() {
    for (const e of document.getElementsByClassName("abspos")) {
        console.log(`found element ${JSON.stringify(e.classList)}`);
        var top = NaN;
        var left = NaN;
        var width = undefined;
        var rotate = NaN;
        var fontSize = NaN;

        for (const c of e.classList) {
            if (c.startsWith("top")) {
                top = Number(c.substring(3));
            }

            if (c.startsWith("left")) {
                left = Number(c.substring(4));
            }

            if (c.startsWith("width")) {
                width = c.substring(5);
            }

            if (c.startsWith("rotate")) {
                rotate = c.substring(6);
            }

            if (c.startsWith("fontSize")) {
                fontSize = c.substring(8);
            }
        }

        e.style.position = "absolute";

        if (top === top) {
            console.log(`found top ${top}`);
            e.style.top = `${top}px`;
        }

        if (left === left) {
            console.log(`found left ${left}`);
            e.style.left = `${left}px`;
        }

        if (width) {
            console.log(`found width ${width}`);
            e.style.width = `${width}`;
        }

        if (rotate == rotate) {
            console.log(`found rotate ${rotate}`);
            e.style.transform = `rotate(${rotate}deg)`;
        }

        if (fontSize == fontSize) {
            console.log(`found fontSize ${fontSize}`);
            e.style.fontSize = `${fontSize}`;
        }

        e.onclick = (event) => {
            let left = e.style.left;
            let top = e.style.top;
            let combined = `${left},${top}`;
            let newvalue = window.prompt("Set left,top", combined);
            if (newvalue) {
                let parts = newvalue.split(",");
                e.style.left = parts[0];
                e.style.top = parts[1];
            }
        };
    }
}