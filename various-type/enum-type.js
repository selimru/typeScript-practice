// number enum
var requestType;
(function (requestType) {
    requestType[requestType["sir"] = 0] = "sir";
    requestType[requestType["student"] = 1] = "student";
    requestType[requestType["parents"] = 2] = "parents";
})(requestType || (requestType = {}));
console.log(requestType);
console.log(requestType.sir);
console.log(requestType['sir']);
// string enum
var requestType2;
(function (requestType2) {
    requestType2["sir"] = "helal";
    requestType2["student"] = "selim";
    requestType2["parents"] = "kuddus";
})(requestType2 || (requestType2 = {}));
console.log(requestType2);
