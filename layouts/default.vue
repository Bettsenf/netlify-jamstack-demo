<template>
  <div class="layout-container">
    <Header></Header>
    <Nuxt></Nuxt>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: $primary-background;
  color: $primary-text;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
