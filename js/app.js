(() => {
  //変数に$マークをつける＝その変数はDOM要素を取ってきているという意味
  const $doc = document; //document:開いているページの全ての情報が取得できる
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]"); //querySelectorAll:DOM要素の中から条件に当てはまるDOMを取得してくる（id→#id名、class→class名なども可能）
  const $content = $tab.querySelectorAll("[data-content]");
  const ACTIVE_CLASS = "is-active";
  const navLen = $nav.length;
  //初期化
  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  //clickしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault(); //その要素の効果を消す（aタグ：リンク要素）

    // クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav,contentを全て一旦リセット
    let index = 0;
    while (index < navLen) {
      $content[index].style.display = "none";
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };

  //全nav要素に対して関数を適応・発火
  let index = 0;
  while (index < navLen) {
    $nav[index] = addEventListener("click", (e) => handleClick(e));
    index++;
  }
})();
