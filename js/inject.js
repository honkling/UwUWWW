const storage = (navigator.userAgent.includes("Firefox") ? browser : chrome).storage.sync;

function uwuify(text) {
    const uwuified = text
        .replace(/\./gi, "~ ")
        .replace(/, /gi, "~ ")
        .replace(/- /gi, "~ ")
        .replace(/\? /gi, "~ ")
        .replace(/hurt/gi, "hUWUrt")
        .replace(/kill/gi, "hwuwrt")
        .replace(/you/gi, "you<3")
        .replace(/r/gi, "w")
        .replace(/l/gi, "w")
        .replace(/uwu/gi, "UWU")
        .replace(/owo/gi, "OWO")
        .replace(/;-;/gi, "(-_-)")
        .replace(/-_-/gi, "(-_-)")
        .replace(/:o/gi, "※(^o^)/※")
        .replace(/:0/gi, "※(^o^)/※")
        .replace(/:\)/gi, "(｡◕‿‿◕｡)")
        .replace(/:>/gi, "(｡◕‿‿◕｡)")
        .replace(/:\(/gi, "(︶︹︶)")
        .replace(/:</gi, "(︶︹︶)")
        .replace(/:3/gi, "(・3・)")
        .replace(/:D/gi, "(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧")
        .replace(/\._\./gi, "(っ´ω`c)")
        .replace(/fuck/gi, "fwick")
        .replace(/shit/gi, "*poops*")
        .replace(/wtf/gi, "whawt the fwick")
        .replace(/wth/gi, "whawt the hecc");

    switch (Math.ceil(Math.random() * 20)) {
        case 1:
            return uwuified + "~ uwu *nuzzles you*";
        case 2:
            return uwuified + "~ owo whats this";
        case 3:
            return uwuified + "~ *kisses you*";
        case 4:
            return uwuified + "~ *blushes*";
        case 5:
            return uwuified + "~ *hehe*";
        case 6:
            return uwuified + "~ meow";
        case 7:
            return uwuified + "~ owo";
        case 8:
            return uwuified + "~ uwu";
        case 9:
            return uwuified + " ;3";
        default:
            return uwuified + "~";
    }
}

const changedNodes = [];

function recurse(node) {
    if (!changedNodes.includes(node) &&
        node !== document.body &&
        node.nodeValue !== null &&
        node.nodeValue.trim() !== ""
    ) {
        node.nodeValue = uwuify(node.nodeValue);
        console.log(node.nodeValue);
        changedNodes.push(node);
    }

    node.childNodes.forEach(recurse);
}

storage.get({
    uwuify: false
}, ({ uwuify }) => {
    setInterval(() => {
        if (uwuify)
            recurse(document.body);
    }, 100);
});
