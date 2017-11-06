// $(document).ready(function() {
$.fn.extend({
        control: function(tab) {
            if (tab.effect === undefined) {
                tab.effect = false;
            } else {
                tab.effect = true;
            }
            tab.eventType = tab.eventType || "click"
                // 点击前颜色
            tab.liColor = tab.liColor || "#fff";
            tab.bgColor = tab.bgColor || "#000";
            //点击字体变颜色
            tab.liClickColor = tab.liClickColor || "red"
            tab.bgClickColor = tab.bgClickColor || "#000";
            //点击前字体颜色
            $(".tab li").css({
                    color: tab.liColor,
                    backgroundColor: tab.bgColor
                })
                //显示第一个颜色
            $(".tab li").eq(0).css({
                color: tab.liClickColor
            })



            if (tab.effect) {
                $("div").hide().eq(0).show();
                //点击按钮触发事件（渐隐渐现）
                if (tab.eventType == "click") {
                    $(".tab li").click(function() {
                        $(".tab li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
                        $("div").hide().eq($(this).index()).fadeIn();
                    });
                }
                if (tab.eventType == "mouseover") {
                    // 鼠标移上触发事件
                    $(".tab li").mouseover(function() {
                        $(".tab li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
                        $("div").hide().eq($(this).index()).fadeIn();
                    })
                }
            } else {
                //滑动
                // $(".tab li").click(function() {

                //         $(".tab li").find("div").css({
                //             marginTop: "-202px"
                //         })
                //     }
            }

        }

    })
    // });