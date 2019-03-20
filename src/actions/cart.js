import _ from 'lodash'

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

class Cart_ {

    addToCart = (item) => {
        let cart = localStorage.getObj("cart");
        cart.push(item);
        console.log(JSON.stringify(cart));
        if(cart == null) {
            cart = [ item ];
            localStorage.setObj("cart", cart);
        }
        else {
            localStorage.setObj("cart", cart);
        }
    }

    removeFromCart = (printful_id) => {
        let cart = localStorage.getObj("cart");
        console.log(cart);
        for(let i = 0; cart.length > i; i++) {
            if(cart[i].printful_variant_id == printful_id) {
                cart.splice(i,1)
                window.localStorage.setObj("cart", cart);
            }
        }
    }

    modifyQuantity = (item, quantity) => {

        let cart = window.localStorage.getObj("cart");
        for(let i = 0; cart.length > i; i++) {

            if(cart[i].printful_variant_id == item.printful_variant_id) {
                console.log(cart[i].quantity);
                cart[i].quantity = quantity;
                console.log(cart[i].quantity);
                window.localStorage.setObj("cart", cart);
            }
        }
    }

    getCart = () => {
        return localStorage.getObj("cart");
    }

    clearCart = () => {
        localStorage.setObj("cart", [ ])
    }
}

export default new Cart_;