<template>
  <div class="footer-container">
    <span>Made with&nbsp;</span>
    <span>💦</span>
    <span>&nbsp;and&nbsp;</span>
    <img src="~/assets/netlify.svg" />
    <span>&nbsp;by DTD</span>
  </div>
</template>

<style lang="scss" scoped>
$font-size: 1.35rem;

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $header-height;
  background-color: lighten($color: $primary-background-light, $amount: 5);
  font-size: $font-size;
}

img {
  height: $font-size;
}
</style>
