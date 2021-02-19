class Fruit {
  constructor (name, pluckDate, expiryDate, countryOfOrigin){
    this.name= name;
    this.pluckDate = pluckDate;
    this.expiryDate = expiryDate;
    this.countryOfOrigin = countryOfOrigin;
  }
  getDetails(){
    const {name, pluckDate, expiryDate, countryOfOrigin} = this;
    return ` ${name} came in from ${countryOfOrigin}on the ${pluckDate} and expire on the ${expiryDate} `
  }
}
const banana = new Fruit('bananas', '25th.07','29th.10', 'Columbia')


class Colour{
  constructor(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
  }
  makeRGB(){
    const {r,g,b} =this;
    return`${r}, ${g}, ${b}`
  }
  actualRGB(){
    return `rgb(${this.makeRGB()})`
  }
  rgba(a = 1){
    return `rgba(${this.makeRGB()}, ${a})`
  }
}
const mossGreen = new Colour(151, 166, 106);