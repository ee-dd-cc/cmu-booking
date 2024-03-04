const CITY_LIST = [
  {
    imgSrc: '/images/city/977255.jpg?k=701d538f315c17d17ca4eb5ff1a7bd0f8ed9222acebdaa6a212b638d04bef1c1&o=',
    positon: 'Bangkok',
    subPosition: 'Grand palace',
    count: '3,812',
    des: 'Bangkok Province, Thailand'
  },
  {
    imgSrc: '/images/city/49651.jpg?k=8f0a6f72f68d8342fc376418b933e045e21082d4f59ca5f2b6cba763693d03ff&o=',
    positon: 'Pattaya',
    count: '3,212',
    des: 'Pattaya Province, Thailand'
  },
  {
    imgSrc: '/images/city/49561.jpg?k=e4908ac62fdf8dc5b9ca2cc04a045936afd089d7ad721e323e2bff97751365de&o=',
    positon: 'Koh Samui',
    count: '2,212',
    des: 'Koh Samui Province, Thailand'
  },
  {
    imgSrc: '/images/city/688745.jpg?k=fdf681e34babdf795f0022283b2c6331a4c6eec089e09040ea3a326b2c6a66cf&o=',
    positon: 'Phuket Town',
    count: '1,822',
    des: 'Phuket Town Province, Thailand'
  },
  {
    imgSrc: '/images/city/688810.jpg?k=d393a1bb944196c4b4b9fbe210e46568fd260b8daa3c4badcea9502c2ae58fcf&o=',
    positon: 'Patong Beach',
    count: '1,912',
    des: 'Patong Beach Province, Thailand'
  },
  {
    imgSrc: '/images/city/688668.jpg?k=40aabb5d313c37dddc20dde7b21d774453d2d096f6f8ce72ec63a9590dfa9de1&o=',
    positon: 'Chiang Mai',
    subPosition: 'Nimman',
    count: '2,912',
    des: 'Chiang Mai Province, Thailand'
  }
]

const SHOP_LIST = [
  {
    id: 1,
    name: 'Solitaire Sukhumvit',
    imgSrc: '/images/shop/122820072.webp?k=0660806d3e52eeeb799a101456031ba127a2f33049b9431153a8f106d0aad111&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 8.1,
    start: 4.5,
    price: 597,
    isStar: false
  },
  {
    id: 2,
    name: 'SHA Extra Plus',
    imgSrc: '/images/shop/470004451.webp?k=f87d351df9d943679ad890e666c7cb3f2e7964d5b980ba59f7be9790fa54de28&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 8.2,
    start: 4.5,
    price: 607,
    isStar: true
  },
  {
    id: 3,
    name: 'Premium Hotel',
    imgSrc: '/images/shop/170700857.webp?k=9eb9120b26f2ef6d45154f8bcb22b4f7ca76cd0c14b523ab5a5528653ac345f2&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 7.8,
    start: 4,
    price: 421,
    isStar: false
  },
  {
    id: 4,
    name: '7 Days Premium Hotel',
    imgSrc: '/images/shop/474142106.webp?k=3ddcf47deba38d4c877ca3a0a3c6444ea7ce9a75f8385c86e283212c26355545&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 7.8,
    start: 4.5,
    price: 700,
    isStar: false
  },
  {
    id: 5,
    name: 'ibis Bangkok SathornOpens',
    imgSrc: '/images/shop/299155617.webp?k=c4b92eb216d7adaa0625253921b452a32a543f98442a58a5b26887c412f0e105&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 7.8,
    start: 3.5,
    price: 650,
    isStar: false
  },
  {
    id: 6,
    name: 'SHA Extra Plus',
    imgSrc: '/images/shop/470004451.webp?k=f87d351df9d943679ad890e666c7cb3f2e7964d5b980ba59f7be9790fa54de28&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 8.1,
    start: 4.5,
    price: 607,
    isStar: false
  },
]

const USER_STAR = [
  {
    id: 3,
    name: 'Premium Hotel',
    imgSrc: '/images/shop/170700857.webp?k=9eb9120b26f2ef6d45154f8bcb22b4f7ca76cd0c14b523ab5a5528653ac345f2&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 7.8,
    start: 4,
    price: 421,
    isStar: true
  },
  {
    id: 4,
    name: '7 Days Premium Hotel',
    imgSrc: '/images/shop/474142106.webp?k=3ddcf47deba38d4c877ca3a0a3c6444ea7ce9a75f8385c86e283212c26355545&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 7.8,
    start: 4.5,
    price: 700,
    isStar: true
  },
  {
    id: 5,
    name: 'ibis Bangkok SathornOpens',
    imgSrc: '/images/shop/299155617.webp?k=c4b92eb216d7adaa0625253921b452a32a543f98442a58a5b26887c412f0e105&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 7.8,
    start: 3.5,
    price: 650,
    isStar: true
  },
]

const USER_INFO = {
  avatar: '/images/user_head.jpg',
  username: '',
  phone: '',
  gender: '',
  birthday: '',
  des: '',
  token: ''
}

const SHOP_PIC_LIST = [
  '/images/shop/411961734.jpg?k=1ed479c3c3c8c1c6c8be1b77cee72e75c7b6a13f81104af54d56cc24ac46518f&o=&hp=1',
  '/images/shop/350252201.jpg?k=a9b7311b117b10aa5ed6b358405d482d7014d92e21a3a59459538c218f73e2aa&o=&hp=1',
  '/images/shop/300726537.jpg?k=beca991a78bcd35d81de61bc78dbebc0d0823bd4a82c1ea73277bc5275b16158&o=&hp=1',
  '/images/shop/300718403.jpg?k=ba3bbcb269b40f386e324ffae689d68f77f27b65f5c5c5bf35efb2a5c8111834&o=&hp=1',
  '/images/shop/300731650.jpg?k=299141333a22b0deeb6c0b16196a4de37a0963822e08ea0b3f8d58cef5be482f&o=&hp=1',
  '/images/shop/301216385.jpg?k=b58f4b6c978944cae0659a64ed464e40ab07515ce2829bf8f8ddbb6b6bb7f1a1&o=&hp=1',
  '/images/shop/407978141.jpg?k=14efe076a4f26975de82c0d5b43741d0d80dcc062749884c18d6fecac03f38c0&o=&hp=1',
  '/images/shop/407978209.jpg?k=f2accaa5b774f1d0d9f1ba02f046700c43714b00db5af83f1c70b368a250b4db&o=&hp=1',
  '/images/shop/300719927.jpg?k=c5877af9b7032b3cb3797b61431fa303f5de3e63888ff22d01f471d341f3c25d&o=&hp=1',
  '/images/shop/301216390.jpg?k=55bd1d53a5ebb71e0d11feb9c34a742d4778844407d4ebf8dd7285786da2ea9d&o=&hp=1',
  '/images/shop/300719930.jpg?k=1000733d3e8541775881df032dd10b2194b276c9f00bf44d7437db71cd29c63b&o=&hp=1',
  '/images/shop/300725039.jpg?k=9dd374604072b604044e4a075d88514be204489f7d5f4cfe18860cb3f7476210&o=&hp=1'
]

const USER_INFO_SET = {
  avatar: '/images/user_head.jpg',
  username: 'Cat Cat',
  phone: '0631141123',
  gender: 'Male',
  birthday: '2000/10/01',
  des: '',
  token: '888888'
}

const ROOM_LIST = [
  {
    id: 1,
    name: 'Superior Double or Twin',
    tag: [],
    no: '218-1',
    price: 588
  },
  {
    id: 2,
    name: 'Deluxe Double or Twin Room',
    tag: [],
    no: '318-2',
    price: 688
  },
  {
    id: 3,
    name: 'Superior Double or Twin Room',
    tag: [],
    no: '418-9',
    price: 588
  },
  {
    id: 4,
    name: 'Superior Double or Twin',
    tag: [],
    no: '218-1',
    price: 500
  },
  {
    id: 5,
    name: 'Superior Double or Twin',
    tag: [],
    no: '218-1',
    price: 800
  },
  {
    id: 6,
    name: 'Superior Double or Twin',
    tag: [],
    no: '218-1',
    price: 600
  },
]

const PAYMENT_LIST = [
  {
    content: 'Alipay',
    key: 'alipay',
    des: '',
    show: true
  },
  {
    content: 'Wechat',
    key: 'wechat',
    des: '',
    show: true
  },
  {
    content: 'Bank Card',
    key: 'bank',
    des: '6699***6789',
    show: true
  },
  {
    content: 'Visa Card',
    key: 'visa',
    des: '7711***6780',
    show: true
  }
]

const ORDER_LIST = [
  {
    id: 1,
    name: 'Solitaire Sukhumvit',
    roomName: '',
    imgSrc: '/images/shop/122820072.webp?k=0660806d3e52eeeb799a101456031ba127a2f33049b9431153a8f106d0aad111&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 8.1,
    start: 4.5,
    price: 597,
    isStar: false,
    day: 3,
    people: 3,
    roomType: 'Double',
    no: '218-1',
    status: 'active',
    startTime: '2024-3-5',
    endTime: '2024-3-8'
  },
  {
    id: 2,
    name: 'SHA Extra Plus',
    imgSrc: '/images/shop/470004451.webp?k=f87d351df9d943679ad890e666c7cb3f2e7964d5b980ba59f7be9790fa54de28&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 8.2,
    start: 4.5,
    price: 607,
    isStar: true,
    day: 2,
    people: 2,
    roomType: 'Single',
    no: '318-2',
    status: 'active',
    startTime: '2024-3-6',
    endTime: '2024-3-8'
  },
  {
    id: 3,
    name: 'Premium Hotel',
    imgSrc: '/images/shop/170700857.webp?k=9eb9120b26f2ef6d45154f8bcb22b4f7ca76cd0c14b523ab5a5528653ac345f2&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 7.8,
    start: 4,
    price: 421,
    isStar: false,
    day: 3,
    people: 3,
    roomType: 'Double',
    no: '518-2',
    status: 'active',
    startTime: '2024-3-4',
    endTime: '2024-3-7'
  },
  {
    id: 4,
    name: 'Premium Hotel',
    imgSrc: '/images/shop/474142106.webp?k=3ddcf47deba38d4c877ca3a0a3c6444ea7ce9a75f8385c86e283212c26355545&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 7.8,
    start: 4.5,
    price: 700,
    isStar: false,
    day: 2,
    people: 2,
    roomType: 'Single',
    no: '33-1',
    status: 'past',
    startTime: '2024-2-4',
    endTime: '2024-2-6'
  },
  {
    id: 5,
    name: 'ibis SathornOpens',
    imgSrc: '/images/shop/299155617.webp?k=c4b92eb216d7adaa0625253921b452a32a543f98442a58a5b26887c412f0e105&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 7.8,
    start: 3.5,
    price: 650,
    isStar: false,
    day: 2,
    people: 2,
    roomType: 'Single',
    no: '22-2',
    status: 'past',
    startTime: '2024-1-4',
    endTime: '2024-1-6'
  },
  {
    id: 6,
    name: 'SHA Extra Plus',
    imgSrc: '/images/shop/470004451.webp?k=f87d351df9d943679ad890e666c7cb3f2e7964d5b980ba59f7be9790fa54de28&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 8.1,
    start: 4.5,
    price: 607,
    isStar: false,
    day: 2,
    people: 2,
    roomType: 'Suite',
    no: '236-6',
    status: 'cancel',
    startTime: '2024-3-4',
    endTime: '2024-3-6'
  },
  {
    id: 6,
    name: 'SHA Extra Plus',
    imgSrc: '/images/shop/470004451.webp?k=f87d351df9d943679ad890e666c7cb3f2e7964d5b980ba59f7be9790fa54de28&o=',
    positon: 'Bangkok',
    des: 'Includes taxes and charges',
    score: 8.1,
    start: 4.5,
    price: 607,
    isStar: false,
    day: 2,
    people: 2,
    roomType: 'Suite',
    no: '236-6',
    status: 'paid',
    startTime: '2024-3-4',
    endTime: '2024-3-6'
  },
]

export {
  CITY_LIST,
  USER_INFO,
  USER_INFO_SET,
  SHOP_LIST,
  USER_STAR,
  SHOP_PIC_LIST,
  ROOM_LIST,
  PAYMENT_LIST,
  ORDER_LIST
}