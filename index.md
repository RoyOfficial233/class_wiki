---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Roy Package Manager"
  text: "一个轻量级的包管理器"
  tagline: "使用Shell Script编写"
  actions:
    - theme: brand
      text: 安装
      link: /install
    - theme: alt
      text: 关于
      link: /about
    - theme: alt
      text: 版本列表
      link: /versions

features:
  - title: 单文件脚本
    details: 告别臃肿,回归简洁.易安装,易卸载.
  - title: 高级模式
    details: 对于需要更多自定义选项的高级用户,我们提供高级模式.
---
<template>
  <div id="app">
    <!-- Your main content here -->
  </div>
</template>

<script>
export default {
  // Your script code here
}
</script>

<style>
/* Your global styles here */

/* Fix the footer at the bottom of the page */
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>

<template>
  <div id="app">
    <!-- Your main content here -->

    <!-- Footer -->
    <div class="footer">
      This is the footer content.
    </div>
  </div>
</template>
<footer style="text-align: center; font-size: 0.9rem; color: #666;" class="footer">
Copyright © 2022-2025 <a href="https://github.com/RoyNetworks">RoyOfficial</a> All Right Reserved.
</footer>