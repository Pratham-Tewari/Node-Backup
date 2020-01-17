class car
{
    constructor(brand)
    {
        this.brand=brand;
    }
    get value()
    {
        return this.brand;
    }
    set value(x)
    {
        this.brand=x;
    }
}
var v=new car("Audi");
console.log(v.value);