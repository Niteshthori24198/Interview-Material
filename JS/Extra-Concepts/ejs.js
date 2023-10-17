
// closoure example : - 


function greet(){

    let count = 0;

    function getcount(){
       count++
    }

    function greeting(name){
        console.log(`${name} is greeting to you ${count} th time.`);
        getcount()
    }

    return greeting

}



const saygreet = greet()

saygreet("nitesh")
saygreet("nitesh")
saygreet("nitesh")
saygreet("nitesh")  

