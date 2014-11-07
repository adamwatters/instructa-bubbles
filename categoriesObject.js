;(function() {
    var categories = {
        "technology": [
            {
                "title": "3D-Printing",
                "display": "3D Printing"
            },
            {
                "title": "apple",
                "display": "Apple"
            },
            {
                "title": "arduino",
                "display": "Arduino"
            },
            {
                "title": "art",
                "display": "Art"
            },
            {
                "title": "assistive-technology",
                "display": "Assistive Tech"
            },
            {
                "title": "audio",
                "display": "Audio"
            },
            {
                "title": "biotech",
                "display": "Biotech"
            },
            {
                "title": "cell-phones",
                "display": "Cell Phones"
            },
            {
                "title": "clocks",
                "display": "Clocks"
            },
            {
                "title": "cnc",
                "display": "CNC"
            },
            {
                "title": "computers",
                "display": "Computers"
            },
            {
                "title": "digital-graphics",
                "display": "Digital Graphics"
            },
            {
                "title": "el-wire",
                "display": "EL Wire"
            },
            {
                "title": "electronics",
                "display": "Electronics"
            },
            {
                "title": "gadgets",
                "display": "Gadgets"
            },
            {
                "title": "kits",
                "display": "Kits"
            },
            {
                "title": "laptops",
                "display": "Laptops"
            },
            {
                "title": "lasers",
                "display": "Lasers"
            },
            {
                "title": "leds",
                "display": "LEDs"
            },
            {
                "title": "linux",
                "display": "Linux"
            },
            {
                "title": "microcontrollers",
                "display": "Microcontrollers"
            },
            {
                "title": "microsoft",
                "display": "Microsoft"
            },
            {
                "title": "photography",
                "display": "Photography"
            },
            {
                "title": "raspberry-pi",
                "display": "Raspberry Pi"
            },
            {
                "title": "remote-control",
                "display": "Remote Control"
            },
            {
                "title": "reuse",
                "display": "Reuse"
            },
            {
                "title": "robots",
                "display": "Robots"
            },
            {
                "title": "science",
                "display": "Science"
            },
            {
                "title": "sensors",
                "display": "Sensors"
            },
            {
                "title": "software",
                "display": "Software"
            },
            {
                "title": "soldering",
                "display": "Soldering"
            },
            {
                "title": "speakers",
                "display": "Speakers"
            },
            {
                "title": "steampunk",
                "display": "Steampunk"
            },
            {
                "title": "tools",
                "display": "Tools"
            },
            {
                "title": "usb",
                "display": "USB"
            },
            {
                "title": "wearables",
                "display": "Wearables"
            },
            {
                "title": "websites",
                "display": "Websites"
            },
            {
                "title": "wireless",
                "display": "Wireless"
            }
        ],
        "workshop": [
            {
                "title": "bookshelves",
                "display": "Bookshelves"
            },
            {
                "title": "cardboard",
                "display": "Cardboard"
            },
            {
                "title": "cars",
                "display": "Cars"
            },
            {
                "title": "compost",
                "display": "Compost"
            },
            {
                "title": "electric-vehicles",
                "display": "Electric Vehicles"
            },
            {
                "title": "energy",
                "display": "Energy"
            },
            {
                "title": "flatpack",
                "display": "Flatpack"
            },
            {
                "title": "furniture",
                "display": "Furniture"
            },
            {
                "title": "gardening",
                "display": "Gardening"
            },
            {
                "title": "home-renovation",
                "display": "Home Renovation"
            },
            {
                "title": "home-theater",
                "display": "Home Theater"
            },
            {
                "title": "hydroponics",
                "display": "Hydroponics"
            },
            {
                "title": "lamps",
                "display": "Lamps"
            },
            {
                "title": "lighting",
                "display": "Lighting"
            },
            {
                "title": "metalworking",
                "display": "Metalworking"
            },
            {
                "title": "motorcycles",
                "display": "Motorcycles"
            },
            {
                "title": "organizing",
                "display": "Organizing"
            },
            {
                "title": "pallets",
                "display": "Pallets"
            },
            {
                "title": "pest-control",
                "display": "Pest Control"
            },
            {
                "title": "rain-barrels",
                "display": "Rain Barrels"
            },
            {
                "title": "repair",
                "display": "Repair"
            },
            {
                "title": "solar",
                "display": "Solar"
            },
            {
                "title": "tools",
                "display": "Tools"
            },
            {
                "title": "woodworking",
                "display": "Woodworking"
            }
        ],
        "living": [
            {
                "title": "art",
                "display": "Art"
            },
            {
                "title": "beauty",
                "display": "Beauty"
            },
            {
                "title": "christmas",
                "display": "Christmas"
            },
            {
                "title": "cleaning",
                "display": "Cleaning"
            },
            {
                "title": "craft",
                "display": "Craft"
            },
            {
                "title": "decorating",
                "display": "Decorating"
            },
            {
                "title": "duct-tape",
                "display": "Duct Tape"
            },
            {
                "title": "education",
                "display": "Education"
            },
            {
                "title": "fashion",
                "display": "Fashion"
            },
            {
                "title": "finances",
                "display": "Finances"
            },
            {
                "title": "furnishing",
                "display": "Furnishing"
            },
            {
                "title": "green",
                "display": "Green"
            },
            {
                "title": "halloween",
                "display": "Halloween"
            },
            {
                "title": "health",
                "display": "Health"
            },
            {
                "title": "holidays",
                "display": "Holidays"
            },
            {
                "title": "jewelry",
                "display": "Jewelry"
            },
            {
                "title": "kids",
                "display": "Kids"
            },
            {
                "title": "kitchen",
                "display": "Kitchen"
            },
            {
                "title": "life-hacks",
                "display": "Life Hacks"
            },
            {
                "title": "life-skills",
                "display": "Life Skills"
            },
            {
                "title": "organizing",
                "display": "Organizing"
            },
            {
                "title": "paper",
                "display": "Paper"
            },
            {
                "title": "parenting",
                "display": "Parenting"
            },
            {
                "title": "pets",
                "display": "Pets"
            },
            {
                "title": "print making",
                "display": "Print Making"
            },
            {
                "title": "relationships",
                "display": "Relationships"
            },
            {
                "title": "reuse",
                "display": "Reuse"
            },
            {
                "title": "sewing",
                "display": "Sewing"
            },
            {
                "title": "travel",
                "display": "Travel"
            },
            {
                "title": "yarn",
                "display": "Yarn"
            }
        ],
        "food": [
            {
                "title": "bacon",
                "display": "Bacon "
            },
            {
                "title": "bbq-and-grilling",
                "display": "BBQ & Grilling"
            },
            {
                "title": "beverages",
                "display": "Beverages"
            },
            {
                "title": "bread",
                "display": "Bread"
            },
            {
                "title": "breakfast",
                "display": "Breakfast"
            },
            {
                "title": "cake",
                "display": "Cake"
            },
            {
                "title": "cake-decorating",
                "display": "Cake Decorating"
            },
            {
                "title": "candy",
                "display": "Candy"
            },
            {
                "title": "canning-and-preserves",
                "display": "Canning and Preserves"
            },
            {
                "title": "cocktails-and-mocktails",
                "display": "Cocktails and Mocktails"
            },
            {
                "title": "cookies",
                "display": "Cookies"
            },
            {
                "title": "cupcakes",
                "display": "Cupcakes"
            },
            {
                "title": "dessert",
                "display": "Dessert"
            },
            {
                "title": "homebrew",
                "display": "Homebrew"
            },
            {
                "title": "main-course",
                "display": "Main Course"
            },
            {
                "title": "pasta",
                "display": "Pasta"
            },
            {
                "title": "pie",
                "display": "Pie"
            },
            {
                "title": "pizza",
                "display": "Pizza"
            },
            {
                "title": "salad",
                "display": "Salad"
            },
            {
                "title": "sandwiches",
                "display": "Sandwiches"
            },
            {
                "title": "snacks-and-appetizers",
                "display": "Snacks and Appetizers"
            },
            {
                "title": "soups-and-stews",
                "display": "Soups and Stews"
            },
            {
                "title": "vegetarian-and-vegan",
                "display": "Vegetarian and Vegan"
            }
        ],
        "play": [
            {
                "title": "airsoft",
                "display": "Airsoft"
            },
            {
                "title": "card-games",
                "display": "Card Games"
            },
            {
                "title": "costumes",
                "display": "Costumes"
            },
            {
                "title": "guitars",
                "display": "Guitars"
            },
            {
                "title": "instruments",
                "display": "Instruments"
            },
            {
                "title": "knex",
                "display": "K'NEX"
            },
            {
                "title": "lego",
                "display": "LEGO"
            },
            {
                "title": "magic-tricks",
                "display": "Magic Tricks"
            },
            {
                "title": "minecraft",
                "display": "Minecraft"
            },
            {
                "title": "music",
                "display": "Music"
            },
            {
                "title": "nerf",
                "display": "Nerf"
            },
            {
                "title": "nintendo",
                "display": "Nintendo"
            },
            {
                "title": "offbeat",
                "display": "Offbeat"
            },
            {
                "title": "office-supplies",
                "display": "Office Supplies"
            },
            {
                "title": "paintball",
                "display": "Paintball"
            },
            {
                "title": "paper-airplanes",
                "display": "Paper Airplanes"
            },
            {
                "title": "party-tricks",
                "display": "Party Tricks"
            },
            {
                "title": "playstation",
                "display": "PlayStation"
            },
            {
                "title": "pranks-and-humor",
                "display": "Pranks and Humor"
            },
            {
                "title": "props",
                "display": "Props"
            },
            {
                "title": "puzzles",
                "display": "Puzzles"
            },
            {
                "title": "rockets",
                "display": "Rockets"
            },
            {
                "title": "siege-engines",
                "display": "Siege Engines"
            },
            {
                "title": "sports",
                "display": "Sports"
            },
            {
                "title": "table-top",
                "display": "Table Top"
            },
            {
                "title": "toys",
                "display": "Toys"
            },
            {
                "title": "video-games",
                "display": "Video Games"
            },
            {
                "title": "wallets",
                "display": "Wallets"
            },
            {
                "title": "wii",
                "display": "Wii"
            },
            {
                "title": "xbox",
                "display": "Xbox"
            },
            {
                "title": "yo-yo",
                "display": "Yo-Yo"
            }
        ],
        "outside": [
            {
                "title": "Birding",
                "display": "Birding"
            },
            {
                "title": "bikes",
                "display": "Bikes"
            },
            {
                "title": "boats",
                "display": "Boats"
            },
            {
                "title": "camping",
                "display": "Camping"
            },
            {
                "title": "fishing",
                "display": "Fishing"
            },
            {
                "title": "kites",
                "display": "Kites"
            },
            {
                "title": "knives",
                "display": "Knives"
            },
            {
                "title": "knots",
                "display": "Knots"
            },
            {
                "title": "paracord",
                "display": "Paracord"
            },
            {
                "title": "skateboarding",
                "display": "Skateboarding"
            },
            {
                "title": "snow",
                "display": "Snow"
            },
            {
                "title": "survival",
                "display": "Survival"
            },
            {
                "title": "water",
                "display": "Water"
            }
        ]
    };

    var getCategoriesObject = function () {
        return categories;
    };

    exports.getCategoriesObject = getCategoriesObject;

})();



