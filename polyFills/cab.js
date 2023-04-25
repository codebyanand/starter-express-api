// Call Apply and Bind
let name = {
    firstname:"Amit",
    Lastname:"Anand",
    getname: function () {
        console.log(this.firstname + " " + this.Lastname);
    }
}

let name2 = {
    firstname:"sumit",
    Lastname:"sawan"
}
name2.call().getname()