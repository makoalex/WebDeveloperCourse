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
    this.calcHSL();
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
  toHex(){
    const {r,g,b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8)+b).toString(16).slice(1)
  }
	calcHSL() {
		let { r, g, b } = this;
    // TAKEN OFF STACKOVERFLOW
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
  toHsl(){
    const {h,s, l} = this;
    return `hsl(${h}, ${s}%, ${l}%)`
  }
  oppositeHsl(){
    const {h,s,l} = this;
    const oppositeHsl= (h+180) %360;
    return `hsl(${oppositeHsl}, ${s}%, ${l}%)`
  }
  
}
const mossGreen = new Colour(151, 166, 106);