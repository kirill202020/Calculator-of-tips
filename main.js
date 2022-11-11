const bill = document.getElementById('bill'),
      personCount = document.getElementById('people'),
      totalAmount = document.getElementById('total__amount'),
      totalPerson = document.getElementById('total__person'),
      customTips = document.getElementById('custom-tips'),
      btn = document.querySelector('.reset-btn'),
      radioBtn = document.querySelectorAll('.tip__radio')


let tipPercent = 5

const updateTips = (radio) =>{
    if (bill.value && personCount.value) {
        let tips = (bill.value * tipPercent)/100
        totalAmount.innerHTML = (tips / personCount.value).toFixed(2)
        totalPerson.innerHTML = ((bill.value*1 + tips*1) / personCount.value*1).toFixed(2)
}}


radioBtn.forEach(radio => {
    radio.addEventListener('click', () =>{
        if (radio) {
            tipPercent = radio.value
            updateTips()
        }
})});


bill.addEventListener('input', updateTips)


personCount.addEventListener('input', updateTips)

updateTips()


customTips.addEventListener('input', () =>{
    if (customTips) {}
    tipPercent = customTips.value
    updateTips()
})


btn.addEventListener('click', () =>{
    totalAmount.innerHTML = '0:00'
    totalPerson.innerHTML = '0:00'
    bill.value = ''
    personCount.value = ''
    radioBtn[0].checked
})


customTips