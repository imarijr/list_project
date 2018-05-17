const app = {
    init(selectors){
        this.hw = []
        this.max = 0
        this.list = document.querySelector(selectors.formSelector)

        document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', (ev)=> {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    },

    renderListItem(hw){
        const item = document.createElement('li')
        item.textContent= hw.name
        return item
    },

    handleSubmit(ev){
        
        const f = ev.target
        const hw = {
            id:++this.max,
            name: f.hwName.value,
        }

        this.hw.push(hw)

        const item = this.renderListItem(hw)
        this.list.appendChild(item)
        f.reset()
    },
}

app.init({
    formSelector: '#hwForm',
    listSelector: '#hwList'
})
