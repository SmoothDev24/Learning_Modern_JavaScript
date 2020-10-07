let restaurant = {
    name: 'Sharks',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        if (this.guestCapacity >= partySize){
            let seatsLeft = this.guestCapacity - this.guestCount
            return (seatsLeft >= partySize)
        }else{
            console.log("Regrettably our restaurant cannot host a your group because you have too many people in your party.")
        }
        
    },
    seatParty: function (partySize) {
        this.guestCount = partySize + this.guestCount
        
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
        
    },
    empty: function () {
        this.guestCount = 0    
    }
}



restaurant.seatParty(72)
console.log(restaurant.checkAvailability(5))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

console.log(restaurant.guestCount)
console.log(restaurant)

// restaurant.removeParty
// let status = restaurant.checkAvailability(40)
