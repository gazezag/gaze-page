<script lang="ts">
import { storeToRefs } from 'pinia';
import { defineComponent, h, Component, ref, reactive } from 'vue';
import { NIcon, useMessage, NCard, NCollapse, NCollapseItem } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import setup from 'naive-ui/es/radio/src/use-radio';
import { useStore } from 'store/userAction';

export default defineComponent({
  setup() {
    const store = useStore();
    // router-change类
    const router_change = store.router_change;
    const http = store.http;
    const operation = store.operation;

    function notEmpty(obj: any) {
      if (JSON.stringify(obj) == '{}' || JSON.stringify(obj) == '[]')
        return false;
      else if (obj) return true;
      else return false;
    }

    return {
      router_change,
      http,
      operation,
      notEmpty
    };
  }
});
</script>

<template>
  <n-collapse id="main-c">
    <n-collapse-item title="router-change" name="1">
      <n-collapse>
        <div
          v-for="(item, index) of router_change"
          :key="index"
          style="margin-bottom: 20px"
        >
          <n-collapse-item title="router-change" :name="index">
            <n-collapse>
              <n-collapse-item title="type" name="1">
                <div>{{ item.type }}</div>
              </n-collapse-item>
              <n-collapse-item title="page" name="2">
                <div>{{ item.page }}</div>
              </n-collapse-item>
              <n-collapse-item title="time" name="3">
                <div>{{ item.time }}</div>
              </n-collapse-item>
              <n-collapse-item title="detail" name="4">
                <div>
                  <ul>
                    <li v-for="(i, k) of Object.values(item.detail)" :key="k">
                      {{ Object.keys(item.detail)[k] }} ----
                      {{ Object.values(item.detail)[k] }}
                    </li>
                  </ul>
                </div>
              </n-collapse-item>
            </n-collapse>
          </n-collapse-item>
        </div>
      </n-collapse>
    </n-collapse-item>
  </n-collapse>
  <n-collapse id="main-c">
    <n-collapse-item title="http" name="1">
      <n-collapse>
        <div
          v-for="(item, index) of http"
          :key="index"
          style="margin-bottom: 20px"
        >
          <n-collapse-item title="http" :name="index">
            <n-collapse>
              <n-collapse-item title="type" name="1">
                <div>{{ item.type }}</div>
              </n-collapse-item>
              <n-collapse-item title="page" name="2">
                <div>{{ item.page }}</div>
              </n-collapse-item>
              <n-collapse-item title="time" name="3">
                <div>{{ item.time }}</div>
              </n-collapse-item>
              <n-collapse-item title="detail" name="4">
                <div>
                  <ul>
                    <div v-for="(i, k) of Object.values(item.detail)" :key="k">
                      <li v-if="notEmpty(Object.values(item.detail)[k])">
                        {{ Object.keys(item.detail)[k] }} ----
                        {{ Object.values(item.detail)[k] }}
                      </li>
                    </div>
                  </ul>
                </div>
              </n-collapse-item>
            </n-collapse>
          </n-collapse-item>
        </div>
      </n-collapse>
    </n-collapse-item>
  </n-collapse>
  <n-collapse id="main-c">
    <n-collapse-item title="operation" name="1">
      <n-collapse>
        <div
          v-for="(item, index) of operation"
          :key="index"
          style="margin-bottom: 20px"
        >
          <n-collapse-item title="operation" :name="index">
            <n-collapse>
              <n-collapse-item title="type" name="1">
                <div>{{ item.type }}</div>
              </n-collapse-item>
              <n-collapse-item title="page" name="2">
                <div>{{ item.page }}</div>
              </n-collapse-item>
              <n-collapse-item title="time" name="3">
                <div>{{ item.time }}</div>
              </n-collapse-item>
              <n-collapse-item title="detail" name="4">
                <div>
                  <ul>
                    <div v-for="(i, k) of Object.values(item.detail)" :key="k">
                      <li v-if="notEmpty(Object.values(item.detail)[k])">
                        {{ Object.keys(item.detail)[k] }} ----
                        {{ Object.values(item.detail)[k] }}
                      </li>
                    </div>
                  </ul>
                </div>
              </n-collapse-item>
            </n-collapse>
          </n-collapse-item>
        </div>
      </n-collapse>
    </n-collapse-item>
  </n-collapse>
</template>

<style>
.n-collapse {
  width: 320px;
}

#main-c {
  float: left;
}
</style>
