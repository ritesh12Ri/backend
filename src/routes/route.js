// const { request } = require('express');
const express = require('express');
const d = require('lodash');
const router = express.Router();///test-you
//importing a custom module
// const xyz = require('../logger')
const a = require("../logger/logger.js")
const b = require("../util/helper.js")
const c = require("../validator/formatter.js")
//importing external package
// const underscore = require('underscore')
router.get('/test-me', function (req, res){
console.log(a.first())
console.log(b.currentDate())
console.log(b.currentMonth())
console.log(b.getBatchInfo())
console.log(c.edit("  functionUp  "))
console.log(c.lower("  functionUp  "))
console.log(c.upper("  functionUp  "))
    //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let array = ['jan','feb','march','april','may','june','july','august','sep','oct','nov','dec']
    console.log(d.chunk(array,3))
    let myarray = [1,2,3,4,5,6,7,8,9,10]
    console.log(d.tail(myarray))
    let new1 = [1,2,3],new2=[2,7,3],new3 =[3,4,5],new4 =[8,6,4],new5 =[3,5,9]
    console.log(d.union(new1,new2,new3,new4,new5))
    let arr1 = ['name',21],arr2 = ['age','ritesh'],arr3 = ['city', 'male'],arr4 = ['gender','bhopal']
    console.log(d.fromPairs([arr1,arr2,arr3,arr4]))
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

