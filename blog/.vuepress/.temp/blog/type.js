export const typeMap = {"post":{"/":{"path":"/","keys":["v-1b6b6053","v-1b6b6072","v-1b6b6091","v-1b6b60b0","v-1b6b60cf","v-44755bac","v-9728b424"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
