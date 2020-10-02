let restaurant = {
    name: 'Sharks',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return (seatsLeft >= partySize)
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



restaurant.seatParty(70)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

console.log(restaurant.guestCount)
console.log(restaurant)

// restaurant.removeParty
// let status = restaurant.checkAvailability(40)
