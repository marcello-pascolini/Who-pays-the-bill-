const App = {
    data(){
        return {    
            inputName: '',
            names:[],
            error: '',
            showError: false,
            step1: true,
            step2: false,
            result: ''
        }
    },
    computed: {
        isReady(){
            return this.names.length > 1
        }
    }
    ,
    methods:{
        addNameToList(){
            const userName = this.inputName.toUpperCase()
            if(this.validate(userName)){
                this.names.push(userName)
                this.inputName = ''
                this.showError = false
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
        },
        getRandomName(){
            return this.names[Math.floor(Math.random() * this.names.length)]
        }
        ,
        generateResult(){
            let randomName = this.getRandomName()
            this.result = randomName
        }
        ,
        showResult(){
            
            this.step1 = false
            this.step2 = true
            this.generateResult()
        },
        resetApp(){
            this.step2 = false
            this.step1 = true
            this.names = []
            this.result = ''
        }
    }
}

Vue.createApp(App).mount('#app')