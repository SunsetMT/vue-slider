<template>
  <div class="wrapper">
    <div class="catalog" v-bind:style="styleObject">
      <catalog-item
          v-for="item in items"
          :key="item.name"
          :item_counter="item.id"
          :catalog_item="item"
      />
    </div>
  </div>
</template>


<script>
import CatalogItem from "./catalog-item";
import {mapGetters} from 'vuex'

export default {
  name: "catalog",
  components: {CatalogItem},
  data() {
    return {
      items: [
        {
          name: "Кондиционер 1",
          price: "57 990",
          oldPrice: "66 000",
          rating: 4.5,
          hit: true,
          newItem: true,
          jpg: "product1.jpg",
          id: 1
        },
        {
          name: "Кондиционер 2",
          price: "57 990",
          oldPrice: "66 000",
          rating: 4.5,
          hit: true,
          newItem: true,
          jpg: "product2.jpg",
          id: 2
        },
        {
          name: "Кондиционер 3",
          price: "57 990",
          oldPrice: "66 000",
          rating: 4.5,
          hit: true,
          newItem: true,
          jpg: "product3.jpg",
          id: 3
        },
        {
          name: "Кондиционер 4",
          price: "36 000",
          oldPrice: "66 000",
          rating: 4.5,
          hit: true,
          newItem: true,
          jpg: "product4.jpg",
          id: 4
        },
        {
          name: "Кондиционер 5",
          price: "57 990",
          oldPrice: "66 000",
          rating: 4.5,
          hit: true,
          newItem: true,
          jpg: "product1.jpg",
          id: 5},
      ],

    }
  },
    props: {
    }
  ,
    computed: {
    ...
      mapGetters([
        'OFFSET'
      ]),

      styleObject: function () {
        return {
          'margin-left': -300 * this.OFFSET + 'px',
        }
      }
    }

  }
</script>

<style lang="scss">

.catalog {
  display: flex;
  flex-wrap: nowrap;
  transition: all ease 0.5s;
}


.wrapper {
  max-width: 1170px;
  overflow: hidden;
  margin: 0 auto;
}

</style>