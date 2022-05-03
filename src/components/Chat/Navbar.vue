<template>
  <nav role="navigation" class="navbar">
    <div class="navbar__wrapper">
      <div role="button" @click="backHome" class="navbar__icon">
        <i class="bx bx-left-arrow-alt"></i>
      </div>
    </div>
    <div class="navbar__groupbox">
      <h3 class="navbar__title">Cecily Trujilo</h3>
      <div class="navbar__icongroup">
        <div role="button" title="call" class="navbar__icongroup__iconbox">
          <i class="bx bxs-phone"></i>
        </div>
        <div
          role="button"
          title="video call"
          class="navbar__icongroup__iconbox">
          <i class="bx bxs-video"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "NavBar",
  setup() {
    const router = useRouter();

    const backHome = () => {
      router.push("/");
    };

    return {
      backHome,
    };
  },
};
</script>
