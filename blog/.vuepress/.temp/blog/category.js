export const categoryMap = {"tag":{"/":{"path":"/tags/","map":{"Giới thiệu":{"path":"/tags/gi%E1%BB%9Bi-thi%E1%BB%87u/","keys":["v-44755bac","v-9728b424"]},"NodeJS":{"path":"/tags/nodejs/","keys":["v-1b6b6053","v-1b6b6072","v-1b6b6091","v-1b6b60b0","v-1b6b60cf"]},"RestAPI":{"path":"/tags/restapi/","keys":["v-1b6b60cf"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
