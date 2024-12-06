const clientID = "f5ae2032633c461f8ceb4abd61df48c2";
const clientSecret ="ddefaccde8e54ceeb20615df58dabb61";

// const url = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=3QMV90TUzT1JXQEj0op0bK&offset=0&limit=5';

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '118ab0251emsh9edcb92d8349b9fp18955ajsn7cadc70a6eb5',
// 		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
const playlistID ="3QMV90TUzT1JXQEj0op0bK"

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6d43daf606msh5e519f4689a8d04p1863d1jsne033c52d5166',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

async function getSong() {
    try{
        let url =  `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playlistID}&offset=0&limit=5`;
        let res = await fetch(url, options);
        let data = await res.json();
        console.log(data)
        let index = 0;
        console.log(data.items[index].track.uri)
    }catch(error){  
        console.error(`Upss error ${error}`)
    }
}


// async function searchSpotify(search){
//     try {
//       let url = `https://spotify23.p.rapidapi.com/search/?q=${search}&type=tracks&offset=0&limit=25&numberOfTopResults=5`
//       let res = await fetch(url, options)
//       let data = await res.json();
//      // console.log(data.tracks.items)
//       setExist(true)
//      // console.log(data)
//       setSecondSearch(data.tracks.items)
      
//     } catch (error) {
//       console.log(`You have the error: ${e}`)
//     }
//   }



  
  getSong();

