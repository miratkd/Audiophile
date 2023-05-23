import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'XX99 Mark II Headphones',
        isNewProduct: true,
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        price: 2999,
        features: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
        inTheBox: [
          { qty: 1, text: 'Headphone Unit'},
          { qty: 2, text: 'Replacement Earcups'},
          { qty: 1, text: 'User Manual'},
          { qty: 1, text: '3.5mm 5m Audio Cable'},
          { qty: 1, text: 'Travel Bag'}
        ],
        mainImg: require('@/assets/productImgs/xx99MainImg.svg'),
        img1: require('@/assets/productImgs/xx99img1.svg'),
        img2: require('@/assets/productImgs/xx99img2.svg'),
        img3: require('@/assets/productImgs/xx99img3.svg'),
      },
      {
        id: 2,
        name: 'XX99 Mark I Headphones',
        isNewProduct: false,
        description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
        price: 1750,
        features: 'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
        inTheBox: [
          { qty: 1, text: 'Headphone Unit'},
          { qty: 2, text: 'Replacement Earcups'},
          { qty: 1, text: 'User Manual'},
          { qty: 1, text: '3.5mm 5m Audio Cable'}
        ],
        mainImg: require('@/assets/productImgs/mark1MainImg.svg'),
        img1: require('@/assets/productImgs/mark1img1.svg'),
        img2: require('@/assets/productImgs/mark1img2.svg'),
        img3: require('@/assets/productImgs/mark1img3.svg'),
      },
      {
        id: 3,
        name: 'XX59 Headphones',
        isNewProduct: false,
        description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        price: 899,
        features: 'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
        inTheBox: [
          { qty: 1, text: 'Headphone Unit'},
          { qty: 2, text: 'Replacement Earcups'},
          { qty: 1, text: 'User Manual'},
          { qty: 1, text: '3.5mm 5m Audio Cable'}
        ],
        mainImg: require('@/assets/productImgs/xx59MainImg.svg'),
        img1: require('@/assets/productImgs/xx59img1.svg'),
        img2: require('@/assets/productImgs/xx59img2.svg'),
        img3: require('@/assets/productImgs/xx59img3.svg'),
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
