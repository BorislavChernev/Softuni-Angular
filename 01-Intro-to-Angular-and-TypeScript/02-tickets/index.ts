class Ticket {
    public destination: string;
    public price: string;
    public status: string;

    constructor(destination: string, price: string, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

var tickets: Ticket[] = []; 

function input(strings: string[], criteria: string) {
    strings.forEach(s => {
        var args = s.split('|');
        var ticket: Ticket = new Ticket(args[0], args[1], args[2]);
        tickets.push(ticket);
    });
    
    if (criteria == "destination") {
        return tickets.sort((a, b) => a.destination.localeCompare(b.destination))
    } else if (criteria == "price") {
        return tickets.sort((a, b) => a.price.localeCompare(b.price))
    } else if (criteria == "status") {
        return tickets.sort((a, b) => a.status.localeCompare(b.status))
    };
}

console.log(input([
'Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'
],
'destination'
));
