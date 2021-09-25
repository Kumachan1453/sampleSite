document.getElementById("header").onclick = function(){
    console.log(`ボタンを押した`);
    document.querySelector('html').classList.toggle('open');
}

const btn = document.getElementsByClassName("btns");
const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        // [i]すなわち矢印ボタンをクリックした場合
        const slide = document.querySelector(".slide ul").children;
        const Indicator = document.querySelector(".indicator").children;
        // childrenとは何か？ https://itsakura.com/js-childnodes
        // ノードとは何か？　https://eng-entrance.com/what-is-dom#:~:text=%E4%B8%8A%E3%81%AE%E5%9B%B3%E3%81%AB%E3%81%82%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%80%81%E3%83%8E%E3%83%BC%E3%83%89%E3%81%A8%E3%81%AF,children%E3%80%8D%E3%83%8E%E3%83%BC%E3%83%89%E3%81%A8%E8%A1%A8%E7%8F%BE%E3%81%99%E3%82%8B%E3%80%82
        // HTMLCollectionオブジェクトとは何か？ https://so-zou.jp/web-app/tech/programming/javascript/dom/html-collection.htm
    
        const lastSlideIndex = slide.length - 1;
        const firstSlideIndex = 0;
        const lastIndicatorIndex = Indicator.length - 1;
        const firstIndicatorIndex = 0;
        // lengthとは何か？ https://www.javadrive.jp/javascript/array/index6.html
    
        const firstItem = slide.item(firstSlideIndex);
        const lastItem = slide.item(lastSlideIndex);
        const firstIndicator = Indicator.item(firstIndicatorIndex);
        const lastIndicator = Indicator.item(lastIndicatorIndex);
        // itemとは何か？　わからない。

        if (btn[i] === preBtn) {
            setTimeout(() => {
                firstItem.parentNode.insertBefore(lastItem, firstItem);
                firstIndicator.parentNode.insertBefore(
                  firstIndicator,
                  lastIndicator.nextSibling
                );
            }, 600);
        } else if (btn[i] === nextBtn) {
            setTimeout(() => {
                lastItem.parentNode.insertBefore(firstItem, lastItem.nextSibling);
                firstIndicator.parentNode.insertBefore(lastIndicator, firstIndicator);
            }, 600);
        }
        // parentNode.insertBefore()とは何か？https://developer.mozilla.org/ja/docs/Web/API/Node/insertBefore
        console.log(ボタンを押しました);
    });
}

// setTimeoutはボタン連打対策の応急処置です。


// document.getElementById("sliderLeftButton").onclick = function(){
//     console.log(`ボタンを押した`);
//     document.querySelector('html').classList.toggle('slideLeft');
// }

// document.getElementById("sliderRightButton").onclick = function(){
//     console.log(`ボタンを押した`);
//     document.querySelector('html').classList.toggle('slideRight');
// }
// Document の getElementById() メソッドは、 id プロパティが指定された文字列に一致する要素を表す Element オブジェクトを返します。要素の ID は指定されていれば固有であることが求められているため、特定の要素にすばやくアクセスするには便利な方法です。


// const galleryImages = ["images/photo01.jpg", "images/photo02.jpg", "images/photo03.jpg", "images/photo04.jpg", "images/photo05.jpg", "images/photo06.jpg", "images/photo07.jpg", "images/photo08.jpg", "images/photo09.jpg"]


