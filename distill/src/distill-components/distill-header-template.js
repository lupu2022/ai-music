//import logo from '../assets/distill-logo.svg';

export const headerTemplate = `
<style>
distill-header {
  position: relative;
  height: 60px;
  background-color: hsl(200, 60%, 15%);
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}
distill-header .content {
  height: 70px;
  grid-column: page;
}
distill-header a {
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 22px 0;
}
distill-header a:hover {
  color: rgba(255, 255, 255, 1);
}
distill-header svg {
  width: 24px;
  position: relative;
  top: 4px;
  margin-right: 2px;
}
@media(min-width: 1080px) {
  distill-header {
    height: 70px;
  }
  distill-header a {
    height: 70px;
    line-height: 70px;
    padding: 28px 0;
  }
  distill-header .logo {
  }
}
distill-header svg path {
  /*
  fill: none;
  stroke: rgba(255, 255, 255, 0.8);
  stroke-width: 3px;
  */
}
distill-header .logo {
  font-size: 18px;
  font-weight: 500;
}
distill-header .nav {
  float: right;
  font-weight: 300;
}
distill-header .nav a {
  font-size: 14px;
  margin-left: 24px;
  text-transform: uppercase;
}
</style>
<div class="content">
  <a class="logo">
  计算音乐：数字乐器，合成器技术，音乐AI
  </a>
  <nav class="nav">
    <a href="https://ai-music.com.cn/">首页</a>
    <a href="https://faust.ai-music.com.cn/" target="_blank">Faust Editor</a>
    <a href="https://lupu.ai-music.com.cn/">Lupu合成引擎</a>
  </nav>
</div>
`;
