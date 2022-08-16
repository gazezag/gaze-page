<script lang="ts">
import { storeToRefs } from 'pinia';
import { defineComponent, h, Component, ref } from 'vue';
import { NIcon, useMessage, NCard, NCollapse, NCollapseItem } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { useStore } from 'store/errorInformation';

export default defineComponent({
  setup() {
    const store = useStore();
    const Error_List = store.Error_List;
    function isType(obj: any) {
      if (
        obj.type == 'js' ||
        obj.type == 'unhandledrejection' ||
        obj.type == 'resource'
      )
        return true;
      else return false;
    }
    function isSrc(obj: any) {
      if (obj.type == 'resource') return true;
      else return false;
    }
    function isOuterHTML(obj: any) {
      if (obj.type == 'resource') return true;
      else return false;
    }
    function isTagName(obj: any) {
      if (obj.type == 'resource' || obj.type == 'cors') return true;
      else return false;
    }
    function isStatus(obj: any) {
      if (obj.type == 'http') return true;
      else return false;
    }
    function isResponses(obj: any) {
      if (obj.type == 'http') return true;
      else return false;
    }
    function isStatusText(obj: any) {
      if (obj.type == 'http') return true;
      else return false;
    }
    function isStackTrace(obj: any) {
      if (obj.type == 'js' || obj.type == 'unhandledrejection') return true;
      else return false;
    }
    return {
      Error_List,
      isType,
      isSrc,
      isOuterHTML,
      isTagName,
      isStatus,
      isResponses,
      isStatusText,
      isStackTrace
    };
  }
});
</script>

<template>
  <div
    v-for="(items, index) of Error_List"
    :key="index"
    style="float: left; width: 250px"
  >
    <n-collapse>
      <n-collapse-item title="ERROR" name="index">
        <n-collapse>
          <n-collapse-item title="type" name="1">
            <div>{{ items.type }}</div>
          </n-collapse-item>
          <n-collapse-item title="errorUid" name="2">
            <div>{{ items.errorUid }}</div>
          </n-collapse-item>
          <n-collapse-item title="time" name="3">
            <div>{{ items.time }}</div>
          </n-collapse-item>
          <n-collapse-item title="message" name="4">
            <div>{{ items.message }}</div>
          </n-collapse-item>
          <n-collapse-item title="detail" name="5">
            <n-collapse>
              <n-collapse-item title="type" name="1" v-if="isType(items)">
                {{ items.detail.type }}
              </n-collapse-item>
              <n-collapse-item title="scr" name="2" v-if="isSrc(items)">
                {{ items.detail.src }}
              </n-collapse-item>
              <n-collapse-item
                title="outerHTML"
                name="3"
                v-if="isOuterHTML(items)"
              >
                {{ items.detail.outerHTML }}
              </n-collapse-item>
              <n-collapse-item title="tagName" name="4" v-if="isTagName(items)">
                {{ items.detail.tagName }}
              </n-collapse-item>
              <n-collapse-item title="status" name="5" v-if="isStatus(items)">
                {{ items.detail.status }}
              </n-collapse-item>
              <n-collapse-item
                title="response"
                name="6"
                v-if="isResponses(items)"
              >
                {{ items.detail.response }}
              </n-collapse-item>
              <n-collapse-item
                title="statusText"
                name="7"
                v-if="isStatus(items)"
              >
                {{ items.detail.statusText }}
              </n-collapse-item>
              <n-collapse-item
                title="stackTrace"
                name="8"
                v-if="isStackTrace(items)"
              >
                <div v-for="(i, k) of items.detail.stackTrace" :key="k">
                  <n-collapse>
                    <n-collapse-item title="information" name="k">
                      <ul>
                        <li>filename----{{ i.filename }}</li>
                        <li>functionName----{{ i.functionName }}</li>
                        <li>line----{{ i.line }}</li>
                        <li>col----{{ i.col }}</li>
                      </ul>
                    </n-collapse-item>
                  </n-collapse>
                </div>
              </n-collapse-item>
            </n-collapse>
          </n-collapse-item>
          <n-collapse-item title="breadcrumbs" name="6">
            <div>{{ items.breadcrumbs }}</div>
          </n-collapse-item>
        </n-collapse>
      </n-collapse-item>
    </n-collapse>
  </div>

  <!-- 
  <n-collapse>
    <n-collapse-item title="ERROR 1" name="1">
      <n-collapse>
        <n-collapse-item title="type" name="1">
          <div>resource</div>
        </n-collapse-item>
        <n-collapse-item title="errorUid" name="2">
          <div>123456</div>
        </n-collapse-item>
        <n-collapse-item title="time" name="3">
          <div>12:00</div>
        </n-collapse-item>
        <n-collapse-item title="message" name="4">
          <div>string</div>
        </n-collapse-item>
        <n-collapse-item title="detail" name="5">
            <n-collapse>
              <n-collapse-item title="type" name="1" v-if="true">
        
              </n-collapse-item>
            </n-collapse>
        </n-collapse-item>
        <n-collapse-item title="breadcrumbs" name="6">
          <div>待定</div>
        </n-collapse-item>
      </n-collapse>
    </n-collapse-item>
  </n-collapse> -->
</template>

<style>
.n-collapse {
  max-width: 250px;
  /* background-color: red; */
}
</style>
