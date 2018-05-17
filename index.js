const app = {
    init(selectors){
        this.hw = []
        this.max = 0
        this.list = document.querySelector(selectors.formSelector)
        this.template = document.querySelector(selectors.templateSelector)

        document
        .querySelector(selectors.formSelector)
        .addEventListener('submit', (ev)=> {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    },

    renderListItem(hw){
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = hw.id
        item.querySelector('.hwName').textContent = hw.name
        return item
    },

    handleSubmit(ev){
        
        const f = ev.target
        const hw = {
            id:++this.max,
            name: f.hwName.value,
        }

        this.hw.unshift(hw)

        

        const item = this.renderListItem(hw)
        this.list.insertBefore(item, this.list.firstChild)
        f.reset()
    },
}

app.init({
    formSelector: '#hwForm',
    listSelector: '#hwList',
    templateSelector:'.hw.template',
})
