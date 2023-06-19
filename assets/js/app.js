const url = "https://carambar-back.onrender.com/jokes"
const question  = document.getElementById("question")
const response  = document.getElementById("response")

const random = fetch(url+ "/randomJoke").then(result => 
  result.json()
).then((random) => {
  random.forEach(result => {
    question.innerHTML += $(result.question)
    response.innerHTML += $(result.response)
  })
})
