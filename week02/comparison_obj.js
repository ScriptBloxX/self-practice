// object shallowCompare & deepCompare

// mock obj
const mock_obj1 = {
  id: 1,
  name: "x",
  address: {
    city: "bangkok",
    zip: 10150
  },
  hobbies: ["reading", "coding"]
};

const mock_obj2 = {
  id: 1,
  name: "x",
  address: {
    city: "bangkok",
    zip: 10150
  },
  hobbies: ["reading", "coding"],
};


function shallowCompare(obj1,obj2){
    const k1 = Object.keys(obj1);
    const k2 = Object.keys(obj2);
    if (k1.length != k2.length) return false;

    return k1.every(k => obj1[k] === obj2[k]);;
}
console.log(shallowCompare(mock_obj1,mock_obj2));

function deepCompare(obj1,obj2){
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;

    const k1 = Object.keys(obj1);
    const k2 = Object.keys(obj2);
    if (k1.length != k2.length) return false;

    for (k of k1){
        if (typeof obj1[k]=='object' && obj1[k] !== null) 
            if (!deepCompare(obj1[k],obj2[k])) return false;
        // console.log(obj1[k],'=',obj2[k],obj1[k]==obj2[k])
        if (obj1[k] !== obj2[k]) return false;
    }
    return true;
}
console.log(deepCompare(mock_obj1,mock_obj2));

