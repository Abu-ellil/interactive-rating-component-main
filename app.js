const howSc = document.querySelector('.how')
const thankYou = document.querySelector('.thank-you')
const num = document.getElementById('rateNum')
const allBtn = document.querySelectorAll('.btn')
const sub = document.getElementById('sub')
const again = document.getElementById('again')


console.log(allBtn);

sub.addEventListener('click',function(){
  howSc.classList.add('hidden')
    thankYou.classList.remove('hidden')
})

again.addEventListener('click',function(){
  howSc.classList.remove('hidden')
    thankYou.classList.add('hidden')
})

allBtn.forEach((btn)=>{
  btn.addEventListener('click', function(){
    num.innerText =`${btn.innerHTML}`
  })
})
