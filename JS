let pix = document.querySelector('.pixel')
for (let i = 0; i <= 400;i++){

    let row = document.createElement('div')
    row.classList.add('eac')
    pix.appendChild(row)
    row.id = i
}
let flack = false
document.addEventListener('mousedown' , function(event){
    if(event.target.classList.contains('eac')){
        event.target.style.backgroundColor = last_color
        flack = true}
})
document.addEventListener('mousemove' ,function(event){
    if(event.target.classList.contains('eac') && flack == true){
        event.target.style.backgroundColor = last_color}
})
document.addEventListener('mouseup' , function(event){
    flack = false})


let last_color = ''
document.querySelector('.red').addEventListener('click' , function(){   
    last_color = 'red'
})
document.querySelector('.black').addEventListener('click' , function(){  
    last_color = 'black'
})
document.querySelector('.green').addEventListener('click' , function(){
    last_color = 'green'
})
document.querySelector('.blue').addEventListener('click' , function(){ 
    last_color = 'blue'
})
document.querySelector('.pink').addEventListener('click' , function(){
    last_color = 'pink'
})
document.querySelector('.purple').addEventListener('click' , function(){ 
    last_color = 'purple'
})
document.querySelector('.orange').addEventListener('click' , function(){  
    last_color = 'orange'
})
document.querySelector('.while').addEventListener('click' , function(){ 
    last_color = 'white'
})
document.querySelector('.clear').addEventListener('click' , function(){
    last_color = '#858585'
})
document.querySelector('.not_clear').addEventListener('click' , function(){
    let pix_eat = document.querySelectorAll('.eac')
    pix_eat.forEach(function(i){
        i.style.backgroundColor = last_color
    } )
})
pix.addEventListener('click', function(event){
    if(event.target.classList.contains('eac')){
        event.target.style.backgroundColor = last_color
    }
})

function save_pix(){
    let color_pix = ''
    p_c = document.querySelectorAll('.eac')
    p_c.forEach((ios)=>{
        let id_px = ios.id
        let id_pc = getComputedStyle(ios).backgroundColor
        let id_pc_1 = ''
        
    if (id_pc === 'rgb(255, 0, 0)') { // red
            id_pc = '1';
        } else if (id_pc === 'rgb(0, 0, 0)') { // black
            id_pc = '2';
        } else if (id_pc === 'rgb(0, 128, 0)') { // green
            id_pc = '3';
        } else if (id_pc === 'rgb(0, 0, 255)') { // blue
            id_pc = '4';
        } else if (id_pc === 'rgb(255, 192, 203)') { // pink
            id_pc = '5';
        } else if (id_pc === 'rgb(128, 0, 128)') { // purple
            id_pc = '6';
        } else if (id_pc === 'rgb(255, 165, 0)') { // orange
            id_pc = '7';
        }else {
            id_pc = '9'
            }
        color_pix +=  id_px +'-'+ id_pc +',' })
        
        document.cookie = 'pixel_save='+color_pix+';max age 1234567890987654321234567890'
}
     


function lot_pix (){
    let lot_gg = document.cookie.split(';')
    console.log(lot_gg)
    let fuind_cooke = lot_gg.find(not_vagno=>not_vagno.startsWith('pihel_save='))
    if (fuind_cooke){
        let retur_cooket = fuind_cooke.split('=')[1]
        let id__id_color = retur_cooket.split(',')
        id__id_color.forEach((i)=>{
            let i_sp = i.split('-')
            let peremrnn = document.getElementById(i_sp[0])
            if (i_sp[0] == '1' ){
                peremrnn.style.backgroundColor = 'red'
            }
            if (i_sp[1] == '2' ){
                peremrnn.style.backgroundColor = 'black'
            }
            if (i_sp[2] == '3' ){
                peremrnn.style.backgroundColor = 'green'
            }    
            if (i_sp[3] == '4' ){
                peremrnn.style.backgroundColor = 'blue'
            }            
            if (i_sp[4] == '5' ){
                peremrnn.style.backgroundColor = 'pink'
            }            
            if (i_sp[5] == '6' ){
                peremrnn.style.backgroundColor = 'purple'
            }            
            if (i_sp[6] == '7' ){
                peremrnn.style.backgroundColor = 'orange'
            }            
            if (i_sp[7] == '8' ){
                peremrnn.style.backgroundColor = 'rgb(133, 133, 133)'
            } 
          

        


        })
    }
}

document.querySelector('.downing').addEventListener('click' , function(){
    let pixeled = document.querySelector('.pixel')
    domtoimage.toPng(pixeled)
    .then(function (blob){

        let https = document.createElement('a')
        https.href = blob
        https.download = 'pixel.png'
        https.click()
    })


})

document.querySelector('.button').addEventListener('click' , function(){
    let pix_cr = document.querySelector('.pixel_cr')
    pix_cr.style.opacity = 100
    let title = document.querySelector('.title')  
    title.style.display = 'none'
})
    

setInterval(save_pix,5000)
window.addEventListener('load', lot_pix)
