
const app = new Vue({
    el: '#app',
    data: {
        energy: 3,
        round: 1,
        history: [{round: 1, energy: 3}]
    },
    methods: {
        add_energy: function(){
            this.energy ++
        },
        subtract_energy: function(){
            this.energy --
        },
        next_round: function(){
            this.energy += 2;
            this.round += 1
        },
        new_game: function(){
            this.energy = 3;
            this.round = 1;
            this.history = [];
        }
    },
    watch: {
        energy(val){
            if( val > 10){
                this.energy = 10;
            }
        },
        round(val){
            this.history.push({round: val, energy:this.energy})
        }
    }
})