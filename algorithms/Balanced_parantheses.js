function BalanceParantheses(str){
    let stack = [];
    for(let i=0; i<str.length; i++){
        if(str[i] === '(' || str[i] === '{' || str[i] === '['){
            stack.push(str[i]);
        }else if(str[i] === ')' || str[i] === '}' || str[i] === ']'){
            if(stack[stack.length - 1] === '(' && str[i] === ')' || stack[stack.length - 1] === '{' && str[i] === '}' || stack[stack.length - 1] === '[' && str[i] === ']'){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
}

console.log(BalanceParantheses('()[{}]'));















