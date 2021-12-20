<template>
  <div class="hinoki-logo">
    <router-link :to="tolink">
      <div class="logo-wrapper">
        <div :class="'cus-logo--' + size">
          <div :class="'level-line--' + size"></div>
          <div :class="'middle-line--' + size"></div>
          <div :class="'plumb-line--' + size"></div>
        </div>
        <div class="logo-name" :class="'logo-name--' + size">Hinoki</div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HinokiLogo',
  props: {
    size: {
      type: String,
      default: 'middle',
    },
    tolink: {
      type: Object,
      default: {
        path: '/',
      },
    },
  },
  setup(props: any) {
    return {
      size: computed(() => {
        return props.size
      }),
      classes: computed(() => ({})),
    }
  },
})
</script>

<style scoped>
.logo-wrapper {
  height: 100%;
  display: inline-flex;

  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.logo-name {
  color: black;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

/* #region small */

.cus-logo--small {
  height: 30px;
  width: 50px;
}
.level-line--small,
.middle-line--small,
.plumb-line--small {
  position: absolute;
  height: 2px;
  background-color: black;
  display: block;
  border-radius: 2px;
}

.level-line--small {
  width: 20px;
  transform: rotate(60deg) translate(10px, -16px);
}

.middle-line--small {
  width: 47px;
  transform: rotate(0deg) translate(7px, 22px);
}
.plumb-line--small {
  width: 35px;
  transform: rotate(120deg) translate(7px, -2px);
}

.logo-name--small {
  margin-left: -30px;
  font-size: 12px;
  font-weight: 600;
}

/* #endregion small */

/* #region middle */
.cus-logo--middle {
  height: 40px;
  width: 60px;
}

.level-line--middle,
.middle-line--middle,
.plumb-line--middle {
  position: absolute;
  height: 2px;
  background-color: black;
  display: block;
  border-radius: 2px;
}

.level-line--middle {
  width: 25px;
  transform: rotate(60deg) translate(14px, -22px);
}

.middle-line--middle {
  width: 60px;
  transform: rotate(0deg) translate(10px, 29px);
}
.plumb-line--middle {
  width: 45px;
  transform: rotate(120deg) translate(9px, -4px);
}

.logo-name--middle {
  margin-left: -36px;
  font-size: 16px;
  font-weight: 600;
}

/* #endregion middle */

/* #region large */
.cus-logo--large {
  width: 60px;
  height: 70px;
}

.level-line--large,
.middle-line--large,
.plumb-line--large {
  position: absolute;
  height: 2px;
  background-color: black;
  display: block;
  border-radius: 2px;
}

.level-line--large {
  width: 28px;
  transform: rotate(60deg) translate(27px, -20px);
}

.middle-line--large {
  width: 70px;
  transform: rotate(0deg) translate(12px, 44px);
}
.plumb-line--large {
  width: 50px;
  transform: rotate(120deg) translate(19px, -12px);
}

.logo-name--large {
  margin-left: -30px;
  font-size: 18px;
  font-weight: 600;
}

/* #endregion large */
</style>
