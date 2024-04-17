
// Create a React application component that inputs a set of unordered transportation boarding cards and outputs a sorted journey itinerary. The component should visually present the ordered list of travel segments, handle user interactions for possibly modifying or reordering the journey, and accommodate different types of transportation.
 
// Sample Input (React Props)
 
// const boardingCards = [
//     { source: "Barcelona", destination: "London", details: "Bus XY789" },
//     { source: "New York", destination: "Sydney", details: "Flight AB456" },
//     { source: "Rome", destination: "Barcelona", details: "Ferry ZT567", seat: "B12" },
//     { source: "London", destination: "New York", details: "Flight XY789", seat: "C7" },
//     { source: "Paris", destination: "Rome", details: "Flight AB123", seat: "A23" }
// ];
 

// sammple Output = ["Take Flight AB123 from Paris to Rome. Seat A23,"
//      "Take Ferry ZT567 from Rome to Barcelona. Seat B12",
//      "Take Bus XY789 from Barcelona to London. No seat assignment",
//      "Take Flight XY789 from London to New York. Seat C7",
//      "Take Flight AB456 from New York to Sydney. No seat assignment"]
 
// Few expectations:
// Implementing the Sorting Logic
// Handling State Changes
// Designing for Reusability
// Handling edge cases and gracefull fail
 
const boardingCards = [
  { source: "Barcelona", destination: "London", details: "Bus XY789" },
  { source: "New York", destination: "Sydney", details: "Flight AB456" },
  {
    source: "Rome",
    destination: "Barcelona",
    details: "Ferry ZT567",
    seat: "B12",
  },
  {
    source: "London",
    destination: "New York",
    details: "Flight XY789",
    seat: "C7",
  },
  {
    source: "Paris",
    destination: "Rome",
    details: "Flight AB123",
    seat: "A23",
  },
]

const sources = boardingCards.reduce((acc, card) => {
    acc.push(card.source)
    return acc
},[])

const destinations = boardingCards.reduce((acc, card) => {
    acc.push(card.destination)
    return acc
},[])

initialSource = sources.filter(source => !destinations.includes(source))[0]
finalDestination = destinations.filter(dest => !sources.includes(dest))[0]

finalItinary = []
while(boardingCards.length>0){
    boardingCards.forEach((card, i) => {
        if(card.source === initialSource){ 
            finalItinary.push(`Take ${card.details} from ${card.details} to ${card.destination}. ${card.seat}`)
            initialSource = card.destination
            boardingCards.splice(i, 1)
        }
    })
}
console.log(finalItinary)
