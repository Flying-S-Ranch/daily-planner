// DEPENDENCIES
// see README for credit on how to turn jQuery into an array
var hours = $(".time-block").toArray();
// console.log(hours)
var saveButton = $(".saveBtn").toArray();
// console.log(saveButton);
var storedText = $("textarea").toArray();
// console.log(storedText);


// var nineTextEl = document.querySelector("nine-text").value
// console.log(nineTextEl)

// DATA / STATE
var time = dayjs()
var currentHour = time.format('HH');
var plannerTimes = [09, 10, 11, 12, 13, 14, 15, 16, 17]

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Comment: I attempted to follow the hints but wasn't able to make the code work. Please
  // see lines 81-90 to see what I tried. Instead, I made an array for both the buttons and
  // the text area (lines 5 and 7) corresponding with the 'hours' array in line 3. That way all of the 
  // elements lined up correctly. 
  
    saveButton[0].addEventListener('click', function(){
      console.log("saving your work")
      localStorage.setItem("hour-9", storedText[0].value)
    })  

    saveButton[1].addEventListener('click', function(){
      console.log("saving your work")
      localStorage.setItem("hour-10", storedText[1].value)
    })

    saveButton[2].addEventListener('click', function(){
      console.log("saving your work")
      localStorage.setItem("hour-11", storedText[2].value)
    })

    saveButton[3].addEventListener('click', function(){
      console.log("saving your work")
      localStorage.setItem("hour-12", storedText[3].value)
    })

    saveButton[4].addEventListener('click', function(){
      console.log("saving your work")
      localStorage.setItem("hour-1", storedText[4].value)
    })

    saveButton[5].addEventListener('click', function(){
      console.log("saving your work")
      localStorage.setItem("hour-2", storedText[5].value)
    })

    saveButton[6].addEventListener('click', function(){
      console.log("saving your work")
      localStorage.setItem("hour-3", storedText[6].value)
    })

    saveButton[7].addEventListener('click', function(){
      console.log("saving your work")
      localStorage.setItem("hour-4", storedText[7].value)
    })

    saveButton[8].addEventListener('click', function(){
      console.log("saving your work")
      localStorage.setItem("hour-5", storedText[8].value)
    })
  
  //  var saveNine = $("#hour-9").children("button")
  //  console.log(saveNine)
  //  var savedText = document.querySelector("#text-9").value
  //  console.log(savedText)

  //  $(saveNine).click(function(event){
  //   console.log("it's working")
  //   event.preventDefault();
  //   localStorage.setItem("text", savedText)
  //  })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function compareTime() {
    for (i = 0; i < hours.length; i++) {
      var hourEl = $(hours[i])
      if (plannerTimes[i] < currentHour) {
        // console.log("the time is later than " + plannerTimes[i] + ":00")
        hourEl.addClass('past')
      } else if (plannerTimes[i] > currentHour) {
        hourEl.addClass('future')
      } else if (plannerTimes[i] === currentHour) {
        hourEl.addClass('present')
      }
    }
  }
  
  compareTime();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function displayStoredText () {
    var storedNine = localStorage.getItem("hour-9")
    storedText[0].textContent = storedNine

    var storedTen = localStorage.getItem("hour-10")
    storedText[1].textContent = storedTen

    var storedEleven = localStorage.getItem("hour-11")
    storedText[2].textContent = storedEleven

    var storedTwelve = localStorage.getItem("hour-12")
    storedText[3].textContent = storedTwelve

    var storedOne = localStorage.getItem("hour-1")
    storedText[4].textContent = storedOne

    var storedTwo = localStorage.getItem("hour-2")
    storedText[5].textContent = storedTwo

    var storedThree = localStorage.getItem("hour-3")
    storedText[6].textContent = storedThree

    var storedFour = localStorage.getItem("hour-4")
    storedText[7].textContent = storedFour

    var storedFive = localStorage.getItem("hour-5")
    storedText[8].textContent = storedFive
  }

  displayStoredText()

  // TODO: Add code to display the current date in the header of the page.
  setInterval(function(){
    var currentTime = dayjs();
    $('#currentDay').text(currentTime.format('DD MMMM YYYY hh:mm a'))
  }, 1000)
});





