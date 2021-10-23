
const app = new Vue({
    el: '#app',
    data: {
        energy: 3,
        round: 1
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
        }
    },
    watch: {
        energy(val){
            if( val > 10){
                this.energy = 10;
            }
        }
    }
})