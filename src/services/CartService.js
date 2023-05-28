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
}
export default CartService