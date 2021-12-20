function getKeyWords(cleansed_string) {
  var x;
  var y;
  var word;
  var stop_word;
  var regex_str;
  var regex;
  //var cleansed_string = this.valueOf();
  var stop_words = [
    'yes',
    'search',
    'select',
    'about',
    'above',
    'across',
    'after',
    'again',
    'against',
    'all',
    'almost',
    'alone',
    'along',
    'already',
    'also',
    'although',
    'always',
    'among',
    'an',
    'another',
    'any',
    'anybody',
    'anyone',
    'anything',
    'anywhere',
    'are',
    'area',
    'areas',
    'around',
    'ask',
    'asked',
    'asking',
    'asks',
    'at',
    'away',
    'b',
    'back',
    'backed',
    'backing',
    'backs',
    'be',
    'became',
    'because',
    'become',
    'becomes',
    'been',
    'before',
    'began',
    'behind',
    'being',
    'beings',
    'best',
    'better',
    'between',
    'big',
    'both',
    'but',
    'by',
    'c',
    'came',
    'can',
    'cannot',
    'case',
    'cases',
    'certain',
    'certainly',
    'clear',
    'clearly',
    'come',
    'could',
    'd',
    'did',
    'differ',
    'different',
    'differently',
    'do',
    'does',
    'done',
    'down',
    'down',
    'downed',
    'downing',
    'downs',
    'during',
    'e',
    'each',
    'early',
    'either',
    'end',
    'ended',
    'ending',
    'ends',
    'enough',
    'even',
    'evenly',
    'ever',
    'every',
    'everybody',
    'everyone',
    'everything',
    'everywhere',
    'face',
    'faces',
    'fact',
    'facts',
    'far',
    'felt',
    'few',
    'find',
    'finds',
    'for',
    'four',
    'from',
    'full',
    'fully',
    'further',
    'furthered',
    'furthering',
    'furthers',
    'gave',
    'general',
    'generally',
    'get',
    'gets',
    'give',
    'given',
    'gives',
    'go',
    'going',
    'good',
    'goods',
    'got',
    'great',
    'greater',
    'greatest',
    'group',
    'grouped',
    'grouping',
    'groups',
    'h',
    'had',
    'has',
    'have',
    'having',
    'he',
    'her',
    'here',
    'herself',
    'high',
    'high',
    'high',
    'higher',
    'highest',
    'him',
    'himself',
    'his',
    'how',
    'however',
    'i',
    'if',
    'important',
    'interest',
    'interested',
    'interesting',
    'interests',
    'into',
    'is',
    'it',
    'its',
    'itself',
    'just',
    'k',
    'keep',
    'keeps',
    'kind',
    'knew',
    'know',
    'known',
    'knows',
    'l',
    'large',
    'largely',
    'later',
    'latest',
    'least',
    'less',
    'let',
    'lets',
    'like',
    'likely',
    'long',
    'longer',
    'longest',
    'made',
    'make',
    'making',
    'man',
    'many',
    'may',
    'me',
    'member',
    'members',
    'men',
    'might',
    'more',
    'most',
    'mostly',
    'mr',
    'mrs',
    'much',
    'must',
    'myself',
    'n',
    'necessary',
    'need',
    'needed',
    'needing',
    'needs',
    'never',
    'new',
    'new',
    'newer',
    'newest',
    'next',
    'nobody',
    'non',
    'noone',
    'not',
    'nothing',
    'now',
    'nowhere',
    'numbers',
    'o',
    'of',
    'off',
    'often',
    'old',
    'older',
    'oldest',
    'once',
    'one',
    'only',
    'open',
    'opened',
    'opening',
    'opens',
    'or',
    'ordered',
    'ordering',
    'orders',
    'other',
    'others',
    'our',
    'over',
    'p',
    'part',
    'parted',
    'parting',
    'parts',
    'per',
    'perhaps',
    'places',
    'please',
    'point',
    'pointed',
    'pointing',
    'points',
    'possible',
    'present',
    'presented',
    'presenting',
    'presents',
    'problem',
    'problems',
    'put',
    'puts',
    'q',
    'quite',
    'r',
    'rather',
    'really',
    'right',
    'right',
    'room',
    'rooms',
    'said',
    'saw',
    'say',
    'says',
    'second',
    'seconds',
    'see',
    'seem',
    'seemed',
    'seeming',
    'seems',
    'sees',
    'several',
    'shall',
    'she',
    'should',
    'show',
    'showed',
    'showing',
    'shows',
    'side',
    'sides',
    'since',
    'small',
    'smaller',
    'smallest',
    'so',
    'some',
    'somebody',
    'someone',
    'something',
    'somewhere',
    'state',
    'states',
    'still',
    'still',
    'such',
    'sure',
    't',
    'take',
    'taken',
    'than',
    'that',
    'the',
    'their',
    'them',
    'then',
    'there',
    'therefore',
    'these',
    'they',
    'thing',
    'things',
    'think',
    'thinks',
    'this',
    'those',
    'though',
    'thought',
    'thoughts',
    'three',
    'through',
    'thus',
    'to',
    'today',
    'together',
    'too',
    'took',
    'toward',
    'turn',
    'turned',
    'turning',
    'turns',
    'two',
    'u',
    'under',
    'until',
    'up',
    'upon',
    'us',
    'use',
    'used',
    'uses',
    'v',
    'very',
    'w',
    'want',
    'wanted',
    'wanting',
    'wants',
    'was',
    'way',
    'ways',
    'we',
    'well',
    'wells',
    'went',
    'were',
    'what',
    'when',
    'where',
    'whether',
    'which',
    'while',
    'who',
    'whole',
    'whose',
    'why',
    'will',
    'with',
    'within',
    'without',
    'work',
    'worked',
    'working',
    'works',
    'would',
    'x',
    'y',
    'year',
    'years',
    'yet',
    'you',
    'young',
    'younger',
    'youngest',
    'your',
    'yours',
  ]

  // Split out all the individual words in the phrase
  words = cleansed_string.match(/[^\s]+|\s+[^\s+]$/g)

  // Review all the words
  for (x = 0; x < words.length; x++) {
    // For each word, check all the stop words
    for (y = 0; y < stop_words.length; y++) {
      // Get the current word
      word = words[x].replace(/\s+|[^a-z]+/ig, "");    // Trim the word and remove non-alpha

      // Get the stop word
      stop_word = stop_words[y];

      // If the word matches the stop word, remove it from the keywords
      if (word.toLowerCase() == stop_word) {
        // Build the regex
        regex_str = "^\\s*" + stop_word + "\\s*$";        // Only word
        regex_str += "|^\\s*" + stop_word + "\\s+";        // First word
        regex_str += "|\\s+" + stop_word + "\\s*$";        // Last word
        regex_str += "|\\s+" + stop_word + "\\s+";        // Word somewhere in the middle
        regex = new RegExp(regex_str, "ig");

        // Remove the word from the keywords
        cleansed_string = cleansed_string.replace(regex, " ");
      }
    }
  }
  return cleansed_string.replace(/^\s+|\s+$/g, "");
}

var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

recognition.continuous = true;

var speechUtterance = new SpeechSynthesisUtterance();

async function outputMessage(txt) {
  speechUtterance.voice = speechSynthesis.getVoices().filter(function (voice) { return voice.name == 'Veena'; })[0];
  speechUtterance.text = txt;
  window.speechSynthesis.speak(speechUtterance);
}

// recognition is started

// recognition.onstart = function () {

//   instructions.text("Voice Recognition is On")

// }

// recognition.onspeechend = function () {
//   alert("Samsung voice recognition is paused. Click allow to start!!!");
//   recognition.start();
// }

// recognition.onerror = function () {

//   instruction.text("Try Again")

// }
recognition.onend = function () {
  alert("Samsung voice recognition is paused. Click ok to start again !!!");
  recognition.start();
};


recognition.onresult = async function (event) {

  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript
  transcript = transcript.toLowerCase().trim();
  console.log("before", transcript);
  transcript = getKeyWords(transcript);
  console.log("after", transcript);
  if (transcript == "hello samsung") {
    await outputMessage("Hello Customer. Welcome to Samsung. Enjoy your shopping. Please tell your product name");
    document.getElementsByClassName("gnb__search-btn-js")[0].click()
  }
  else if (transcript == "my cart") {
    document.getElementsByClassName("gnb__cart-btn")[0].click()
    await outputMessage("cart page. your selected products are listed here")
  }
  else if (transcript == "pause" || transcript == "pass") {
    recognition.stop();
  }
  else if (transcript.includes("capacity")) {
    let splitTranscript = transcript.split(" ");
    let phone = splitTranscript.slice(1);
    console.log(phone);
    phone = phone.join("")
    document.getElementById(phone).click();
    await outputMessage(`capacity ${phone} is selected`)
  }
  else if (transcript.includes("colour")) {
    let splitTranscript = transcript.split(" ");
    let phone = splitTranscript.slice(1);
    console.log(phone);
    phone = phone.join("-")
    document.getElementById(phone).click();
    await outputMessage(`colour ${phone} is selected`)

  }
  else if (transcript.includes("carrier") || transcript.includes("career")) {
    let splitTranscript = transcript.split(" ");
    let phone = splitTranscript.slice(1);
    console.log(phone);
    phone = phone.join("-")
    document.getElementById(phone).click();
    await outputMessage(`carrier ${phone} is selected`)
  }
  else if (transcript == "no trade in") {
    document.getElementById('tradeinOptionNo').click();
  }
  else if (transcript == "continue" || transcript == "check out") {
    if (document.getElementsByClassName('buttonLabel')[0])
      document.getElementsByClassName('buttonLabel')[0].click();
    if (document.getElementsByClassName("btn-primary")[0])
      document.getElementsByClassName("btn-primary")[0].click();
    if (document.getElementsByClassName("btn btn-primary btn-rounded")[2])
      document.getElementsByClassName("btn btn-primary btn-rounded")[2].click();
  }
  else if (transcript == "skip add ons") {
    document.getElementsByClassName("palette-btn")[0].click();
    await outputMessage('add ons are skipped... do you really want to continue.... you can add accessories in the cart page also')
  }
  else if (transcript == "credit card") {
    document.getElementsByClassName("ml10")[0].click();
  }
  else if (transcript == "apply default credit card") {
    document.getElementsByClassName("btn btn-credit-cards")[0].click();
    await outputMessage('default credit card is selected, please review your billing and shipping address and continue')
  }
  else if (transcript == "paypal") {
    document.getElementsByClassName("paypal-button-label-container")[0].click()
  }
  else if (transcript == "amazon pay") {
    document.getElementsByClassName("amazonpay-button-inner-image")[0].click();
  }
  else if (transcript == "google pay") {
    document.getElementsByClassName("gpay-button white plain short en")[0].click();
  }
  else if (transcript == "change payment") {
    document.getElementsByClassName("link-btn")[0].click();
    document.getElementsByClassName("btn btn-edit")[0].click();
    await outputMessage('please select any one of the payment methods to continue')
  }
  else if (transcript == "not same as billing address" || transcript == "not same as building address") {
    document.getElementById('_sameAsBillingCheckBox').checked = true;
    document.getElementById('_sameAsBillingCheckBox').click();
  }
  else if (transcript == "same as billing address" || transcript == "same as building address") {
    document.getElementById('_sameAsBillingCheckBox').checked = false;
    document.getElementById('_sameAsBillingCheckBox').click();
  }
  else if (transcript.includes("card number")) {
    var numberPattern = /\d+/g;
    let phone = transcript.match(numberPattern).join('')
    console.log(phone);
    document.getElementsByClassName("form-control")[0].value = phone;
  }
  else if (transcript.includes("expiry date")) {
    var numberPattern = /[0-9]{2}\/[0-9]{2}/g;
    let phone = transcript.match(numberPattern).join('')
    console.log(phone);
    document.getElementsByClassName("form-control")[1].value = phone;
  }
  else if (transcript.includes("cvv")) {
    var numberPattern = /\d+/g;
    let phone = transcript.match(numberPattern).join('')
    console.log(phone);
    document.getElementsByClassName("form-control")[2].value = phone;
  }
  else if (transcript.includes("first name")) {
    let splitTranscript = transcript.split(" ");
    let phone = splitTranscript.slice(2);
    console.log(phone);
    document.getElementsByClassName("form-control")[3].value = phone.join(" ");
  }
  else if (transcript.includes("last name")) {
    let splitTranscript = transcript.split(" ");
    let phone = splitTranscript.slice(2);
    console.log(phone);
    document.getElementsByClassName("form-control")[4].value = phone.join(" ");
  }
  else if (transcript.includes("street address")) {
    let splitTranscript = transcript.split(" ");
    let phone = splitTranscript.slice(2);
    console.log(phone);
    document.getElementsByClassName("form-control")[5].value = phone.join(" ");
  }
  else if (transcript.includes("zip code")) {
    var numberPattern = /\d+/g;
    let phone = transcript.match(numberPattern).join('')
    console.log(phone);
    document.getElementsByClassName("form-control")[7].value = phone;
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
    document.getElementsByClassName("btn btn-primary")[3].click()
    await outputMessage('Hurray..... Your order is placed successfully. hope you had a great shopping experience. Have a great day')
  }
  else if (document.getElementsByClassName("SearchContainer__container___FujyC").length > 0) {
    //let dataFlyoutUrls=[]
    let redirection;
    let modelName;
    let regexs = /[()-\s]/g
    transcript = transcript.replace(regexs, '');

    for (let i = 0; i < document.getElementsByClassName("ProductGrid__container___1s303")[0].childElementCount; i++) {
      let productName = document.querySelector('.ProductGrid__container___1s303').querySelectorAll('.ProductCard__title___2XHJS')[i].valueOf().textContent;
      modelName = document.querySelector('.ProductGrid__container___1s303').querySelectorAll('.ProductCard__container___3tGUh')[i].getAttribute('data-mdlcode');
      productName = productName.replace(regexs, '')
      if ((productName.toLowerCase()).includes(transcript.toLowerCase())) {

        let aTags = document.querySelector('.gnb__menu-wrap').getElementsByTagName("a")
        for (let j = 0; j < aTags.length; j++) {
          let attributeName = 'href'
          if (modelName != null && aTags[j].getAttribute(attributeName) != null && (aTags[j].getAttribute(attributeName).toLowerCase()).includes(modelName.toLowerCase())) {
            // dataFlyoutUrls.push(aTags[j].getAttribute(attributeName))
            redirection = aTags[j].getAttribute(attributeName)
            window.location = `https://stgwebus.samsung.com${redirection}?modelCode=${modelName}`
            await outputMessage('please select your carrier, capacity, colour in the next page to continue')
          }
        }
      }
    }

  }
  else if (document.getElementsByClassName("gnb-search__input").length != 0) {
    //document.getElementsByClassName('gnb__logo')[0].getAttribute('href').localeCompare('/us')==1
    document.getElementsByClassName("gnb-search__input")[0].value = transcript
    window.location = `https://stgwebus.samsung.com/us/search/searchMain/?listType=g&searchTerm=${transcript}`
    await outputMessage(`fetching the list of ${transcript} products`)
  }

}

recognition.start()
