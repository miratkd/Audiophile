import { createStore } from 'vuex'
import CartService from '@/services/CartService'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'XX99 Mark II Headphones',
        isNewProduct: true,
        description: 'Os novos headphones XX99 Mark II são o pináculo do áudio puro. Ele redefine sua experiência premium de fone de ouvido, reproduzindo a profundidade equilibrada e a precisão do som com qualidade de estúdio.',
        price: 2999,
        features: 'Com uma pulseira de couro genuíno para a cabeça e fones de ouvido premium, esses headphones oferecem conforto superior para aqueles que gostam de desfrutar de uma audição infinita. Ele inclui controles intuitivos projetados para qualquer situação. Seja para receber uma chamada de negócios ou apenas no seu próprio espaço pessoal, as funcionalidades de ligar/desligar e pausar automaticamente garantem que você nunca vai perder nada. O avançado Cancelamento Ativo de Ruído com equalizador integrado permite que você experimente seu mundo de áudio em seus termos. Ele permite que você aproveite seu áudio em paz, mas interaja rapidamente com seus arredores quando precisar. Combinado com Bluetooth 5. Conectividade compatível com 0 e duração da bateria de 17 horas, os headphones XX99 Mark II proporcionam som superior, tecnologia de ponta e uma estética de design moderna.',
        inTheBox: [
          { qty: 1, text: 'Headphone '},
          { qty: 2, text: 'Earcups extras'},
          { qty: 1, text: 'Manual de usuário'},
          { qty: 1, text: 'Cabo 3.5mm 5m'},
          { qty: 1, text: 'Estojo para viagens'}
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
        description: 'Como padrão ouro para fones de ouvido, o clássico XX99 Mark I oferece reprodução de áudio detalhada e precisa para audiófilos, engenheiros de mixagem e aficionados por música em estúdios ou em qualquer outro lugar.',
        price: 1750,
        features: 'A referencia pra qual todos os outros fones de ouvido são medidos, o XX99 Mark I demonstra mais de cinco décadas de experiência em áudio, redefinindo a experiência de audição crítica. Este par de fones de ouvido traseiros fechados são feito de materiais industriais de grau aeroespacial para enfatizar a durabilidade a um peso relativamente leve de 11 oz. Das almofadas de microfibra artesanais à robusta faixa de metal para a cabeça com elemento de amortecimento interno, os componentes trabalham juntos para oferecer conforto e som intransigente. Seu design traseiro fechado oferece até 27 dB de cancelamento passivo de ruído, reduzindo a ressonância ao refletir o som para um absorvedor dedicado. Para conectividade, um cabo especialmente ajustado é incluído com um conector dourado banhado.',
        inTheBox: [
          { qty: 1, text: 'Headphone '},
          { qty: 2, text: 'Earcups extras'},
          { qty: 1, text: 'Manual de usuário'},
          { qty: 1, text: 'Cabo 3.5mm 5m'}
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
        description: 'Desfrute do seu áudio em praticamente qualquer lugar e personalize-o de acordo com os seus gostos específicos com os headphones XX59. O fone de ouvido sem fio elegante, durável e versátil é um companheiro brilhante em casa ou em qualquer lugar.',
        price: 899,
        features: 'Estes headphones foram criados a partir de materiais duráveis e de alta qualidade, resistentes o suficiente para levar para qualquer lugar. Seu design compacto e dobrável combina conforto e estilo minimalista, tornando-o perfeito para viagens. A transmissão impecável é garantida pela mais recente tecnologia sem fio projetada para sincronização de áudio com vídeos. Mais do que um simples par de headphones, ele possui um par de microfones integrados para chamadas claras e mãos-livres quando emparelhado com um smartphone compatível. O controle de músicas e chamadas também é intuitivo graças aos botões de toque de fácil acesso nos fones de ouvido. Independentemente da forma como utiliza os headphones XX59, pode fazê-lo durante todo o dia graças a uma impressionante autonomia de bateria de 30 horas que pode ser rapidamente recarregada via USB-C.',
        inTheBox: [
          { qty: 1, text: 'Headphone'},
          { qty: 2, text: 'Earcups extras'},
          { qty: 1, text: 'Manual de usuário'},
          { qty: 1, text: 'Cabo 3.5mm 5m'}
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
        description: 'Atualize seu sistema de som com o novo alto-falante ativo ZX9. É um sistema de alto-falantes de prateleira que oferece conectividade verdadeiramente sem fio - criando novas possibilidades para configurações de áudio mais agradáveis e práticas.',
        price: 4500,
        features: 'Conecte-se via Bluetooth ou qualquer fonte com fio. Este alto-falante possui entradas ópticas, coaxiais digitais, USB Tipo-B, RCA estéreo e XLR estéreo, permitindo que você tenha até cinco dispositivos de fonte com fio conectados para facilitar a comutação. A tecnologia bluetooth melhorada oferece uma qualidade de áudio quase sem perdas a até 328 pés (100 metros). Igualmente importante é o seu poderoso baixo que agita a sala, cortesia de uma unidade de baixo de liga de alumínio de 6,5". Você poderá desfrutar de uma qualidade de som realista, seja em uma sala grande ou em uma pequena toca. Além disso, você experimentará novas sensações de músicas antigas, uma vez que pode responder até mesmo às formas de onda sutis.',
        inTheBox: [
          { qty: 2, text: 'Speaker'},
          { qty: 2, text: 'Capa de pano'},
          { qty: 1, text: 'Manual de usuário'},
          { qty: 1, text: 'Cabo 3.5mm 5m'},
          { qty: 1, text: 'Cabo optico 10m'}
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
        description: 'Transmita som de alta qualidade sem fios com perdas mínimas ou nenhumas. O alto-falante ZX7 usa componentes audiófilos de última geração que representam os alto-falantes topo de linha para uso doméstico ou em estúdio.',
        price: 3500,
        features: 'Colha as vantagens de um cone tweeter de diafragma plano. Isso fornece uma taxa de resposta rápida e excelentes frequências altas que os alto-falantes de estante em camadas mais baixas não podem fornecer. Os woofers são feitos de alumínio que produz um som único e claro. As entradas XLR permitem que você se conecte a um misturador para uso mais avançado. O alto-falante ZX7 é a combinação perfeita de design elegante e alto desempenho. Abriga um gabinete de madeira de MDF envolto que minimiza a ressonância acústica. A conectividade dupla permite pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
        inTheBox: [
          { qty: 2, text: 'Speaker'},
          { qty: 2, text: 'Capa de pano'},
          { qty: 1, text: 'Manual de usuário'},
          { qty: 1, text: 'Cabo 3.5mm 5m'},
          { qty: 1, text: 'Cabo optico 10m'}
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
        description: 'Personalize sua experiência auditiva com drivers dinâmicos sob medida dos novos fones de ouvido sem fio YX1. Desfrute de um som incrível de alta fidelidade mesmo em ambientes barulhentos com o seu recurso de cancelamento ativo de ruído.',
        price: 599,
        features: 'Experimente um som estéreo inigualável graças à tecnologia acústica inovadora. Com ergonomia melhorada concebida para uso durante todo o dia, estes fones de ouvido revolucionários foram finamente concebidos para lhe proporcionar o ajuste perfeito, proporcionando conforto completo durante todo o dia, enquanto desfruta de um isolamento de ruído excecional e de um som verdadeiramente imersivo. Os fones de ouvido sem fio YX1 possuem controles personalizáveis para volume, música, chamadas e assistentes de voz integrados em ambos os fones de ouvido. A duração da bateria de 7 horas pode ser estendida até 28 horas com o estojo de carregamento, proporcionando tempo de jogo ininterrupto. Design resistente a chuva agora disponível em um novo esquema de cores branco e cinza, bem como o popular preto clássico.',
        inTheBox: [
          { qty: 2, text: 'Fone de ouvido'},
          { qty: 6, text: 'Earplugs de diferentes tamanhos'},
          { qty: 1, text: 'Manual de usuário'},
          { qty: 1, text: 'Cabo USB-C para carregamento'},
          { qty: 1, text: 'Estojo para viagens'}
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
