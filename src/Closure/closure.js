
function greeting(){
  let userName = 'Iris';

  function disPlayUserName(){
    return `Hello ${userName}`;
  }
    return disPlayUserName
}

const g = greeting();
console.log(g);
console.log(g());
