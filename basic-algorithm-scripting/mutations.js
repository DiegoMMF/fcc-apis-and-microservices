function mutations([container, contained]) {
    const lowerCaseContainer = container.toLowerCase();
    const lowerCaseContained = contained.toLowerCase();
    const chars = lowerCaseContained.split("");
    let isContained = false;
    
    for (let index = 0; index < chars.length; index++) {
        const char = chars[index];
        (lowerCaseContainer.includes(char)) ? 
            isContained = true :
            isContained = false;
        console.log(char, isContained);
        if (!isContained) {
            console.log("entró al if");
            break;
        }
    }
    return isContained;
}

/* console.log(mutations(["Alien", "line"])); */
// console.log(mutations(["hello", "hey"]));
console.log(mutations(["hello", "neo"]));
// console.log(mutations(["voodoo", "no"]));
// console.log(mutations(["ate", "date"]));