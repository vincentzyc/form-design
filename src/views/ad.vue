<template>
  <base-page :paths="[111,222,333]" title="广告管理" hideBack>
    <div class="ad" slot="content">
      <h1 style="height:300px">This is an ad page</h1>
      <el-button @click="$router.push('/')">hoemhomehome</el-button>
      <h1 style="height:300px">This is an ad page</h1>
      <h1 style="height:300px">This is an ad page</h1>
      <h1 style="height:300px">This is an ad page</h1>
    </div>
  </base-page>
</template>
