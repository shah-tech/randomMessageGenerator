let namesArray = ['James','Billy','Adam','Jake','Tariq','Moh','Shah','Ali','Raza'];

let specialPowers = ['Sonic Boom','EMP Whirlpool','FireBurn','Mind Control','Full Hack'];

let powers = ['Sonic Boom - Huge anti-gravitational bubble blast with a 10 metre radius',
         'EMP Whirlpool - A whirlpool that destroys all electronics within 1 mile',
         'Fire Burn - Unleash a wave of fire',
         'Mind Control - Control 6 minds at once to fight on your side',
         'Full Hack - Hack Ai, Cameras and sentry turrets'];

const powerNumber = (Math.floor(Math.random()*5))
const nameNumber = (Math.floor(Math.random()*9));
//const powerType = (Math.floor(Math.random()*5));

const powerType = (arr) => {
    switch (arr) {
        case 'Sonic Boom' :
            return 'Sonic Boom - Huge anti-gravitational bubble blast with a 10 metre radius';

        case 'EMP Whirlpool':
            return 'EMP Whirlpool - A whirlpool that destroys all electronics within 1 mile';

        case 'FireBurn':
            return 'Fire Burn - Unleash a wave of fire';

        case 'Mind Control':
            return 'Mind Control - Control 6 minds at once to fight on your side';
        
        case 'Full Hack':
            return 'Full Hack - Hack Ai, Cameras and sentry turrets';
                       
        default:
            return 'you are a loser you have no powers';
        };
}

let yourIdentity = namesArray[nameNumber];
let myPowers = specialPowers[powerNumber];
//console.log(myPowers)
//console.log(powers[powerType]);

let powerDescription = (powerType(myPowers));

console.log(`Your name is ${yourIdentity},Your special power is ${myPowers},what you are capable of doing ${powerDescription}.`);



//console.log(`Your NAME is ${namesArray[nameNumber]}.`)


//console.log(powers.superPowers["power1"]);


//let specialPowers = ['Sonic Boom','EMP Whirlpool','FireBurn','Mind Control','Full stack Hack'];

