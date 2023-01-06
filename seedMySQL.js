var mysql = require('mysql2');

var drop = 'TRUNCATE TABLE cars;'
var seedQuery = 'INSERT INTO cars (title, nick, avatar, about) VALUES ("Toyota Supra A70", "supra", "/images/supraa70.jpg", "In February 1986, the bonds between the Celica and the Supra were cut; they were now two completely different models. The Celica changed to a front-wheel drive layout, using the Toyota T platform associated with the Corona, while the Supra kept its rear-wheel-drive layout. The engine was updated to a more powerful 2,954 cc (3.0 L) inline-six engine rated at 149 kW (200 hp; 203 PS). Although initially only available with naturally aspirated engines, a turbocharged version was added in the 1987 model year. The Supra was now mechanically related to the Soarer."), ("Nissan S130z", "nissans130z", "/images/nissans130z.jpg", "The Nissan S130 is a sports coupé produced by Nissan in Japan from 1978 until 1983. It was sold as the Datsun 280ZX, Nissan Fairlady Z and Nissan Fairlady 280Z, depending on the market. In Japan, it was exclusive to Nissan Bluebird Store locations. It was the second generation Z-car, replacing the Nissan S30 in late 1978. The 280ZX was the first time the by Nissan subscript was badged alongside the Datsun logo, along with Nissan trucks. The 280ZX was Motor Trends import car of the year for 1979. The 280ZX was replaced by the Nissan 300ZX in 1984."), ("Porsche 930 Turbo", "porsche930turbo", "/images/porsche930turbo.jpg", "he Porsche 930 is a sports car manufactured by German automobile manufacturer Porsche between 1975 and 1989, known to the public as the 911 Turbo. It was the makers top-of-the-range 911 model for its entire production duration and, at the time of its introduction, was the fastest production car available in Germany.");'

var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'wtpfhm123',
database: 'midnightclub'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})