
/** 左侧下拉菜单控制 **/

$(function () {
    var width = $(".leftsidebar_box").width() + 2;
    //初始化源码框和地图框的停靠范围    
    $(".iframe_wrapper").css("margin-left", width + $("#code_wrapper").width());
    $(".leftsidebar_box dd").hide(); //隐藏
    /**系统默认显示第一行菜单**/
    $(".first_dt").parent().find('dd').show(); // 默认显示第一行菜单   
    $(".first_dt").css("background-image", "url(images/left/MinusSign.png)");    
    /**一级菜单项单击事件**/
    $(".leftsidebar_box dt").click(function () {
        //判断当前一级菜单下的二级菜单项是否隐藏
        if ($(this).parent().find('dd').is(":hidden")) {
            //先隐藏所有的菜单（包括改变图标的状态）
            $(this).parent().parent().find("dd").slideUp();            
            $(this).parent().parent().find("dt").css("background-image", "url(images/left/AddSign.png)");
            //再打开当前的菜单
            $(this).parent().find('dd').slideToggle(); //滑动方式展开子菜单                              
            $(this).css("background-image", "url(images/left/MinusSign.png)");
        }
        else {
            $(this).parent().find('dd').slideUp(); //滑动方式隐藏子菜单                
            $(this).css("background-image", "url(images/left/AddSign.png)");
        }
    });

    /**二级菜单项单击事件**/
    $(".leftsidebar_box dd").click(function () {
        //改变当前按钮的样式(选中状态)
        $(this).parent().parent().find('dl').find("dd").css("color", "");
        $(this).parent().parent().find('dl').find("dd").css("font-weight", "");
        $(this).css("color", "#0075C7");
        $(this).css("font-weight", "bold");
    });
    

    $(".leftsidebar_box").css("width", width);
})

/**系统初始默认页面源码显示 **/
$(function () {    
    setCore("Navigation", "MapControls"); //显示默认页面的源码
})

/** 二级菜单项对应功能页面的源码显示 **/
function setCore(name, catalog) {
    var htmlUrl = "demos/" + catalog + "/" + name + ".htm"; //请求的页面
    $('#container_iframe').attr("src", htmlUrl); //设置右侧容器的页面地址   
}











