// const parse = require('csv-parse')
const {parse} = require('csv-parse')
// import { parse } from 'csv-parse'

const fs = require('fs')

const habitablePlanets  =[]

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] <1.11
    && planet['koi_prad'] < 1.6
}

fs.createReadStream('kepler_data.csv')
// Parsing the readable stream to writable stream
.pipe(parse({
    comment: '#',
    columns: true
}))
.on('data',(data)=>{
    if (isHabitablePlanet(data)){

        habitablePlanets.push(data)
    }
})
.on('error',(err)=>{
    console.log(err);
})
.on('end',()=>{
    // console.log(habitablePlanets.length);
    // habitablePlanets.map(planet=>planet.name)
    console.log(habitablePlanets.map(planet=>planet['kepler_name']));
    console.log('done');
})
