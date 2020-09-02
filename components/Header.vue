<template>
  <div class="header-container">
    <span class="bold">JAM</span>
    <span class="slim">Stack</span>
  </div>
</template>

<style lang="scss" scoped>
$font-size: 2rem;

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: $header-height;
  text-transform: uppercase;
  font-size: $font-size;
  background-color: $primary-background-light;
}

.bold {
  font-weight: 700;
}
.slim {
  font-weight: 200;
}
</style>
