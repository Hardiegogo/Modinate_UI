const dropdownBtn=document.querySelector('#dropdown-arrow');
const dropdownList=document.querySelector('.sidebar-list')
const sidebarItems=document.querySelectorAll('.sidebar-list-item')

dropdownBtn.addEventListener('click',()=>{
    dropdownList.classList.toggle('hide')
    dropdownBtn.classList.toggle('rotate-arrow')
    
})

sidebarItems.forEach((sidebarItem)=>{
    sidebarItem.addEventListener('click',(el)=>{
     
        dropdownList.classList.toggle('hide')
    })
})
