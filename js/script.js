$( "#autoWidth" ).lightSlider({ 
    autoWidth:true,
    gallery: false, // 相本模式
    loop: true, // 無限循環
    thumbItem: 10, // 縮圖數量
    slideMargin: 30, // 間隔寬度
    enableDrag: true, // 當左右拖曳時，則切換上/下項目
    keyPress: true,
    currentPagerPosition: 'middle',
    onSliderLoad: function() {
        $('#autoWidth').removeClass('cs-hidden');
    } 
});

/*
item	                number	    3	        同時顯示的slide的數量
autoWidth	            boolean	    false	    定製每一個slide的寬度
slideMove	            number	    1	        同一時間被移動的slide的數量
slideMargin 	        number	    10	        每一個slide之間的間距
addClass	            string	    ''	        為幻燈片新增額外的class
mode	                string	    'slide'	    動畫過渡的型別，可以是'slide'或'fade'
useCSS   	            boolean	    true	    true表示使用CSS動畫過渡效果，false表示使用jQuery動畫過渡效果
cssEasing    	        string	    'ease'	    CSS過渡動畫使用的easing效果
easing      	        string	    'linear'	jQuery過渡動畫使用的easing效果
speed	                number	    400	        過渡動畫的持續時間，單位毫秒
auto        	        boolean	    false	    如果設定為true，幻燈片將自動播放
pauseOnHover	        boolean	    false	    滑鼠滑過時停止自動播放
loop        	        boolean	    false	    false表示在播放到最後一幀時不會跳轉到開頭重新播放
slideEndAnimation	    bolean	    true	    允許slideEnd動畫
pause	                number	    2000	    兩個過渡動畫之間的間隔時間
keyPress    	        boolean	    false	    是否允許使用鍵盤導航
controls    	        boolean	    true	    如果設定為false，prev/next按鈕將不會被顯示
prevHtml    	        string	    ''	        自定義prev按鈕的HTML
nextHtml    	        string	    ''	        自定義next按鈕的HTML
rtl         	        boolean	    false	    改變方向，從右到左
adaptiveHeight	        boolean	    false	    基於各個slide的高度來動態調整幻燈片的高度
vertical    	        boolean	    false	    製作垂直幻燈片效果
verticalHeight	        number	    500	        垂直幻燈片模式中設定slide的高度（如果slide數量大於1）
vThumbWidth 	        number	    100	        垂直幻燈片模式中縮圖的寬度
thumbItem   	        number	    10	        同時顯示縮圖的數量
pager       	        boolean	    true	    是否開啟圓點導航
gallery	                boolean	    true	    是否開啟帶縮圖的幻燈片模式
galleryMargin	        number	    5	        畫廊和slide之間的間距
thumbMargin   	        number	    3	        縮圖之間的間距
currentPagerPosition	string	    'middle'	縮圖的位置，可以是: 'left', 'middle', 'right'
enableTouch         	boolean	    true	    是否支援移動觸控
enableDrag          	boolean	    true	    是否支援桌面裝置中使用滑鼠拖拽切換幻燈片
freeMove            	boolean	    true	    是否允許在swipe或drag的時候自由移動幻燈片
responsive          	object	    null	    單獨設定每一個breakpoint
*/