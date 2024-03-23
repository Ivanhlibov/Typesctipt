// let user : string = 'Ivan'
// let id: unknown
//  id = 5;
//  id = '5';
const UserName = 'Ivan';
// type Arrnum = [number, number, number]
// const coords: readonly Arrnum = [255.6767, 555.8789]
// -----------------------------------------------------------------
const tenps = [255, 0, 0];
const userId = 5;
const taskId = 'text';
const notification = 'error';
// ------------------------------------------------------------------
var PizzaSize;
(function (PizzaSize) {
    PizzaSize["Small"] = "Small";
    PizzaSize["Medium"] = "Medium";
    PizzaSize["Large"] = "Lage";
})(PizzaSize || (PizzaSize = {}));
console.log(PizzaSize);
PizzaSize.Medium;
const order = {
    size: PizzaSize.Large,
    qoantity: 5
};
const config = {
    selector: '#plugin-1',
    perPage: 2,
    statrtIndex: 0,
    draggable: false
};
const employees = {
    poly: 5,
    kiwi: 10,
    mango: 15,
    ajax: 50
};
// -----------------------------------
const fn = function (param1, param2) {
    return param1 + param2;
};
fn(5, 5);
console.log(fn(5, 5));
// fn('5' , '5' ) error
//# sourceMappingURL=index.js.map