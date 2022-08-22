<template>
  <n-layout-header bordered>
    <router-link to="/overview">
      <div class="logo">
        <h1>GAZE</h1>
        <span>Front-end monitor</span>
      </div>
    </router-link>
    <n-space>
      <a href="https://github.com/gazezag">GitHub</a>
      <router-link to="/">DOCS</router-link>
      <router-link to="/">HELP</router-link>
      <router-link to="/">
        <n-icon :size="20">
          <Alert28Regular />
        </n-icon>
      </router-link>
      <router-link to="/">
        <n-icon :size="20" class="person">
          <Person12Filled />
        </n-icon>
      </router-link>
    </n-space>
  </n-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Alert28Regular, Person12Filled } from '@vicons/fluent';
export default defineComponent({
  name: 'MainHeader',
  components: { Alert28Regular, Person12Filled }
});
</script>

<style lang="less" scoped>
.n-layout-header {
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  .n-space {
    align-items: center;
    gap: 18px 27px !important;

    a {
      color: @mainColor;
      margin-left: 0 10px;

      &:hover {
        border-bottom: 1px solid rgb(195, 150, 150);
      }
    }

    div:nth-last-of-type(-n + 2) {
      a {
        border-bottom: 0;
      }
    }
  }

  .n-icon {
    padding: 5px;
    color: @mainColor;
  }

  .person {
    background-color: @mainColor;
    color: #fff;
    border-radius: 50%;
  }

  .logo {
    display: flex;
    align-items: center;

    h1 {
      color: @mainColor;
    }

    span {
      margin-left: 10px;
      // background-color: rgb(182, 144, 144);
      color: rgb(139, 114, 92);
    }
  }
}
</style>
