var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elList = document.querySelector(".js-list");
var elBtn = document.querySelector(".js-button");
var elBtn1 = document.querySelector(".js-button1");
var array = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elInputVal = elInput.value;
  elInput.value = ""

  elList.innerHTML = ""
  array.push({
    id: array.length + 1,
    text: elInputVal,
  });

  for(item of  array) {
    var newItem = document.createElement("li")
    newItem.textContent = `${item.id}. ${item.text}`
    elList.appendChild(newItem)
  }
})

var record = new webkitSpeechRecognition();

elBtn.addEventListener("click", function() {
  record.start()
})

record.onresult = function (evt) {
  var result = evt.results[0][0].transcript;

  if(result = "yashil") {
    document.body.style.backgroundColor = "green"; 
    console.log(result);   
  }
  if(result == "qizil") {
    document.body.style.backgroundColor = "red";    
  }else {
    document.body.style.backgroundColor = "blue";    
  }

}
