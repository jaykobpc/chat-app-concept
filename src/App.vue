<template>
  <div class="mobile">
    <div class="device-frame no-select">
      <router-view v-slot="{ Component, route }" appear>
        <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@charset 'utf-8';
</style>
