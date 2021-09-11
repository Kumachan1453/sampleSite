document.getElementById("header").onclick = function(){
    console.log(`ボタンを押した`);
    document.querySelector('html').classList.toggle('open');
}

// Document の getElementById() メソッドは、 id プロパティが指定された文字列に一致する要素を表す Element オブジェクトを返します。要素の ID は指定されていれば固有であることが求められているため、特定の要素にすばやくアクセスするには便利な方法です。