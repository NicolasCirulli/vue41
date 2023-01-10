const { createApp } = Vue
createApp( {
    data(){
        return {
            personajes : [],
            casas : [],
            valorBusqueda: "",
            checked: [],
            personajesFiltrados : []
        }
    },
    created(){
        fetch('https://hp-api.onrender.com/api/characters/students')
            .then( respuesta => respuesta.json() )
            .then( datos => {
                this.personajes = datos.filter( personaje => personaje.house )
                this.personajesFiltrados = [ ...this.personajes]
                this.casas = [ ...new Set( this.personajes.map( personaje => personaje.house ) ) ]
            } )
            .catch( )   
    },
    methods: {
        /* filtroCruzado: function(){
            let filtradoPorBusqueda = this.personajes.filter( personaje => personaje.name.toLowerCase().includes( this.valorBusqueda.toLowerCase()))
            if( this.checked.length === 0 ){
                this.personajesFiltrados = filtradoPorBusqueda
            }else{
                let filtradosPorCheck = filtradoPorBusqueda.filter( personaje => this.checked.includes( personaje.house ))
                this.personajesFiltrados = filtradosPorCheck 
            }
        } */ 
    },
    computed: {
        filtroCruzado: function(){
            let filtradoPorBusqueda = this.personajes.filter( personaje => personaje.name.toLowerCase().includes( this.valorBusqueda.toLowerCase()))
            if( this.checked.length === 0 ){
                this.personajesFiltrados = filtradoPorBusqueda
            }else{
                let filtradosPorCheck = filtradoPorBusqueda.filter( personaje => this.checked.includes( personaje.house ))
                this.personajesFiltrados = filtradosPorCheck 
            }
        }
    }


} ).mount("#app")

