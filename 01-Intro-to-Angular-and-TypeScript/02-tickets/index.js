var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
var tickets = [];
function input(strings, criteria) {
    strings.forEach(function (s) {
        var args = s.split('|');
        var ticket = new Ticket(args[0], args[1], args[2]);
        tickets.push(ticket);
    });
    if (criteria == "destination") {
        return tickets.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
    }
    else if (criteria == "price") {
        return tickets.sort(function (a, b) { return a.price.localeCompare(b.price); });
    }
    else if (criteria == "status") {
        return tickets.sort(function (a, b) { return a.status.localeCompare(b.status); });
    }
    ;
}
console.log(input([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));
