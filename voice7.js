// var getKeyWords = require('./getKeyWords')

var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

recognition.continuous = true

// recognition is started

// recognition.onstart = function () {

//   instructions.text("Voice Recognition is On")

// }

// recognition.onspeechend = function () {

//   instructions.text("No Activity")

// }

// recognition.onerror = function () {

//   instruction.text("Try Again")

// }

recognition.onresult = function (event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript
  transcript = transcript.toLowerCase().trim();
  // console.log(transcript);
  // transcript = getKeyWords(transcript);
  console.log(transcript);
  if (transcript == "hello samsung") {
    document.getElementsByClassName("gnb__search-btn-js")[0].click()
  }
  else if (transcript == "no trade in") {
    document.getElementById('tradeinOptionNo').click();
  }
  else if (transcript == "continue") {
    document.getElementsByClassName('buttonLabel')[0].click();
  }
  else if (transcript == "skip add ons") {
    document.getElementsByClassName("palette-btn")[0].click();
  }
  else if (transcript == "check out") {
    document.getElementsByClassName("btn-primary")[0].click()
  }
  else if (transcript == "credit card") {
    document.getElementsByClassName("ml10")[0].click();
  }
  else if (transcript == "paypal") {
    document.getElementsByClassName("paypal-logo paypal-logo-paypal paypal-logo-color-blue")[0].click();
  }
  else if (transcript == "amazon pay") {
    document.getElementsByClassName("amazonpay-button-inner-image")[0].click();
  }
  else if (transcript == "google pay") {
    document.getElementsByClassName("gpay-button white plain short en")[0].click();
  }
  else if (transcript == "change payment") {
    document.getElementsByClassName("link-btn")[0].click();
  }
  else if (transcript == "not same as billing address") {
    document.getElementById('_sameAsBillingCheckBox').checked = true;
    document.getElementById('_sameAsBillingCheckBox').click();
  }
  else if (transcript == "same as billing address") {
    document.getElementById('_sameAsBillingCheckBox').checked = false;
    document.getElementById('_sameAsBillingCheckBox').click();
  }
  else if (transcript.includes("email")) {
    let splitTranscript = transcript.split(" ");
    let email = "";
    splitTranscript.forEach(element => {
      if (element.includes("@gmail.com")) {
        email = element;
      }
    });
    console.log(email);
    document.getElementsByClassName("form-control")[19].value = email;
  }
  else if (transcript.includes("phone")) {
    var numberPattern = /\d+/g;
    let phone = transcript.match(numberPattern).join('')
    console.log(phone);
    document.getElementsByClassName("form-control")[20].value = phone;
  }
  else if (transcript == "place order") {
    document.getElementsByClassName("btn btn-primary")[10].click();
  }
  else {
    if (document.getElementsByClassName("gnb-search__input").length != 0) {
      window.location = `https://stgwebus.samsung.com/us/search/searchMain/?listType=g&searchTerm=${transcript}`
    }
    else if (document.getElementsByClassName("SearchContainer__container___FujyC").length > 0) {
      //let dataFlyoutUrls=[]
      let redirection;
      let modelName;
      for (let i = 0; i < document.getElementsByClassName("ProductGrid__container___1s303")[0].childElementCount; i++) {
        let productName = document.querySelector('.ProductGrid__container___1s303').querySelectorAll('.ProductCard__title___2XHJS')[i].valueOf().textContent;
        modelName = document.querySelector('.ProductGrid__container___1s303').querySelectorAll('.ProductCard__container___3tGUh')[i].getAttribute('data-mdlcode');
        if ((productName.toLowerCase()).includes(transcript.toLowerCase())) {
          let aTags = document.querySelector('.gnb__menu-wrap').getElementsByTagName("a")
          for (let j = 0; j < aTags.length; j++) {
            let attributeName = 'href'
            if (modelName != null && aTags[j].getAttribute(attributeName) != null && (aTags[j].getAttribute(attributeName).toLowerCase()).includes(modelName.toLowerCase())) {
              // dataFlyoutUrls.push(aTags[j].getAttribute(attributeName))
              redirection = aTags[j].getAttribute(attributeName)

            }
          }
        }
      }
      window.location = `https://stgwebus.samsung.com+redirection+?modelCode=${modelName}`
    }
  }

}

recognition.start()
