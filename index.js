//test 1: shout(string) //

function shout(string) {
return string.toUpperCase();
}

//test 2: whisper(STRING) ..... not sure if upper case effects whether or not the string is returned to lowercase via string.toLowerCase() //

function whisper(STRING) {
    return STRING.toLowerCase();
}
//test 3: logShout(string) //

function logShout(string) {
    console.log(string.toUpperCase());
}

//test 4: logWhisper(STRING) ... I have now learned that string.toLowerCase is not effected by CAPSLOCK and would have worked regardless.. //

function logWhisper(string) {
    console.log(string.toLowerCase());
}

//test 5, 6 & 7: hi to headphones roommate string conversation . part one passed with: return "I can't hear you!" ... //

function sayHiToHeadphonedRoommate(string) {

if (string === string.toLowerCase()) {
    return "I can't hear you!";
}
else if (string === string.toUpperCase()) {
    return "YES INDEED!"
}
else if (string === "Let's have dinner together!") {
    return "I would love to!"
}
}

/*

failed attempts :(

    switch (string) {
    case string.toLowerCase:
        return "I can't hear you!";
    case string.toUpperCase:
        return "YES INDEED!";
    case "Let's have dinner together!":
        console.log("I would love to!")
    }

    console.log(string.toLowerCase());
    console.log(string.toUpperCase());
    
    console.log(string.toLowerCase === string.toUpperCase());
    */