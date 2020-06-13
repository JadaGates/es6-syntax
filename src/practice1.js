const parseData = input => {
    let result = [];
    for(let content of input.data){
        let temp ={};
        for(let counter in input.column){
            let key = input.column[counter].name;
            temp[key] = content[counter];
        }
        result.push(temp);
    }
    return result;
}
export { parseData };



