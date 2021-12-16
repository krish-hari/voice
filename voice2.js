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

  console.log(transcript);

  if (transcript.toLowerCase() == 'no trade in') {
    $("#tradeinOptionNo").trigger("click");
  }
  else if (transcript.toLowerCase() == 'continue') {
    $(".buttonLabel").trigger("click");
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
