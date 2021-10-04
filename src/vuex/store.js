import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({

    state: {
        items: [
            {
                name: "Кондиционер 1",
                price: 57990,
                oldPrice: 66000,
                rating: 4.5,
                hit: true,
                newItem: true,
                jpg: "product1.jpg",
                id: 1
            },
            {
                name: "Кондиционер 2",
                price: 57990,
                oldPrice: 66000,
                rating: 4.5,
                hit: true,
                newItem: true,
                jpg: "product2.jpg",
                id: 2
            },
            {
                name: "Кондиционер 3",
                price: 57990,
                oldPrice: 66000,
                rating: 4.5,
                hit: true,
                newItem: true,
                jpg: "product3.jpg",
                id: 3
            },
            {
                name: "Кондиционер 4",
                price: 36000,
                oldPrice: 66000,
                rating: 4.5,
                hit: true,
                newItem: true,
                jpg: "product4.jpg",
                id: 4
            },
            {
                name: "Кондиционер 5",
                price: 57990,
                oldPrice: 66000,
                rating: 4.5,
                hit: true,
                newItem: true,
                jpg: "product1.jpg",
                id: 5
            },
        ],
        offset: 0,
    },
    mutations: {
        INC: (state) => {
            if (state.offset < 1) state.offset++;
        },
        DEC: (state) => {
            if (state.offset > 0) state.offset--;
        }
    },
    actions: {
        INCREMENT_CATALOG_ITEM({commit}) {
            commit('INC');
        },
        DECREMENT_CATALOG_ITEM({commit}) {
            commit('DEC');
        }
    },
    getters: {
        ITEMS(state) {
            return state.items;
        },
        OFFSET(state) {
            return state.offset;
        },
    }
});

export default store;
