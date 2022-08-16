<template>
  <n-collapse>
    <n-collapse-item title="ERROR 1" name="1">
      <n-collapse>
        <n-collapse-item title="type" name="1">
          <div>resource</div>
        </n-collapse-item>
        <n-collapse-item title="errorid" name="2">
          <div>123456</div>
        </n-collapse-item>
        <n-collapse-item title="time" name="3">
          <div>12:00</div>
        </n-collapse-item>
        <n-collapse-item title="message" name="4">
          <div>string</div>
        </n-collapse-item>
        <n-collapse-item title="detail" name="5">
          <div>待定</div>
        </n-collapse-item>
        <n-collapse-item title="breadcrumbs" name="6">
          <div>待定</div>
        </n-collapse-item>
      </n-collapse>
    </n-collapse-item>
  </n-collapse>
  <n-collapse>
    <n-collapse-item title="ERROR 2" name="1">
      <n-collapse>
        <n-collapse-item title="type" name="1">
          <div>resource</div>
        </n-collapse-item>
        <n-collapse-item title="errorid" name="2">
          <div>123456</div>
        </n-collapse-item>
        <n-collapse-item title="time" name="3">
          <div>12:00</div>
        </n-collapse-item>
        <n-collapse-item title="message" name="4">
          <div>string</div>
        </n-collapse-item>
        <n-collapse-item title="detail" name="5">
          <div>待定</div>
        </n-collapse-item>
        <n-collapse-item title="breadcrumbs" name="6">
          <div>待定</div>
        </n-collapse-item>
      </n-collapse>
    </n-collapse-item>
  </n-collapse>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorInformation'
});
</script>
<style>
.n-collapse {
  max-width: 250px;
  /* background-color: red; */
  float: left;
}
</style>
