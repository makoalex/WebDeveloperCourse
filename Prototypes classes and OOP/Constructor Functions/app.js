function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
const colour1 = new Color(100, 231, 132)

Color.prototype.rgb = function(){
  const {r,g,b} =this;
  return `rgb(${r},${g},${b})`
};
 Color.prototype.rgba = function(a=1.0){
   const {r,g,b} = this;
   return `rgba(${r}, ${g}, ${b}, ${a})`
 }

 function User(firstName, lastName){
   this.firstName = firstName;
   this.lastName = lastName;
   this.isAdmin= false;
 }
 const user1 = new User('mako', 'chan')

 User.prototype.getFullName = function(){
   
   if (!this.isAdmin){
    const {firstName, lastName} = this;
    return `${firstName} ${lastName} is not the admin`
   }
 }