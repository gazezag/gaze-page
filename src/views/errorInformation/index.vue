<script lang="ts">
import { storeToRefs } from 'pinia';
import { defineComponent, h, Component, ref } from 'vue';
import { NIcon, useMessage, NCard, NCollapse, NCollapseItem } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { useStore } from 'store/errorInformation';
import { useErrorInfoStore } from 'store/errorInfo';
import Mock from 'mockjs';
export default defineComponent({
  setup() {
    const newstore = useErrorInfoStore();
    // mock_test start
    for (let i = 0; i < 2; i++) {
      const jsError = Mock.mock({
        time: i,
        errorUid: '@character',
        message: '@character',
        errorType: '@character',
        reason: '@character',
        stackTraceUid: '@float'
      });
      newstore.pushJsErrorInfo(jsError);
      for (let j = 0; j < 2; j++) {
        const stackTrace = Mock.mock({
          groupId: i,
          filename: '@character',
          functionName: '@character',
          line: '@float',
          col: '@float'
        });
        newstore.pushStackTraceInfo(stackTrace);
      }
    }

    for (let i = 0; i < 2; i++) {
      const resourceError = Mock.mock({
        time: '@float',
        errorUid: '@character',
        message: '@character',
        errorType: '@character',
        src: '@character',
        outerHtml: '@character',
        tagName: '@character'
      });
      newstore.pushResourceErrorInfo(resourceError);
    }
    for (let i = 0; i < 2; i++) {
      const corsError = Mock.mock({
        time: '@float',
        errorUid: '@character',
        message: '@character',
        tagName: '@character'
      });
      newstore.pushCorsErrorInfo(corsError);
    }

    for (let i = 0; i < 2; i++) {
      const httpError = Mock.mock({
        time: '@float',
        errorUid: '@character',
        message: '@character',
        status: '@float',
        statusText: '@character',
        response: '@character'
      });
      newstore.pushHttpErrorInfo(httpError);
    }
    // mock_test over
    const errors = newstore.errorInfo;
    console.log(errors);

    return {
      errors
    };
  }
});
</script>

<template>
  <n-collapse class="errorlist">
    <n-collapse-item title="JsError" name="1">
      <div v-for="(item, index) of errors.jsError" :key="index">
        <n-collapse>
          <n-collapse-item title="JsError" name="index">
            <n-collapse>
              <n-collapse-item title="time" name="1">{{
                item.info.time
              }}</n-collapse-item>
              <n-collapse-item title="errorUid" name="2"
                >{{ item.info.errorUid }}
              </n-collapse-item>
              <n-collapse-item title="message" name="3">
                {{ item.info.message }}</n-collapse-item
              >
              <n-collapse-item title="errorType" name="4"
                >{{ item.info.errorType }}
              </n-collapse-item>
              <n-collapse-item title="reason" name="5"
                >{{ item.info.reason }}
              </n-collapse-item>
              <n-collapse-item title="stackTraceUid" name="6">{{
                item.info.stackTraceUid
              }}</n-collapse-item>
              <n-collapse-item title="stackTraceList" name="7">
                <div v-for="(i, k) of item.stackTrace" :key="k">
                  <n-collapse>
                    <n-collapse-item title="stackTrace" name="1">
                      <n-collapse>
                        <n-collapse-item title="groupId" name="1">{{
                          i.groupId
                        }}</n-collapse-item>
                        <n-collapse-item title="filename" name="2">{{
                          i.filename
                        }}</n-collapse-item>
                        <n-collapse-item title="functionName" name="3">{{
                          i.filename
                        }}</n-collapse-item>
                        <n-collapse-item title="line" name="4">{{
                          i.line
                        }}</n-collapse-item>
                        <n-collapse-item title="col" name="5">{{
                          i.col
                        }}</n-collapse-item>
                      </n-collapse>
                    </n-collapse-item>
                  </n-collapse>
                </div>
              </n-collapse-item>
            </n-collapse>
          </n-collapse-item>
        </n-collapse>
      </div>
    </n-collapse-item>
  </n-collapse>
  <n-collapse class="errorlist">
    <n-collapse-item title="ResourceError" name="1">
      <div v-for="(item, index) of errors.resourceError" :key="index">
        <n-collapse>
          <n-collapse-item title="ResourceError" name="index">
            <n-collapse>
              <n-collapse-item title="time" name="1">{{
                item.time
              }}</n-collapse-item>
              <n-collapse-item title="errorUid" name="2"
                >{{ item.errorUid }}
              </n-collapse-item>
              <n-collapse-item title="message" name="3">
                {{ item.message }}</n-collapse-item
              >
              <n-collapse-item title="errorType" name="4"
                >{{ item.errorType }}
              </n-collapse-item>
              <n-collapse-item title="src" name="5"
                >{{ item.src }}
              </n-collapse-item>
              <n-collapse-item title="outHtml" name="6">{{
                item.outerHtml
              }}</n-collapse-item>
              <n-collapse-item title="tagName" name="7">{{
                item.tagName
              }}</n-collapse-item>
            </n-collapse>
          </n-collapse-item>
        </n-collapse>
      </div>
    </n-collapse-item>
  </n-collapse>
  <n-collapse class="errorlist">
    <n-collapse-item title="HttpError" name="1">
      <div v-for="(item, index) of errors.httpError" :key="index">
        <n-collapse>
          <n-collapse-item title="HttpError" name="index">
            <n-collapse>
              <n-collapse-item title="time" name="1">{{
                item.time
              }}</n-collapse-item>
              <n-collapse-item title="errorUid" name="2"
                >{{ item.errorUid }}
              </n-collapse-item>
              <n-collapse-item title="message" name="3">
                {{ item.message }}</n-collapse-item
              >
              <n-collapse-item title="status" name="4"
                >{{ item.status }}
              </n-collapse-item>
              <n-collapse-item title="statusText" name="5"
                >{{ item.statusText }}
              </n-collapse-item>
              <n-collapse-item title="response" name="6">{{
                item.response
              }}</n-collapse-item>
            </n-collapse>
          </n-collapse-item>
        </n-collapse>
      </div>
    </n-collapse-item>
  </n-collapse>
  <n-collapse class="errorlist">
    <n-collapse-item title="CorsError" name="1">
      <div v-for="(item, index) of errors.corsError" :key="index">
        <n-collapse>
          <n-collapse-item title="CorsError" name="index">
            <n-collapse>
              <n-collapse-item title="time" name="1">{{
                item.time
              }}</n-collapse-item>
              <n-collapse-item title="errorUid" name="2"
                >{{ item.errorUid }}
              </n-collapse-item>
              <n-collapse-item title="message" name="3">
                {{ item.message }}</n-collapse-item
              >
              <n-collapse-item title="tagName" name="4"
                >{{ item.tagName }}
              </n-collapse-item>
            </n-collapse>
          </n-collapse-item>
        </n-collapse>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>

<style>
.errorlist {
  max-width: 250px;
  /* background-color: red; */
  float: left;
}
</style>
