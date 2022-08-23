<template>
  <n-layout>
    <MainHeader />

    <n-layout-content :style="{ backgroundImage: `url(${wavyIcon})` }" embedded>
      <SubPanel />
      <MainPanel />
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useErrorInfoStore } from 'store/errorInfo';
import MainHeader from 'components/shared/MainHeader.vue';
import SubPanel from 'components/overview/SubPanel.vue';
import MainPanel from 'components/overview/MainPanel.vue';
import mainWavyIcon from 'assets/svg/wavy.svg';
import redWavyIcon from 'assets/svg/errorWavy.svg';

export default defineComponent({
  name: 'Overview',
  components: { MainHeader, SubPanel, MainPanel },
  setup() {
    const { isErrorOccur } = storeToRefs(useErrorInfoStore());
    const wavyIcon = computed(() => {
      return isErrorOccur.value ? redWavyIcon : mainWavyIcon;
    });

    return {
      wavyIcon
    };
  }
});
</script>

<style scoped>
.n-layout-content {
  height: var(100vh - 60px);

  background: no-repeat bottom left;
  background-size: contain;
}
</style>
