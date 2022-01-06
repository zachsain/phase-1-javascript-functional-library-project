/* My Map Function 
Iterates over the collection of elements, 
passing each element in turn to the callback function. 
Returns the original, unmodified, collection */

function myEach(collection, callBack){

    collection.forEach(collect => {
        console.log(callBack(collect))
        return collection 
    })
    
}

function callBack(alerted) {
    return alerted.alert()
}