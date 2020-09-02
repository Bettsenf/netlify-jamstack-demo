<template>
  <div class="footer-container">
    <span>Made with&nbsp;</span>
    <span>💦</span>
    <span>&nbsp;and&nbsp;</span>
    <img src="~/assets/netlify.svg" />
    <span>&nbsp;by</span>
    <span class="dtd">&nbsp;DTD</span>
  </div>
</template>

<style lang="scss" scoped>
$font-size: 1.3rem;

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: $header-height;
  background-color: lighten($color: $primary-background-light, $amount: 5);
  font-size: $font-size;
  color: $primary-text-dark;
}

img {
  height: $font-size;
}

.dtd {
  font-weight: 700;
  color: darken($primary-text, 5);
}
</style>
