<script lang="ts">
import { storeToRefs } from 'pinia';
import { defineComponent, h, Component, ref, reactive } from 'vue';
import { NIcon, useMessage, NCard, NCollapse, NCollapseItem } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import setup from 'naive-ui/es/radio/src/use-radio';
import { useStore } from 'store/userAction';
import { useUserBehaviorStore } from 'store/userBehavior';
import Mock from 'mockjs';
export default defineComponent({
  setup() {
    const newstore = useUserBehaviorStore();
    const userBehaviorInfo = newstore.userBehaviorInfo;
    // mock_test start
    for (let i = 0; i < 2; i++) {
      const obj = Mock.mock({
        time: '@float',
        groupId: '@float',
        page: '@character',
        method: '@character',
        href: '@character',
        hash: '@character',
        pathname: '@character'
      });
      userBehaviorInfo.routerChange.push(obj);
    }
    for (let i = 0; i < 2; i++) {
      const obj1 = Mock.mock({
        time: '@float',
        groupId: '@float',
        page: '@character',
        method: '@character',
        url: '@character',
        headers: '@character',
        body: '@character',
        status: '@float',
        statusText: '@character',
        requestTime: '@float',
        responseTime: '@float',
        response: '@character'
      });
      userBehaviorInfo.http.push(obj1);
    }
    for (let i = 0; i < 2; i++) {
      const obj2 = Mock.mock({
        time: '@float',
        groupId: '@float',
        page: '@character',
        type: '@character',
        target: '@character',
        count: '@float',
        domId: '@character',
        classList: '@character',
        tagName: '@character',
        innerText: '@character'
      });
      userBehaviorInfo.operation.push(obj2);
    }
    // mock_test over
    console.log(userBehaviorInfo);
    return {
      userBehaviorInfo
    };
  }
});
</script>

<template>
  <n-collapse id="main-c">
    <n-collapse-item title="router-change" name="1">
      <n-collapse>
        <div
          v-for="(item, index) of userBehaviorInfo.routerChange"
          :key="index"
          style="margin-bottom: 20px"
        >
          <n-collapse-item title="router-change" :name="index">
            <n-collapse>
              <n-collapse-item title="time" name="1">
                <div>{{ item.time }}</div>
              </n-collapse-item>
              <n-collapse-item title="groupId" name="2">
                <div>{{ item.groupId }}</div>
              </n-collapse-item>
              <n-collapse-item title="page" name="3">
                <div>{{ item.page }}</div>
              </n-collapse-item>
              <n-collapse-item title="method" name="4">
                <div>{{ item.method }}</div>
              </n-collapse-item>
              <n-collapse-item title="href" name="5">
                <div>{{ item.href }}</div>
              </n-collapse-item>
              <n-collapse-item title="hash" name="6">
                <div>{{ item.hash }}</div>
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
          v-for="(item, index) of userBehaviorInfo.http"
          :key="index"
          style="margin-bottom: 20px"
        >
          <n-collapse-item title="http" :name="index">
            <n-collapse>
              <n-collapse-item title="time" name="1">
                <div>{{ item.time }}</div>
              </n-collapse-item>
              <n-collapse-item title="groupId" name="2">
                <div>{{ item.groupId }}</div>
              </n-collapse-item>
              <n-collapse-item title="page" name="3">
                <div>{{ item.page }}</div>
              </n-collapse-item>
              <n-collapse-item title="method" name="4">
                <div>{{ item.method }}</div>
              </n-collapse-item>
              <n-collapse-item title="url" name="5">
                <div>{{ item.url }}</div>
              </n-collapse-item>
              <n-collapse-item title="headers" name="6">
                <div>{{ item.headers }}</div>
              </n-collapse-item>
              <n-collapse-item title="body" name="7">
                <div>{{ item.body }}</div>
              </n-collapse-item>
              <n-collapse-item title="status" name="8">
                <div>{{ item.status }}</div>
              </n-collapse-item>
              <n-collapse-item title="statusText" name="9">
                <div>{{ item.statusText }}</div>
              </n-collapse-item>
              <n-collapse-item title="requestTime" name="10">
                <div>{{ item.requestTime }}</div>
              </n-collapse-item>
              <n-collapse-item title="responseTime" name="11">
                <div>{{ item.responseTime }}</div>
              </n-collapse-item>
              <n-collapse-item title="response" name="12">
                <div>{{ item.response }}</div>
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
          v-for="(item, index) of userBehaviorInfo.operation"
          :key="index"
          style="margin-bottom: 20px"
        >
          <n-collapse-item title="operation" :name="index">
            <n-collapse>
              <n-collapse-item title="time" name="1">
                <div>{{ item.time }}</div>
              </n-collapse-item>
              <n-collapse-item title="groupId" name="2">
                <div>{{ item.groupId }}</div>
              </n-collapse-item>
              <n-collapse-item title="page" name="3">
                <div>{{ item.page }}</div>
              </n-collapse-item>
              <n-collapse-item title="type" name="4">
                <div>{{ item.type }}</div>
              </n-collapse-item>
              <n-collapse-item title="target" name="5">
                <div>{{ item.target }}</div>
              </n-collapse-item>
              <n-collapse-item title="count" name="6">
                <div>{{ item.count }}</div>
              </n-collapse-item>
              <n-collapse-item title="domId" name="7">
                <div>{{ item.domId }}</div>
              </n-collapse-item>
              <n-collapse-item title="classList" name="8">
                <div>{{ item.classList }}</div>
              </n-collapse-item>
              <n-collapse-item title="tagName" name="9">
                <div>{{ item.tagName }}</div>
              </n-collapse-item>
              <n-collapse-item title="innerText" name="10">
                <div>{{ item.innerText }}</div>
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
