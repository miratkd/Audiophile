class CartService {
    constructor () {
        const savedList = localStorage.getItem('cartList')
        if (savedList) this.products = JSON.parse(savedList)
        else this.products = []
    }

    addProduct (product) {
        let repeated = false
        for (let index = 0; index < this.products.length; index++) {
            if (this.products[index].id == product.id) {
                this.products[index].quantity += product.quantity
                repeated = true
            }
        }

        if (!repeated) this.products.push(product)
        
        localStorage.setItem('cartList', JSON.stringify(this.products));
    }

    getProducts () {
        return this.products
    }

    cleanProducts () {
        localStorage.removeItem('cartList')
        this.products = []
    }

    getTotal () {
        let total = 0
        for (let index = 0; index < this.products.length; index++) {
            const element = this.products[index];
            total += element.price * element.quantity
        }
        return total
    }

    getShipping () {
        return (this.products.length * 35) + 15
    }
}
export default CartService