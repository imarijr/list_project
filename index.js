const form=document.querySelector('#userForm')





const renderListItem = function(hero,ability)
    {
        
       const Item = document.createElement('li')
      
       
       const name = document.createElement('li')
       name.textContent = hero
       const button = document.createElement("button")
       button.innerHTML = "X"
       name.appendChild(button)
       
       Item.appendChild(name)

       //const description = document.createElement('dd')
      // description.textContent = ability
        

      document.getElementById("users").addEventListener("click", removeItem());   
        return Item
       
      
        
        }
    

const renderList = function(data)
{
    const list = document.createElement('dl')
     const labels = Object.keys(data)
    labels.forEach(label =>
    {
       const item = renderListItem(label,data[label])
       list.appendChild(item)
    })

    return list
}
   
const handleSubmit = function(ev){
    ev.preventDefault()
    
    const f = ev.target

    const user ={
        Name:f.heroName.value,
        
        
    }

          

    const users=document.querySelector('#users')
    users.appendChild(renderList(user))
    
    f.reset()
    f.heroName.focus()
}
function removeItem(){
        delete user.Name 
    }

    
    

 form.addEventListener('submit', handleSubmit )
 




