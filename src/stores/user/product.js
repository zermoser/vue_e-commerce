import { defineStore } from 'pinia'

export const useUserProductStore = defineStore('user-product', {
  state: () => ({
    list: [
    {
      name: 'แมว1',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
      quantity: 10,
      about: 'หิวข้าว',
      status: 'open',
      price: 100,
    },
    {
      name: 'แมว2',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
      quantity: 10,
      about: 'หิวข้าว',
      status: 'open',
      price: 100,
    },
    {
      name: 'แมว3',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
      quantity: 10,
      about: 'หิวข้าว',
      status: 'open',
      price: 100,
    },
    {
      name: 'แมว4',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg',
      quantity: 10,
      about: 'หิวข้าว',
      status: 'open',
      price: 100
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