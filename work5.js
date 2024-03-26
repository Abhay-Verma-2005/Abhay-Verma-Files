//Function -> function defination
// pascal case
function maxArray(nameOfArray){
        let max = 0;
        for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] >= max) {
        max = arr1[i];}
        }
        console.log(max);        
        }
        
        //taken a sample array like:
        let arr1 = [-1, 31, 51, 6, 7];
        maxArray(arr1) // calling the function
        //desired output: 51

//Object
// dom manupulation 
function creatReactangle(length , breadth)
{
    return{length,
        breadth,
        area(){
                console.log("Area: ", length*breadth)
        }
    }
}
const rect1=creatReactangle(5,11);
rect1.area();4
