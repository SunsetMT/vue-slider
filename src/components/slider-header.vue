<template>
  <div class="header">
    <h2 class="header-text">Хиты продаж</h2>
    <div class="left-arrow">
      <button><img src="../assets/png/arrow.png" alt="Arrow"></button>
    </div>

    <div class="right-box-arrow-nav">
      <div class="arrow-box">
        <button @click="prevItem"><img src="../assets/png/sld-back-arrow.png" alt="Back Arrow"></button>
      </div>
      <div class="arrow-box">
        <button @click="nextItem"><img src="../assets/png/sld-arrow.png" alt="Arrow"></button>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
  name: "slider-header",
  data: function () {
    return {
      curIndex: 0,
    }
  },
  methods: {
    ...mapActions([
      'INCREMENT_CATALOG_ITEM',
      'DECREMENT_CATALOG_ITEM'
    ]),
    prevItem() {
      this.DECREMENT_CATALOG_ITEM();
      console.log(this.OFFSET);
    },

    nextItem() {
      this.INCREMENT_CATALOG_ITEM();
      console.log(this.OFFSET);
    }
  },
  computed: {
    ...mapGetters([
        'OFFSET'
    ])
  }


}
</script>

<style lang="scss">


div.header {
  max-width: 1170px;
  display: flex;
  align-items: center;
  margin: 0 auto 25px auto;

  h2 {
    font-family: "Gotham Pro Light";
    font-weight: 300;
    font-size: 31px;
    width: 211px;
    height: 37px;
    color: var(--font-color);
    margin: 0 19px 0 0;
    line-height: 37px;
    text-align: left;
    padding-bottom: 5px;
  }

  img {
    width: 6.08px;
    height: 9.8px;
  }

  .left-arrow {
    display: flex;
    justify-content: center;

    button {
      border: 0;
      background-color: inherit;
    }
  }

  .right-box-arrow-nav {
    display: flex;
    margin-left: auto;

    .arrow-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background-color: var(--circle-background-color);
      border-radius: 50%;
      margin-left: 10px;


      button {
        border: 0;
        border-radius: 50%;
        background-color: inherit;
      }

      img {
        width: 6.08px;
        height: 9.8px;
      }
    }

  }


}

div.header h2 {

}


@font-face {
  font-family: "Gotham Pro Light";
  src: url("../assets/fonts/GothamPro-Light.ttf");
}
</style>