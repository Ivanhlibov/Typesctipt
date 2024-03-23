// let user : string = 'Ivan'
// let id: unknown
//  id = 5;
//  id = '5';


const UserName: string = 'Ivan'

// type Arrnum = [number, number, number]

// const coords: readonly Arrnum = [255.6767, 555.8789]

// -----------------------------------------------------------------
const tenps = [255, 0 ,0]

type Id = number | string



const userId: Id = 5
const taskId: Id = 'text'

// -----------------------------------------------------------------
type Alerts = 'request' | 'success' | 'error';

const notification: Alerts = 'error'
// ------------------------------------------------------------------

enum PizzaSize {
    Small = 'Small',
    Medium = 'Medium' ,
    Large = 'Lage'
}


console.log(PizzaSize);
PizzaSize.Medium


const order = {
    size: PizzaSize.Large,
    qoantity: 5
}

// ----------------------------
interface PlagConfig{
  readonly  selector: string,
    perPage: number,
    statrtIndex: number, 
    draggable: boolean
}


const config= {
    selector: '#plugin-1',
    perPage: 2,
    statrtIndex: 0,
    draggable: false
    }

    interface Money {
        [employees: string]: | number
    }

    const employees = {
    poly: 5,
    kiwi: 10,
    mango: 15,
    ajax: 50
    }










    // -----------------------------------

    const fn = function (param1: number, param2: number ) {
        return param1 + param2
        
    }

     fn( 5, 5)
    console.log(fn(5, 5));
    
    // fn('5' , '5' ) error