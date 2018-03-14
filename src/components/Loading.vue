<template>
    <div class="loading1">
        <div class="lbd"><div class="ball-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    </div>
</template>

<script>
  export default {
    name: 'Loading',
  }
</script>

<style>
.loading1{ z-index:999; position:fixed; top:0; left:0; width:100%; height:100%; background:#fff; overflow:hidden;}
.loading1 .lbd{ z-index:2; position:relative; left:49%; top:35%; text-align:center;}
@-webkit-keyframes ball-spin-fade-loader{50%{opacity:.3;-webkit-transform:scale(.4);transform:scale(.4)}
    100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}
}
@keyframes ball-spin-fade-loader{50%{opacity:.3;-webkit-transform:scale(.4);transform:scale(.4)}
    100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}
}
.ball-spin-fade-loader>div:nth-child(1){top:25px;left:0;-webkit-animation:ball-spin-fade-loader 1s -.96s infinite linear;animation:ball-spin-fade-loader 1s -.96s infinite linear}
.ball-spin-fade-loader>div:nth-child(2){top:17.05px;left:17.05px;-webkit-animation:ball-spin-fade-loader 1s -.84s infinite linear;animation:ball-spin-fade-loader 1s -.84s infinite linear}
.ball-spin-fade-loader>div:nth-child(3){top:0;left:25px;-webkit-animation:ball-spin-fade-loader 1s -.72s infinite linear;animation:ball-spin-fade-loader 1s -.72s infinite linear}
.ball-spin-fade-loader>div:nth-child(4){top:-17.05px;left:17.05px;-webkit-animation:ball-spin-fade-loader 1s -.6s infinite linear;animation:ball-spin-fade-loader 1s -.6s infinite linear}
.ball-spin-fade-loader>div:nth-child(5){top:-25px;left:0;-webkit-animation:ball-spin-fade-loader 1s -.48s infinite linear;animation:ball-spin-fade-loader 1s -.48s infinite linear}
.ball-spin-fade-loader>div:nth-child(6){top:-17.05px;left:-17.05px;-webkit-animation:ball-spin-fade-loader 1s -.36s infinite linear;animation:ball-spin-fade-loader 1s -.36s infinite linear}
.ball-spin-fade-loader>div:nth-child(7){top:0;left:-25px;-webkit-animation:ball-spin-fade-loader 1s -.24s infinite linear;animation:ball-spin-fade-loader 1s -.24s infinite linear}
.ball-spin-fade-loader>div:nth-child(8){top:17.05px;left:-17.05px;-webkit-animation:ball-spin-fade-loader 1s -.12s infinite linear;animation:ball-spin-fade-loader 1s -.12s infinite linear}
.ball-spin-fade-loader>div{ background:#fcdd9f; width:12px;height:12px;border-radius:100%;margin:2px;-webkit-animation-fill-mode:both;animation-fill-mode:both;position:absolute}
</style>
