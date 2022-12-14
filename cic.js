const principalInput = document.querySelector("#principal")
const interestInput = document.querySelector("#interest")
const compoundInput = document.querySelector("#compound")
const yearsInput = document.querySelector("#years")
const profitFinal = document.querySelector("#profit")

principalInput.addEventListener("input", calculate)
interestInput.addEventListener("input", calculate)
compoundInput.addEventListener("input", calculate)
yearsInput.addEventListener("input", calculate)

function calculate() {
  const principalVal = Number(principalInput.value)
  const interestVal = Number(interestInput.value)
  const compoundVal = Number(compoundInput.value)
  const yearsVal = Number(yearsInput.value)
  const compoundInterest =
    principalVal * Math.pow(1 + interestVal / 100 / compoundVal, compoundVal * yearsVal)

  var profitAmount = compoundInterest - principalVal
  profitFinal.textContent = Number.parseFloat(profitAmount).toFixed(2)
}
