$(function() {

  // カルーセル
  $('.carousel').slick({
    autoplay : true,
    dots : true,
    infinite : true,
    autoplaySpeed : 4000,
    arrows : false,
    cssEase: 'linear',
    fade : true,
  });

  // ナビゲーションをホバーしたときに処理
  // リンクはどのHTML要素か
  // ホバー時のイベント処理にはどのjQueryメソッドを使えばよいか
  // アニメーションさせるにはどのjQueryメソッドを使えばよいか
  // 不透明度はどのCSSプロパティで設定するか
  // $('.home').on('mouseover', function() {
  //   $(this).animate({
  //     opacity: 0.5}, 200);
  // });
  // // マウスアウトしたときに透明度を戻す
  // $('.home').on('mouseout', function() {
  //   $(this).animate({
  //     opacity: 1}, 200);
  // });

  // $('.menu a').on('mouseover', function() {
  //   $(this).animate({
  //     opacity: 0.5}, 200);
  // });
  // // マウスアウトしたときに透明度を戻す
  // $('.menu a').on('mouseout', function() {
  //   $(this).animate({
  //     opacity: 1}, 200);
  // });

  // $('#top-btn').on('mouseover', function() {
  //   $(this).animate({
  //     opacity: 0.5}, 200);
  // });
  // // マウスアウトしたときに透明度を戻す
  // $('#top-btn').on('mouseout', function() {
  //   $(this).animate({
  //     opacity: 1}, 200);
  // });

  // $('.item-img').on('mouseover', function() {
  //   $(this).animate({
  //     opacity: 0.5}, 200);
  // });
  // // マウスアウトしたときに透明度を戻す
  // $('.item-img').on('mouseout', function() {
  //   $(this).animate({
  //     opacity: 1}, 200);
  // });

  // $('#btn-close').on('mouseover', function() {
  //   $(this).animate({
  //     opacity: 0.5}, 200);
  // });
  // // マウスアウトしたときに透明度を戻す
  // $('#btn-close').on('mouseout', function() {
  //   $(this).animate({
  //     opacity: 1}, 200);
  // });


  //マウスホバーしたときに透明度の設定 
  $('.hoverIn').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5}, 200);
  });
  // マウスアウトしたときに透明度を戻す
  $('.hoverOut').on('mouseout', function() {
    $(this).animate({
      opacity: 1}, 200);
  });

  // リンクのホバー時に不透明度をアニメーションで変更する
  // $('a').hover(
  // function () {
  //   $(this).animate({ 'opacity': 0.6 }, 300);
  // },
  // function () {
  //   $(this).animate({ 'opacity': 1.0 }, 300);
  // });



  // 100px下へスクローしたらTOPボタンを表示、表示にする
  $(window).scroll(function() {
    if($(this).scrollTop() >= 100){
      // fadeIn
      // $('#top-btn').addClass('fade-in');
      // if($('#top-btn').hasClass('fade-out')){
      //   $('#top-btn').removeClass('fade-out');
      // }
      $('#top-btn').fadeIn();
    }else{
      // fadeOut
      // $('#top-btn').addClass('fade-out');
      // if($('#top-btn').hasClass('fade-in')){
      //   $('#top-btn').removeClass('fade-in');
      // }
      $('#top-btn').fadeOut();
    }
    // console.log($(this).scrollTop());

    // スクロール量 : $(window).scrollTop();
    // 画面の一番上からアニメーションさせたい要素までの長さ : $(”.アニメーションさせたい要素のクラス名”).offset().top;
    // 画面の高さ : $(window).height();
    // 画像を画面下部から少しだけ見せたい分（追加するスクロール量）
    // スクロール量 = 画面の一番上からアニメーションさせたい要素までの長さ - 画面の高さ + 画像を画面下部から少しだけ見せたい分の値（追加するスクロール量）
    // $(window).scrollTop() > $(”.アニメーションさせたい要素のクラス名”).offset().top - $(window).height() + 数値;
    // 参考 https://zenn.dev/hello_taichi/articles/6d0753b701eddb

    let scroll = $(window).scrollTop();
    let aboutTop = $('.about').offset().top;
    let worksTop = $('.works').offset().top;
    let windowHeight = $(window).height();
    const margin = 100;

    if(scroll > aboutTop - windowHeight + margin){
      $('.about').addClass('fade-in');
    }

    if(scroll > worksTop - windowHeight + margin){
      $('.works').addClass('fade-in');
    }
    
  });

  //ページ内リンクのスクロールをなめらかにする 
  // 1 attr()メソッドを使い、クリックされたa要素のhref属性の値を取得する
  // 2 href属性の値が#であれば、スクロール先をhtml要素にする（そうすることでスクロール先がページのトップになる）
  // 3 href属性の値がそれ以外であれば、スクロール先をid名（href属性の値そのまま）にする
  // 4 offset()メソッドを使い、スクロール先の位置を取得する（offset().topと記述することで、上からの位置を取得できる）
  // 5 アニメーションでスクロール先の位置まで移動する

  // $('nav a[href^="#"]')
  $('a[href^="#"]').on('click', function() {
    
    let href = $(this).attr('href');
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $('body, html').animate({
      scrollTop : position
    }, 500, 'swing');
    return false;
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  // attr()メソッドを使い、クリックされた画像のsrc属性の値を取得する
  // attr()メソッドを使い、モーダルの画像部分（img要素）のsrc属性に取得した値を追加する
  
  $('.item-img').on('click', function() {

    let src = $(this).attr('src');
    $('.moudel-img').attr('src', src);

    // $('.moudel').addClass('fade-in');
    $('.moudel').fadeIn();
    return false;

    // if($('.moudel').hasClass('fade-out')){
    //   $('.moudel').removeClass('fade-out')
    // }
  });

  $('#btn-close').on('click',function() {
    // $('.moudel-img').attr('src', "");
   
    // $('.moudel').addClass('fade-out');

    // if($('.moudel').hasClass('fade-in')){
    //   $('.moudel').removeClass('fade-in');
    // }
    $('.moudel').fadeOut();
    return false;
    
  });
  
});


// Question

// $('section').each(function ()
// 解説とeach()メソッド

// $('.box').fadeIn();
// $('.box').fadeOut();
// 内部でdisplay:block?visi

// 
// ページ内リンクのスクロールをなめらかにする（スムーズスクロール）解説
// $('a[href^="#"]').click(function () {
//   const speed = 500;
//   const href = $(this).attr('href');
//   let $target;
//   if (href == '#') {
//     $target = $('html');
//   }
//   else {
//     $target = $(href);
//   }
//   const position = $target.offset().top;
//   $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
//   return false;
// });


// Worksの画像をクリックしたときにモーダルで拡大表示する
// return false;
// 必要？ 
// イベントの伝播（でんぱん）

// button OR a

// slackは画像以外もできる？