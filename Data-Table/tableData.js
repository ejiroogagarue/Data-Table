function pipe(...fns) {
  return (arg) => fns.reduce((prev, fn) => fn(prev), arg);
}
let response = [
  {
      "id": 711,
      "jobNum": "1163101-001",
      "typeOfOrder": "R",
      "customerNumber": 2824,
      "customerName": "JAMIESON LABORATORIES LTD",
      "scheduledShipDate": "2020-06-24 23:59:59",
      "pressRunFootage": 1222,
      "ItemNumber": "12-7285 Rev2030",
      "description": "JAMIESON 250cc MULTI WILDBERRY KOREA",
      "quantity": 5000,
      "varnish": "no",
      "materialOne": "S1642",
      "materialTwo": "S1111",
      "materialThree": "S1630",
      "die": "A11I0148",
      "ac": 3,
      "hpCopy": 479.17,
      "hpRepeat": 406.4,
      "maximumOd": 11,
      "productCode": "168P",
      "hpRepeatFull": 32,
      "creationTime": "2021-03-20T20:14:56.000Z",
      "tracking": "Graphics"
  },
  {
      "id": 712,
      "jobNum": "1163236-001",
      "typeOfOrder": "R",
      "customerNumber": 3167,
      "customerName": "McNEIL CONSUMER HEALTH",
      "scheduledShipDate": "2020-08-12 23:59:59",
      "pressRunFootage": 14681,
      "ItemNumber": "100035563",
      "description": "CHILDRENS TYL BANANA BERRY 100ML",
      "quantity": "  125,000",
      "varnish": "yes",
      "materialOne": "S1344",
      "materialTwo": "S1375",
      "materialThree": "N/A",
      "die": "A11I0153",
      "ac": 4,
      "hpCopy": 5133.93,
      "hpRepeat": 390.525,
      "maximumOd": 16,
      "productCode": "168P",
      "hpRepeatFull": 35.875,
      "creationTime": "2021-03-20T20:14:56.000Z",
      "tracking": "Graphics"
  },
  {
      "id": 713,
      "jobNum": "1163331-001",
      "typeOfOrder": "R",
      "customerNumber": 2824,
      "customerName": "JAMIESON LABORATORIES LTD",
      "scheduledShipDate": "2020-09-23 23:59:59",
      "pressRunFootage": 4208,
      "ItemNumber": "12-9189 rev1109",
      "description": "JAMIESON 160cc VITAMIN C 500mg",
      "quantity": "   27,200",
      "varnish": "no",
      "materialOne": "S1628",
      "materialTwo": "S1630",
      "materialThree": "N/A",
      "die": "I13FLEX0105",
      "ac": 4,
      "hpCopy": 1564,
      "hpRepeat": 342.9,
      "maximumOd": 11,
      "productCode": "105P",
      "hpRepeatFull": 33.75,
      "creationTime": "2021-03-20T20:14:56.000Z",
      "tracking": "Graphics"
  },
  {
      "id": 714,
      "jobNum": "1163346-001",
      "typeOfOrder": "R",
      "customerNumber": 2824,
      "customerName": "JAMIESON LABORATORIES LTD",
      "scheduledShipDate": "2020-09-23 23:59:59",
      "pressRunFootage": 11073,
      "ItemNumber": "12-9044 Rev1019",
      "description": "JAMIESON 250cc ChewD TROPICAL 1000IU",
      "quantity": "   60,400",
      "varnish": "no",
      "materialOne": "S1628",
      "materialTwo": "S1630",
      "materialThree": "N/A",
      "die": "I13FLEX0093",
      "ac": 4,
      "hpCopy": 4341.25,
      "hpRepeat": 406.4,
      "maximumOd": 11,
      "productCode": "105P",
      "hpRepeatFull": 32,
      "creationTime": "2021-03-20T20:14:56.000Z",
      "tracking": "Graphics"
  },
  {
      "id": 715,
      "jobNum": "1163415-001",
      "typeOfOrder": "R",
      "customerNumber": 1764,
      "customerName": "CCL LABEL",
      "scheduledShipDate": "2020-06-30 23:59:59",
      "pressRunFootage": 945,
      "ItemNumber": "INK LABEL",
      "description": "INK LABEL",
      "quantity": "    5,000",
      "varnish": "no",
      "materialOne": "S1638",
      "materialTwo": "N/A",
      "materialThree": "N/A",
      "die": "R13FLEX0975",
      "ac": 2,
      "hpCopy": 333.33,
      "hpRepeat": 314.325,
      "maximumOd": 0,
      "productCode": "105P",
      "hpRepeatFull": 37.125,
      "creationTime": "2021-03-20T20:14:56.000Z",
      "tracking": "Graphics"
  },
  {
      "id": 716,
      "jobNum": "1163720-001",
      "typeOfOrder": "R",
      "customerNumber": 3167,
      "customerName": "McNEIL CONSUMER HEALTH",
      "scheduledShipDate": "2020-09-21 23:59:59",
      "pressRunFootage": 12919,
      "ItemNumber": "100035571",
      "description": "CH TYL LIQ SUSP DF 100ML BERRY",
      "quantity": "  110,000",
      "varnish": "yes",
      "materialOne": "S1344",
      "materialTwo": "S1375",
      "materialThree": "N/A",
      "die": "A11I0153",
      "ac": 4,
      "hpCopy": 4517.86,
      "hpRepeat": 390.525,
      "maximumOd": 16,
      "productCode": "168P",
      "hpRepeatFull": 35.875,
      "creationTime": "2021-03-20T20:14:56.000Z",
      "tracking": "Graphics"
  },
  {
      "id": 717,
      "jobNum": "1163721-001",
      "typeOfOrder": "R",
      "customerNumber": 3167,
      "customerName": "McNEIL CONSUMER HEALTH",
      "scheduledShipDate": "2020-10-12 23:59:59",
      "pressRunFootage": 11745,
      "ItemNumber": "100035569",
      "description": "CHILDRENS TYL LIQ SUS DF CHERRY 100ML",
      "quantity": "  100,000",
      "varnish": "yes",
      "materialOne": "S1344",
      "materialTwo": "S1375",
      "materialThree": "N/A",
      "die": "A11I0153",
      "ac": 4,
      "hpCopy": 4107.14,
      "hpRepeat": 390.525,
      "maximumOd": 16,
      "productCode": "168P",
      "hpRepeatFull": 35.875,
      "creationTime": "2021-03-20T20:14:56.000Z",
      "tracking": "Graphics"
  },
  {
      "id": 718,
      "jobNum": "1163722-001",
      "typeOfOrder": "R",
      "customerNumber": 3167,
      "customerName": "McNEIL CONSUMER HEALTH",
      "scheduledShipDate": "2020-10-12 23:59:59",
      "pressRunFootage": 9396,
      "ItemNumber": "100035579",
      "description": "CHILDRENS TYLENOL LIQ SUS BBG 100ML",
      "quantity": "   80,000",
      "varnish": "yes",
      "materialOne": "S1344",
      "materialTwo": "S1375",
      "materialThree": "N/A",
      "die": "A11I0153",
      "ac": 4,
      "hpCopy": 3285.71,
      "hpRepeat": 390.525,
      "maximumOd": 16,
      "productCode": "168P",
      "hpRepeatFull": 35.875,
      "creationTime": "2021-03-20T20:14:56.000Z",
      "tracking": "Graphics"
  },
  {
    "id": 789,
    "jobNum": "1164850-001",
    "typeOfOrder": "R",
    "customerNumber": 2841,
    "customerName": "VITA HEALTH COMPANY(1985)",
    "scheduledShipDate": "2020-09-10 23:59:59",
    "pressRunFootage": 1490,
    "ItemNumber": "L37298-002",
    "description": "UNIP ANTI-NAUSEANT 50MG 100TB",
    "quantity": "   20,000",
    "varnish": "yes",
    "materialOne": "S1189",
    "materialTwo": "S1547",
    "materialThree": "N/A",
    "die": "A11R0158",
    "ac": 6,
    "hpCopy": 595.24,
    "hpRepeat": 371.475,
    "maximumOd": 12,
    "productCode": "168P",
    "hpRepeatFull": 34.125,
    "creationTime": "2021-03-20T20:14:56.000Z",
    "tracking": "Graphics"
},
{
    "id": 790,
    "jobNum": "1164851-001",
    "typeOfOrder": "R",
    "customerNumber": 2841,
    "customerName": "VITA HEALTH COMPANY(1985)",
    "scheduledShipDate": "2020-09-17 23:59:59",
    "pressRunFootage": 372,
    "ItemNumber": "L39025-003",
    "description": "PJC NT COLD MED CHILL 24CPL",
    "quantity": "    5,000",
    "varnish": "yes",
    "materialOne": "S1189",
    "materialTwo": "S1547",
    "materialThree": "N/A",
    "die": "A11R0158",
    "ac": 6,
    "hpCopy": 148.81,
    "hpRepeat": 371.475,
    "maximumOd": 12,
    "productCode": "168P",
    "hpRepeatFull": 34.125,
    "creationTime": "2021-03-20T20:14:56.000Z",
    "tracking": "Graphics"
},
{
    "id": 791,
    "jobNum": "1164852-001",
    "typeOfOrder": "R",
    "customerNumber": 2841,
    "customerName": "VITA HEALTH COMPANY(1985)",
    "scheduledShipDate": "2020-09-17 23:59:59",
    "pressRunFootage": 819,
    "ItemNumber": "L32551-002",
    "description": "UNIP XSTR SLP AID 20CPL",
    "quantity": "   11,000",
    "varnish": "yes",
    "materialOne": "S1189",
    "materialTwo": "S1547",
    "materialThree": "N/A",
    "die": "A11R0158",
    "ac": 6,
    "hpCopy": 327.38,
    "hpRepeat": 371.475,
    "maximumOd": 12,
    "productCode": "168P",
    "hpRepeatFull": 34.125,
    "creationTime": "2021-03-20T20:14:56.000Z",
    "tracking": "Graphics"
},
{
    "id": 792,
    "jobNum": "1164853-001",
    "typeOfOrder": "R",
    "customerNumber": 2841,
    "customerName": "VITA HEALTH COMPANY(1985)",
    "scheduledShipDate": "2020-09-17 23:59:59",
    "pressRunFootage": 1788,
    "ItemNumber": "L40284-001",
    "description": "LIFE ACET 50MG 24CPL",
    "quantity": "   24,000",
    "varnish": "yes",
    "materialOne": "S1189",
    "materialTwo": "S1547",
    "materialThree": "N/A",
    "die": "A11R0158",
    "ac": 6,
    "hpCopy": 714.29,
    "hpRepeat": 371.475,
    "maximumOd": 12,
    "productCode": "168P",
    "hpRepeatFull": 34.125,
    "creationTime": "2021-03-20T20:14:56.000Z",
    "tracking": "Graphics"
},
{
    "id": 793,
    "jobNum": "1164854-001",
    "typeOfOrder": "R",
    "customerNumber": 2841,
    "customerName": "VITA HEALTH COMPANY(1985)",
    "scheduledShipDate": "2020-09-10 23:59:59",
    "pressRunFootage": 282,
    "ItemNumber": "L32428-005",
    "description": "OVWT SENNA LAX 8.6MG N/S 100TB",
    "quantity": "    3,000",
    "varnish": "yes",
    "materialOne": "S1190",
    "materialTwo": "N/A",
    "materialThree": "N/A",
    "die": "R13FLEX0357",
    "ac": 5,
    "hpCopy": 98.57,
    "hpRepeat": 390.525,
    "maximumOd": 12,
    "productCode": "105P",
    "hpRepeatFull": 35.875,
    "creationTime": "2021-03-20T20:14:56.000Z",
    "tracking": "Graphics"
},
{
    "id": 796,
    "jobNum": "1164859-001",
    "typeOfOrder": "R",
    "customerNumber": 2841,
    "customerName": "VITA HEALTH COMPANY(1985)",
    "scheduledShipDate": "2020-09-17 23:59:59",
    "pressRunFootage": 1700,
    "ItemNumber": "L81001-000",
    "description": " ",
    "quantity": "    5,000",
    "varnish": "yes",
    "materialOne": "S1190",
    "materialTwo": "N/A",
    "materialThree": "N/A",
    "die": "R13FLEX0807",
    "ac": 3,
    "hpCopy": 638.89,
    "hpRepeat": 282.575,
    "maximumOd": 12,
    "productCode": "103P",
    "hpRepeatFull": 33.375,
    "creationTime": "2021-03-20T20:14:56.000Z",
    "tracking": "Graphics"
},
{
    "id": 797,
    "jobNum": "1164860-001",
    "typeOfOrder": "R",
    "customerNumber": 2841,
    "customerName": "VITA HEALTH COMPANY(1985)",
    "scheduledShipDate": "2020-09-10 23:59:59",
    "pressRunFootage": 1272,
    "ItemNumber": "L39792-003",
    "description": "RIVA ASA 81MG 1000 TABS",
    "quantity": "    3,000",
    "varnish": "yes",
    "materialOne": "S1190",
    "materialTwo": "N/A",
    "materialThree": "N/A",
    "die": "R13FLEX0942",
    "ac": 3,
    "hpCopy": 575,
    "hpRepeat": 352.425,
    "maximumOd": 12,
    "productCode": "103P",
    "hpRepeatFull": 27.75,
    "creationTime": "2021-03-20T20:14:56.000Z",
    "tracking": "Graphics"
},
{
    "id": 798,
    "jobNum": "1164861-001",
    "typeOfOrder": "R",
    "customerNumber": 2841,
    "customerName": "VITA HEALTH COMPANY(1985)",
    "scheduledShipDate": "2020-09-17 23:59:59",
    "pressRunFootage": 6513,
    "ItemNumber": "L40482-000",
    "description": "DLLR ACET 500MG 75CPL",
    "quantity":   49000,
    "varnish": "yes",
    "materialOne": "S1190",
    "materialTwo": "N/A",
    "materialThree": "N/A",
    "die": "R13FLEX0621",
    "ac": 5,
    "hpCopy": 2254,
    "hpRepeat": 368.3,
    "maximumOd": 12,
    "productCode": "103P",
    "hpRepeatFull": 36.25,
    "creationTime": "2021-03-20T20:14:56.000Z",
    "tracking": "Graphics"
}];




// perform a string check if true convert the qunatity to a number

let stringCheck = array => array.some(a => (typeof a.quantity === "string"));
    // let  result = stringCheck(data);
    // console.log(result);


    

// capture quantity
let quantityData = array => array.map(a => a.quantity);

// convert them all to strings 
let stringData = array => array.map(a => a.toString());
// remove space and comma from the quantity  & convert to a numner
const regex = /[.,\s]/g;
let trimString = array => array.map(a => a.replace(regex, ""));
// convert to a number 
let integerData = array => array.map(a => parseInt(a)); 
// Add back to the array of objects

function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

function arrayObject(a, b) {
  for (var i = 0; i < b.length; i++) {
    // merge objects into one with multiple props
 b[i] = Object.assign(b[i], {
        
        quantity: a[i], 
        
    });
}
return b;
  //  return `Data : ${a}  + Response : ${b}`;  
  
}

let ArrayOfObject = curry(arrayObject);

// sort by the qty, die and ac ascending

let sortData = array =>   array.sort((a, b) => a.die.localeCompare(b.die) && a.ac - b.ac && a.quantity - b.quantity ); 

// send to frontend
// build the frontend data table
// style 
// add the table functions 
// design the page 
// test with team 


// if the quantity data of response is a string 
if(stringCheck(response)){
     let result = pipe(quantityData,stringData, trimString, integerData)(response)
      response = ArrayOfObject(result)(response)
      // console.log(response);
}

const sortedData = sortData(response);

console.log(sortedData);





