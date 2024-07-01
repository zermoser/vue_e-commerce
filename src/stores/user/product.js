import { defineStore } from 'pinia'

export const useUserProductStore = defineStore('user-product', {
  state: () => ({
    list: [
    {
      name: 'สินค้าชิ้นที่ 1',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
      quantity: 4,
      about: 'รายละเอียด',
      status: 'open',
      price: 100,
    },
    {
      name: 'สินค้าชิ้นที่ 2',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
      quantity: 7,
      about: 'รายละเอียด',
      status: 'open',
      price: 300,
    },
    {
      name: 'สินค้าชิ้นที่ 3',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
      quantity: 10,
      about: 'รายละเอียด',
      status: 'open',
      price: 80,
    },
    {
      name: 'สินค้าชิ้นที่ 4',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
      quantity: 8,
      about: 'รายละเอียด',
      status: 'open',
      price: 50
    }
  ],
    loaded: false
  }),
  actions: {
    filterProducts (searchName) {
      return this.list.filter(product => product.name.includes(searchName))
    }
  }
})