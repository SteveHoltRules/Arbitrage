
//Finn Hub Financial Info

let token = "Tpk_96456627b77642ab978010ddff25e36e"

var getQuote = function(token) {
  var ticker = "aapl";
  // var token = "Tpk_96456627b77642ab978010ddff25e36e"
  // var apiUrl = `https://sandbox.iexapis.com/stable/stock/${ticker}/quote/2?token=${token}`;
  var apiUrl = `https://sandbox.iexapis.com/stable/tops?token=${token}&symbols=${ticker}`;
  console.log(apiUrl);
  fetch(apiUrl).then(function(response) {
    //request was successful
    if(response.ok) {
      response.json().then(function(data) {
        console.log(data);
        console.log(data[0].bidPrice);
        //do something here....
      });
    }else {
      alert("Error: IEX quote is not found");
    }
  })
  .catch(function(error) {
    //notice this catch getting changed out to the end of the .then()
    alert("Unable to connect to IEX");
  });
};

getQuote(token);