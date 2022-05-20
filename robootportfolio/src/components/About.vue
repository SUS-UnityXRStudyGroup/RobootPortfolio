<template>
    <h1>{{ header }}</h1>
    <p>
    Roboot は ゲームエンジン「Unity」を用いて作成したVRシューティングゲームです。<br>
    好きなロボットアニメから着想を得て、「全天球風コックピット」と「球体型コントローラー」を採用し、<br>
    既存のコントローラーによる操作ではなく、よりVRらしいロボット操作を追求したシューティングゲームとなっています。
    </p>

    <div class="inline-image">
        <h2>全天球風コックピット</h2>    
        <img alt="全天球風コックピット" src="../assets/ingame_cockpit.gif">
    </div>
    <div class="inline-image">
        <h2>球体型コントローラーと3Dユーザーインターフェイス</h2>
        <img alt="球体型コントローラーと3D空間上に浮かぶユーザーインターフェイス" src="../assets/ingame_1.png">
    </div>
</template>

<script>
export default {
  name: 'PromotionVideo',
  props: {
      header: String
  }
}
</script>

<style scoped>
.inline-image {
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
    text-align: right;
    margin: 0 0 0 20px;
    padding: 0;
}

img {
    width: 30%; /*画像サイズ指定*/
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
}

</style>