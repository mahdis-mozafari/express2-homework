const div = document.querySelector('.div')
const parentDiv=document.querySelector('main')
async function fetchData(){
   const data = await fetch('http://localhost:3000/')
   .then((res)=>{
    // const res1 = await res.json()
    return res.json()
    })
    .then((res)=>{
        res.map((e)=>{
         const div = document.createElement('div')
         const h2 = document.createElement('h2')
         const p = document.createElement('p')


         h2.textContent=e.title;
         p.textContent =e.post;

         div.appendChild(h2)
         div.appendChild(p)
         parentDiv.appendChild(div)
         
        })
    })
} 

fetchData()