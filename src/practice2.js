const inject = (items,sections) =>{

    sections.sort(compareByIndex("index"));
    for (let counter in sections){
        let index = sections[counter].index;
        let content = sections[counter].content
        items.splice(index, 0, content);
    }
    return items;
}

function compareByIndex(p){
    return function(m,n){
        let a = m[p];
        let b = n[p];
        return b - a;
    }
}

export { inject };
