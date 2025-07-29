const movieData = [
  {
    name: "Kabhi Khushi Kabhi Gham",
    genre: "Drama",
    boxOffice: 500,
    satelliteRights: 120,
    ottRights: 70,
    musicRights: 20,
  },
  {
    name: "Dilwale Dulhania Le Jayenge",
    genre: "Romance",
    boxOffice: 550,
    satelliteRights: 130,
    ottRights: 80,
    musicRights: 25,
  },
  {
    name: "3 Idiots",
    genre: "Comedy",
    boxOffice: 600,
    satelliteRights: 140,
    ottRights: 90,
    musicRights: 30,
  },
  {
    name: "Bajrangi Bhaijaan",
    genre: "Action",
    boxOffice: 700,
    satelliteRights: 160,
    ottRights: 100,
    musicRights: 40,
  },
  {
    name: "Padmaavat",
    genre: "Historical",
    boxOffice: 800,
    satelliteRights: 180,
    ottRights: 110,
    musicRights: 45,
  },
];

function calculateTotalAndAverages() {
  for (let i = 0; i < movieData.length; i++) {
    const data = movieData[i];
    const totalCost =
      data.boxOffice + data.satelliteRights + data.ottRights + data.musicRights;
    const averageCost = totalCost / 4;
    data.totalCost = totalCost;
    data.avgCost = averageCost;
  }
  // console.log(movieData);
}

calculateTotalAndAverages();
function getMostExpensiveMovie() {
  let expensivemovie = movieData[0];
  for (let i = 1; i < movieData.length; i++) {
    if (movieData[i].totalCost > expensivemovie.totalCost) {
      expensivemovie = movieData[i];
    }
  }
  console.log(expensivemovie);
  return expensivemovie;
}
function displayMostExpensiveMovie() {
  const expensive = getMostExpensiveMovie();
  const mostExpensiveMovie = (document.getElementById(
    "most-expensive-movie"
  ).innerHTML = `<article><header>Most Expensive Movie</header>
      <p><strong>Name :</strong> ${expensive.name} </p>
      <p><strong>Genre :</strong>  ${expensive.genre}</p>
      <p><strong>Box office :</strong>  ${expensive.boxOffice} Cr</p>
      <p><strong>Satellite Rights :</strong>  ${expensive.satelliteRights} Cr</p>
      <p><strong>OTT Rights :</strong>  ${expensive.ottRights} Cr</p>
      <p><strong>Music Rights :</strong>  ${expensive.musicRights} Cr</p>
      <footer><p><strong>Total Cost :</strong>  ${expensive.totalCost} Cr</p></footer></article>`);
}
// getMostExpensiveMovie();
function calculateAverage() {
  let totalBoxoffice = 0;
  let totalSatelliterights = 0;
  let totalOttRights = 0;
  let totalMusicRights = 0;

  for (let i = 0; i < movieData.length; i++) {
    totalBoxoffice += movieData[i].boxOffice;
    totalSatelliterights += movieData[i].satelliteRights;
    totalOttRights += movieData[i].ottRights;
    totalMusicRights += movieData[i].musicRights;
  }
  const totalCost =
    totalBoxoffice + totalSatelliterights + totalOttRights + totalMusicRights;
  let count = movieData.length;
  const average = {
    boxOfficeAverage: totalBoxoffice / count,
    satelliteRightsAverage: totalSatelliterights / count,
    ottRightsAverage: totalOttRights / count,
    musicRightsAverage: totalMusicRights / count,
    totalCostaverage: totalCost / count,
    totalCost,
  };
  return average;
}
function displayTotalAndAverage() {
  const totalAndAverage = calculateAverage();
  const movieAverage = (document.getElementById(
    "movie-average"
  ).innerHTML = `<article><header>Movie Average</header>
      <p><strong>Total Cost of All Movies :</strong> ${totalAndAverage.totalCost}  Cr</p>
      <p><strong>Total  Average Cost of All Movies :</strong> ${totalAndAverage.totalCostaverage} Cr</p>
      <p><strong>Total Box office Average :</strong> ${totalAndAverage.boxOfficeAverage} Cr</p>
      <p><strong>Total Satellite rights Average :</strong> ${totalAndAverage.satelliteRightsAverage} Cr</p>
      <p><strong>Total OTT  RightsAverage :</strong> ${totalAndAverage.ottRightsAverage} Cr</p>
     <footer> <p><strong>Total Music Rights Average  :</strong> ${totalAndAverage.musicRightsAverage} Cr</p></footer>
      </article>`);
}
function generate() {
  displayMostExpensiveMovie();
  displayTotalAndAverage();
}
document.addEventListener("DOMContentLoaded", generate);
