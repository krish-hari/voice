var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

// var textbox = $("#textbox")

// var instructions = $("#instructions")

// var content = ''

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

  console.log(transcript.toLowerCase().trim());

  if (transcript.toLowerCase().trim() == "hello samsung") {
    document.getElementsByClassName("gnb__search-btn-js")[0].click()
  }
  else if (transcript.toLowerCase().trim() == "no trade in") {
    console.log("one", transcript);
    $("#tradeinOptionNo").trigger("click");
  }
  else if (transcript.toLowerCase().trim() == "continue") {
    console.log("here", transcript)
    $(".buttonLabel").trigger("click");
  }
  else {
    if (document.getElementsByClassName("gnb-search__input").length != 0) {
      document.getElementsByClassName("gnb-search__input")[0].value = transcript
      window.location = `https://stgwebus.samsung.com/us/search/searchMain/?listType=g&searchTerm=${transcript}`
    }
  }

  // content += transcript

  // textbox.val(content)

}

// $("#start-btn").click(function (event) {

recognition.start()

// })

// textbox.on('input', function () {

//   content = $(this).val()

// })
