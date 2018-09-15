let cust = {}

// id is number - writeable false
// name - writeable false
// shipping_address - writeable true
// customer_category - enumerable and writeable false
// order_items (object) where key is item name, value will be item quantity
// print function

Object.defineProperties(
    cust,
    {
        id: {
            value: 1,
            writable: false
        },
        name: {
            value: "Riya Sharma",
            writable: false
        },
        shipping_address: {
            value: "Nerul",
            writable: true
        },
        customer_category: {
            value: "gold",
            enumerable: false,
            writable: false,
        },
        order_items: {
            value: {
                toothpaste: 1,
                toothbrush: 3,
                soap: 6
            }
        },
        print: {
            value: function() {
                console.log(`Customer ID: ${this.id} \nName: ${this.name} \nAddress: ${this.shipping_address} \n`);

                console.log("*** Order items ***");                
                for (key in this.order_items) {
                    console.log(`${key} - ${this.order_items[key]}`);
                }
            },
            writable: false,
            configurable:false
        }
    }
)

cust.print();

