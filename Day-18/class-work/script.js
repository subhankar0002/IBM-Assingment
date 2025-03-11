async function getdata(){
    const API_KEY="AIzaSyDQn0QWYCvkPjpSMH1bwZHe9H5ex9z2hEU";
    let search="university";
    let data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}
`);
    let response = await data.json();
    console.log(data);
       
}
getdata();