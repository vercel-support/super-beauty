<template>
  <div class="row product-card-caption">
    <div class="col-12 text-center p-0">
      <h2 :class="'product-card-caption__title--' + type">
        {{ title }}
      </h2>
      <p v-if="reference" :class="'product-card-caption__description--' + type">
        {{ reference }}
      </p>
      <div
        class="row product-card-caption__amount d-flex justify-content-center align-items-center"
      >
        <money-format
          v-if="price && !discountedPrice"
          :value="price"
          :class="'product-card-caption__amount--' + type"
          :locale="'es-co'"
          :currency-code="'COP'"
          :subunits-value="false"
          :hide-subunits="true"
        >
        </money-format>
        <money-format
          v-else-if="price && discountedPrice"
          :value="price"
          :class="'product-card-caption__amount--' + type + '--discount'"
          :locale="'es-co'"
          :currency-code="'COP'"
          :subunits-value="false"
          :hide-subunits="true"
        >
        </money-format>
        <money-format
          v-if="discountedPrice"
          :value="discountedPrice"
          :class="'product-card-caption__amount-discounted--' + type"
          :locale="'es-co'"
          :currency-code="'COP'"
          :subunits-value="false"
          :hide-subunits="true"
        >
        </money-format>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'title',
    },
    title: {
      type: String,
      default: null,
    },
    reference: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    discountedPrice: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style></style>
