function aboutColours (r, g, b){
  let colours = {};
  colours.r = r;
  colours.g = g;
  colours.b = b;
  colours.rgb = function () {
    // we can use the keyword this and destructure 
    const { r, g,b} = this;
    return `rgb(${r},${g}, ${b})`;
  }
  return colours;
}

const randomColour = aboutColours(145, 123, 100)
randomColour.rgb()

function createUser( firstName, lastName){
  let user = {}
  user.firstName= firstName
  user.lastName = lastName
  user.getFullName = function(){
    const{ firstName, lastName} = this;
    return `${firstName} ${lastName}`;
  }
  return user;
}

user1 = createUser('Mako','Chan')
user1.getFullName