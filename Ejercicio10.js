/*Dado el siguiente javascript usa forof y forin para hacer la media del 
volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [
  
  {
    name: "Alberto",
    favoriteSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoriteSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoriteSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoriteSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];




let totalVolume = 0;
let soundCount = 0;

for (const user of users) {
    for (const sound in user.favoriteSounds){
        totalVolume += user.favoriteSounds[sound].volume;
        soundCount++
    }
}

const averageVolume = totalVolume / soundCount;
console.log(averageVolume)

