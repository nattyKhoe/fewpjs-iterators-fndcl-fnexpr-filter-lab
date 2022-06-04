// Code your solution here
function findMatching (array, name){
    return array.filter(n=>n.toLowerCase()===name.toLowerCase());
}
function fuzzyMatch (array, name){
    let letters = [];
    for (let char in name){
        letters.push(name.charAt(char));
    };
    return array.filter(n=>{
        let nameChar =[];
        for (let char in n){
            nameChar.push(n.charAt(char));
        }
        for (let i in letters){
        return letters[i]==nameChar[i]};
    })
}
function matchName (array, string){
    return array.filter(n=>n.name==string);
}