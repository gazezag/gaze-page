import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useStore = defineStore('errorInformation', () => {
  const Error_List = [
    {
      type: 'js',
      errorUid:
        'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=',
      time: 1111,
      message: 'Uncaught Error: this is a Error',
      detail: {
        type: 'Error',
        stackTrace: [
          {
            filename: 'http://localhost:3000/src/test.ts',
            functionName: 't',
            line: 2,
            col: 9
          },
          {
            filename: 'http://localhost:3000/src/main.ts?t=1660205635051',
            functionName: '',
            line: 14,
            col: 3
          }
        ]
      },
      breadcrumbs: []
    },
    {
      type: 'unhandledrejection',
      errorUid:
        'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=',
      time: 3089,
      message: {},
      detail: {
        type: {},
        stackTrace: [
          {
            filename: 'http://localhost:3000/src/test.ts?t=1660205726302',
            functionName: '',
            line: 3,
            col: 12
          },
          {
            filename: '<anonymous>',
            functionName: 'new Promise',
            line: null,
            col: null
          },
          {
            filename: 'http://localhost:3000/src/test.ts?t=1660205726302',
            functionName: 't',
            line: 2,
            col: 3
          },
          {
            filename: 'http://localhost:3000/src/main.ts?t=1660205726302',
            functionName: '',
            line: 14,
            col: 3
          }
        ]
      },
      breadcrumbs: []
    },
    {
      type: 'resource',
      errorUid:
        'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=',
      time: 6944.0999999940395,
      message: '',
      detail: {
        type: 'Unknwon',
        src: 'http://thisisaerrorimg.com/errorImg',
        outerHTML: '<img src="http://thisisaerrorimg.com/errorImg" alt="img">',
        tagName: 'IMG'
      },
      breadcrumbs: []
    },
    {
      type: 'http',
      errorUid:
        'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=',
      time: 3127.7000000029802,
      message: 'xxxxxxx',
      detail: {
        status: 404,
        response: '',
        statusText: 'Not Found'
      },
      breadcrumbs: []
    },
    {
      type: 'cors',
      errorUid:
        'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=',
      time: 3127.7000000029802,
      message: '',
      detail: {
        tagName: 'script'
      },
      breadcrumbs: []
    }
  ];

  return {
    Error_List
  };
});
