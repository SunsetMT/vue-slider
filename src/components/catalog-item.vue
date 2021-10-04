<template>
  <div class="item" v-bind:style="styleItem">
    <div class="short-info">
      <div class="product_image" v-bind:style="styleObject"></div>
      <div class="grey-text">Удаленное управление</div>
      <h5 class="product_number">Кондиционер №{{ this.catalog_item.id }}</h5>
      <div class="star">{{this.catalog_item.rating}}</div>
    </div>

    <div class="price-buy-box">
      <div class="price">
        <div class="new-price">{{this.catalog_item.price}} руб.</div>
        <div class="old-price">{{this.catalog_item.oldPrice}} руб.</div>
      </div>
      <div class="buttons">
        <button class="to-cart">
          В корзину
        </button>
        <button class="heart"></button>
        <button class="playlist"></button>
      </div>
    </div>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
  name: "catalog-item",
  props: {
    item_counter: {
      type: Number,
      default: 1,
    },
    catalog_item: {
      type: Object,
      default: () => {
      },
    }
  },
  data: function () {
    return {
      styleItem: {
        //'background-color': '#' + parseInt('c203d0', 16) * this.item_counter,
      }
    }
  },
  computed: {
    ...mapGetters([
      'OFFSET',
      'ITEMS'
    ]),
    styleObject: function () {
      return {
        background: 'no-repeat center/100% ' + 'url(' + require(`../assets/jpg/${this.catalog_item.jpg}`) + ')'
      }
    }
  }
}
</script>

<style lang="scss">
.item {
  min-width: 268px;
  min-height: 385px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  margin-right: 30px;


  .short-info {
    font-family: "Gotham Pro Light";
    width: 230px;
    margin: 0 auto;

    .product_image {
      width: 228px;
      height: 148px;
      margin: 20px 0 15px 0;
      border: 1px solid inherit;
      border-radius: 5px;
    }
    .grey-text {
      color: #888888;
      font-size: 13px;
      font-weight: 400;
      line-height: 19px;
    }
    .product_number {
      font-family: "Gotham Pro Regular";
      font-size: 15px;
      font-weight: 400;
      line-height: 18px;
      color: #444444;
      margin: 5px 0 5px 0;
    }

    .star::before {
      display: inline-block;
      content: "";
      background-image: url("../assets/png/Star.png");
      background-size: 16px 16px;
      height: 16px;
      width: 16px;
      margin-right: 5px;
    }

    .star {
      display: flex;
      align-items: center;
      line-height: 16px;
      font-size: 13px;
      font-family: "Gotham Pro Regular";
      color: var(--primary-color);
    }
  }

  .price-buy-box {
    margin: 34px 0 15px 0;
    .price {
      display: flex;
      width: 238px;
      height: 23px;
      margin: 0 12px 0 20px;
      .new-price {
        font-family: "Gotham Pro Regular";
        color: #444444;
        font-size: 19px;
        line-height: 23px;
        width: 130px;
        display: flex;
        justify-items: flex-start;
      }

      .old-price {
        font-family: "Gotham Pro Regular";
        color: #888888;
        text-decoration: line-through;
        font-size: 13px;
        display: flex;
        align-items: flex-end;
      }
    }
    .buttons {
      margin: 15px 23px 20px 20px;
      display: flex;
      width: 227px;
      height: 48px;
      align-items: center;
      .to-cart {
        border-radius: 5px;
        border: 1px solid var(--primary-color);
        background: var(--primary-color);
        width: 152px;
        height: 48px;
        font-size: 15px;
        line-height: 18px;
        font-family: "Gotham Pro Medium";
        color: #ffffff;
      }
      .heart {
        display: flex;
        background-color: inherit;
        background-image: url("../assets/svg/heart.svg");
        background-size: 20.31px 18.09px;
        width: 20.31px;
        height: 18.09px;
        border: inherit;
        margin-left: 16.85px;
      }
      .playlist {
        background-color: inherit;
        background-image: url("../assets/svg/playlist.svg");
        background-size: 18px 15.96px;
        width: 18px;
        height: 15.96px;
        border: inherit;
        margin-left: 19.85px;
      }
    }
  }
}


@font-face {
  font-family: "Gotham Pro Light";
  src: url("../assets/fonts/GothamPro-Light.ttf");
}

@font-face {
  font-family: "Gotham Pro Regular";
  src: url("../assets/fonts/GothamPro-Regular.ttf");
}

@font-face {
  font-family: "Gotham Pro Medium";
  src: url("../assets/fonts/GothamPro-Medium.ttf");
}
</style>