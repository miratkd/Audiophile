import { createStore } from 'vuex'
import CartService from '@/services/CartService'

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
        recomentationList: [2, 3, 4]
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
        recomentationList: [1, 3, 4]
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
        recomentationList: [1, 2, 4]
      },
      {
        id: 4,
        name: 'ZX9 SPEAKER',
        isNewProduct: true,
        description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
        price: 4500,
        features: 'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
        inTheBox: [
          { qty: 2, text: 'Speaker Unit'},
          { qty: 2, text: 'Speaker Cloth Panel'},
          { qty: 1, text: 'User Manual'},
          { qty: 1, text: '3.5mm 5m Audio Cable'},
          { qty: 1, text: '10m Optical Cable'}
        ],
        mainImg: require('@/assets/productImgs/zx9MainImg.svg'),
        img1: require('@/assets/productImgs/zx9img1.svg'),
        img2: require('@/assets/productImgs/zx9img2.svg'),
        img3: require('@/assets/productImgs/zx9img3.svg'),
        recomentationList: [5, 2, 3]
      },
      {
        id: 5,
        name: 'ZX7 SPEAKER',
        isNewProduct: false,
        description: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
        price: 3500,
        features: 'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
        inTheBox: [
          { qty: 2, text: 'Speaker Unit'},
          { qty: 2, text: 'Speaker Cloth Panel'},
          { qty: 1, text: 'User Manual'},
          { qty: 1, text: '3.5mm 5m Audio Cable'},
          { qty: 1, text: '10m Optical Cable'}
        ],
        mainImg: require('@/assets/productImgs/zx7MainImg.svg'),
        img1: require('@/assets/productImgs/zx7img1.svg'),
        img2: require('@/assets/productImgs/zx7img2.svg'),
        img3: require('@/assets/productImgs/zx7img3.svg'),
        recomentationList: [4, 2, 3]
      },
      {
        id: 6,
        name: 'YX1 WIRELESS EARPHONES',
        isNewProduct: true,
        description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
        price: 599,
        features: 'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
        inTheBox: [
          { qty: 2, text: 'Earphone Unit'},
          { qty: 6, text: 'Multi-size Earplugs'},
          { qty: 1, text: 'User Manual'},
          { qty: 1, text: 'USB-C Charging Cable'},
          { qty: 1, text: 'Travel Pouch'}
        ],
        mainImg: require('@/assets/productImgs/yx1MainImg.svg'),
        img1: require('@/assets/productImgs/yx1img1.svg'),
        img2: require('@/assets/productImgs/yx1img2.svg'),
        img3: require('@/assets/productImgs/yx1img3.svg'),
        recomentationList: [2, 3, 4]
      }
    ],
    showCart: false,
    cartService: new CartService()
  },
  getters: {
    getProductByID: (state) => (id) => {
      for (let index = 0; index < state.products.length; index++) {
        const element = state.products[index];
        if (element.id == id) return element
      }
    }
  },
  mutations: {
    updateShowCart (state, value) {
      state.showCart = value
    }
  },
  actions: {
  },
  modules: {
  }
})
