function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let sliced = str.slice(0,20);
        return sliced + "...";
    }
    else {
        return str;
    }
}

alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!",20));