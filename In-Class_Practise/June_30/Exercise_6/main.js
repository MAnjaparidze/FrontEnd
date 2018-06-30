function getSecondsToTomorrow() {
    let now = new Date();
  

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let difference = tomorrow - now;
    return Math.round(difference / 1000);
  }
  console.log(getSecondsToTomorrow());