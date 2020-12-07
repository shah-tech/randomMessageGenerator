let namesArray = ['James','Billy','Adam','Jake','Tariq','Moh','Shah','Ali','Raza'];

let specialPowers = ['Sonic Boom','EMP Whirlpool','FireBurn','Mind Control','Full Hack'];

let powers = {
    superPowers:{
        'power1' : 'Sonic Boom - Huge anti-gravitational bubble blast with a 10 metre radius',
        'power2' : 'EMP Whirlpool - A whirlpool that destroys all electronics within 1 mile',
        'power3' : 'Fire Burn - Unleash a wave of fire',
        'power4' : 'Mind Control - Control 6 minds at once to fight on your side',
        'power5' : 'Full Hack - Hack Ai, Cameras and sentry turrets',
    }
};
const powerNumber = (Math.floor(Math.random()*5))
const nameNumber = (Math.floor(Math.random()*9));
const powerType = (Math.floor(Math.random()*5));

console.log(namesArray[nameNumber]);
console.log(specialPowers[powerNumber]);



//console.log(powers.superPowers["power1"]);


//let specialPowers = ['Sonic Boom','EMP Whirlpool','FireBurn','Mind Control','Full stack Hack'];

