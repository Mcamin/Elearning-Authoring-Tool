//Judge an exercise
let judge = (exId) => {
  let selectedAnswers =[];
  $( "input" ).each(function( index ) {
   if( $('input').is(':checked'))
     selectedAnswers.push($('input').attr("name"));
  });
console.log(selectedAnswers);
  let data = {
    interactionId: exId,
    sessionId: params.sessionId,
    selectedAnswers: selectedAnswers
  };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  };
  fetch(`${window.location.origin}/asses-quiz`, options)
  .then(res => {
    return res.text();
  }).then(data =>{
    console.log(data);
  })
  .catch(function(error) {
    console.log(error)
  });

};



let  handleStartClicked = (nextPage) => {

  let data = {
    nextPage: nextPage,
    sessionId: localStorage.getItem('sessionId')
  };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  };
  fetch(`${window.location.origin}`, options)
  .then(res => {
    return res.text();
  })
  .then(data =>{
    document.body.innerHTML=data;
  })
.catch(function(error) {
  console.log(error)
});
};




//Send Data back to provider before closing window

//function logData() {
//  let data = {};
//  navigator.sendBeacon(`${window.location.origin}/close`, data);
//}
//window.addEventListener("unload", logData, false);
