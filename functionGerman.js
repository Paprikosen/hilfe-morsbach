import { posts } from '/content.js';

// Toggle elements

const coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var arrow = this.querySelector(".arrow");
    if (content.style.display === "block") {
    content.style.display = "none";
    arrow.classList.remove("down");
    arrow.classList.add("right");
    } else {
    content.style.display = "block";
    arrow.classList.remove("right");
    arrow.classList.add("down");
    }
});
}




// Translate texts on click

const texts = document.querySelectorAll(".text");
const toggleButton = document.getElementById("toggleButton");
let active = true;

toggleButton.addEventListener("click", function() {
  active = !active;
  if (active) {
    toggleButton.innerHTML = "Toggle Language Switcher (ON)";
  } else {
    toggleButton.innerHTML = "Toggle Language Switcher (OFF)";
  }
});

texts.forEach(text => {
  text.addEventListener("click", function() {
    if (active) {
      if (text.classList.contains('germanMain')) {
        text.classList.remove('germanMain')
        text.classList.add('ukrainianMain')
        text.innerHTML = this.dataset.ukrainian;
      } else {
        text.innerHTML = this.dataset.german;
        text.classList.add('germanMain')
        text.classList.remove('ukrainianMain')
      }
    }
  });
});

texts.forEach(text => {
  if (!text.classList.contains("germanMain")) {
  text.addEventListener("click", function() {
    if (active) {
      const textId = text.getAttribute('id').charAt(6)
      // works for the first layer
      if (!text.classList.contains('padding')) {
        if (text.classList.contains('german')) {
          text.classList.remove('german')
          text.classList.add('ukrainian')
          const titlesTranslation = `<span>${posts[Number(textId)].topicUkrainian}</span><br><br>`
          text.innerHTML = titlesTranslation + posts[Number(textId)].textUkrainian
        } else {
          text.innerHTML = posts[Number(textId)].textGerman;
          text.classList.add('german')
          text.classList.remove('ukrainian')
        }
      }
      // works for the second Layer
      if (text.classList.contains('secondLayer')) {
        if (text.classList.contains('german')) {
          const textIdSub = text.getAttribute('id').charAt(8)
          text.classList.remove('german')
          text.classList.add('ukrainian')
          const titlesTranslation = `<span>${posts[Number(textId)].topicUkrainian} -> ${posts[Number(textId)].subtopics[Number(textIdSub)].topicUkrainian}</span><br><br>`
          text.innerHTML = titlesTranslation + posts[Number(textId)].subtopics[Number(textIdSub)].textUkrainian
        } else {
          const textIdSub = text.getAttribute('id').charAt(8)
          text.innerHTML = posts[Number(textId)].subtopics[Number(textIdSub)].textGerman;
          text.classList.add('german')
          text.classList.remove('ukrainian')
        }
    } if (text.classList.contains('thirdLayer')) {
        if (text.classList.contains('german')) {
          const textIdSub = text.getAttribute('id').charAt(8)
          const textIdSubSub = text.getAttribute('id').charAt(10)
          text.classList.remove('german')
          text.classList.add('ukrainian')
          const titlesTranslation = `<span>${posts[Number(textId)].topicUkrainian} -> ${posts[Number(textId)].subtopics[Number(textIdSub)].topicUkrainian} -> ${posts[Number(textId)].subtopics[Number(textIdSub)].subtopics[Number(textIdSubSub)].topicUkrainian}</span><br><br>`
          text.innerHTML = titlesTranslation + posts[Number(textId)].subtopics[Number(textIdSub)].subtopics[Number(textIdSubSub)].textUkrainian
        } else {
          const textIdSub = text.getAttribute('id').charAt(8)
          const textIdSubSub = text.getAttribute('id').charAt(10)
          text.innerHTML = posts[Number(textId)].subtopics[Number(textIdSub)].subtopics[Number(textIdSubSub)].textGerman;
          text.classList.add('german')
          text.classList.remove('ukrainian')
        }
  }
}});
}});



