

const App = {
    data(){
        return {
            hello: 'hello',
            isVisible: false,
            inputName: '',
            names:[],
            error: '',
            showError: false
        }
    },
    methods:{
        addNameToList(){
            const userName = this.inputName.toUpperCase()
            if(this.validate(userName)){
                this.names.push(userName)
                this.inputName = ''
                this.showError = false
                console.log(this.names);
            }else{
                this.showError = true
            }
            
        },
        validate(value){
            this.error = ''
            if(value === ''){
                this.error = 'Sorry, no empty name dude!'
                return false
            }
            if(this.names.includes(value)){
                this.error = `Why ${value} again? It's not fair ahahah`
                return false
            }
            return true
            
        },
        removeName(index){
            this.names.splice(index,1)
        }
    }
}

Vue.createApp(App).mount('#app')