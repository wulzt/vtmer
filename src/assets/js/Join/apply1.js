/* 
 * @Author: anchen
 * @Date:   2017-10-28 11:48:23
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-11-05 23:31:12
 */
$(document).ready(function() {
    /*禁止下拉*/
    document.addEventListener('touchmove', function(e) {
        e.preventDefault()
    }, false);
    /*背景图*/
    /*$('.scene').parallax();*/
    $('.LoadingWrap').fadeOut();
    /*/!*下一步滑动和menu切换*!/
    function myAddSwitch(i) {
        $('.menu-symbol').eq(i).addClass('menu-active');
        $('.menu-text').eq(i + 1).addClass('menu-active');
        $('.menu-number').eq(i + 1).addClass('menu-number-active');
        $(".banner-list").animate({
            left: '-=6.56rem'
        }, "fast");
    }
    /!*上一步滑动和menu切换*!/
    function myRemoveSwitch(i) {
        $('.menu-symbol').eq(i).removeClass('menu-active');
        $('.menu-text').eq(i + 1).removeClass('menu-active');
        $('.menu-number').eq(i + 1).removeClass('menu-number-active');
        $(".banner-list").animate({
            left: '+=6.56rem'
        }, "fast");
    }*/
    /*按钮点击*/
    /*$('.next').click(function(event) {
        if ($('.menu-active').length == 1) {
            myAddSwitch(0);
            $('.previous').css({
                display: 'block'
            });
            $('.next').attr('disabled', "true");
            //判断当前为组别选择
        } else if ($('.menu-active').length == 3) {
            myAddSwitch(1);
            $(this).attr({
                'value': '完成',
                'id': 'completed'
            });
            //判断当前为基本内容
        } else if ($('.menu-active').length == 5) {
            if (reg.test($.trim($('#Usernumber').val())) == false) {
                phoneAlert();
                
               
            } else {
                myAjax();
            }
        }
    });
    $('.previous').click(function(event) {
        if ($('.menu-active').length == 5) {
            myRemoveSwitch(1);
            $('.next').attr({
                'value': '下一步',
            }).removeAttr("id"); //判断当前为详细信息
        } else if ($('.menu-active').length == 3) {
            myRemoveSwitch(0);
            $(this).css({
                display: 'none'
            }); //判断当前为基本内容
            $('.next').removeAttr('disabled', "true");
        }
    });*/
    /*组别介绍div的切换*/
    $('.choice-button').click(function() {
        var i = $(this).index();
        //nav选中状态的切换
        $(this).addClass('active').siblings().removeClass('active');
        //已选中的div动态进入
        $(".choice-introduce>div").addClass('choice-introduce-active').eq(i).siblings().removeClass('choice-introduce-active');
        //if (i !== 0) {
            $('.next').css({
                'background': 'rgb(51, 208, 102)',
                'border': '1px solid rgb(51, 208, 102)'
            }).removeAttr('disabled', "true");
            $('.groupChoiceMsg').html('');
        //} else {
            /*$('.next').css({
                'background': 'rgba(153, 153, 153, 0.8)',
                'border': '1px solid rgba(153, 153, 153, 0.8)'
            }).attr('disabled', "true");*/
            //$('.groupChoiceMsg').html(' (现不招' + this.value + ')');
        //}
    });
    /*上传图片本地预览*/
    $('#upImg').change(function() {
        oUpImgInpt = document.getElementById('upImg').files[0];
        var oImgsrc = window.URL.createObjectURL(oUpImgInpt);
        $('#userimg').attr('src', oImgsrc);
        $('#camera').remove();
    });
    /*报名成功弹窗*/
    /*function conpeletedAlert() {
        $('body').append('<div id="mask"></div>').append(' <div id="completedAlert"class="moveIn "><img src="img/关闭.png" alt="关闭按钮" id="close1"/><div class="completedAlertContent"><p >提交成功<br />我们期待你的加入</p><div class="completedAlertBtns"><input type="button" class="zhuyeBtn" value="确定" /></div></div></div>');
        $('#close1').click(function(event) {
            $(this).parent().siblings('#mask').remove();
            $(this).parent().remove();
        });
        /!* $('.cancleBtn').click(function(event) {
            $(this).parent().parent().parent().siblings('#mask').remove();
            $(this).parent().parent().parent().remove();
        });*!/
        $('.zhuyeBtn').click(function(event) {
            window.open('index.html', '_self');
            $(this).parent().parent().parent().siblings('#mask').remove();
            $(this).parent().parent().parent().remove();
        });
    }*/
    /*重复报名弹窗*/
    /*function repeatedAlert() {
        $('body').append('<div id="mask"></div>').append(' <div class="repeatedAlert moveIn"><img src="img/关闭.png" alt="关闭按钮" id="close2"/><div class="repeatedAlertContent"><p >重复提交<br />请耐心等待面试通知</p><div class="repeatedAlertBtns"><input type="button" class="zhuyeBtn2" value="主页" /></div></div></div>');
        $('#close2').click(function(event) {
            $(this).parent().siblings('#mask').remove();
            $(this).parent().remove();
        });
        $('.cancleBtn2').click(function(event) {
            $(this).parent().parent().parent().siblings('#mask').remove();
            $(this).parent().parent().parent().remove();
        });
        $('.zhuyeBtn2').click(function(event) {
            window.open('index.html', '_self');
            $(this).parent().parent().parent().siblings('#mask').remove();
            $(this).parent().parent().parent().remove();
        });
    }*/
    /*失败的重试弹窗*/
    /*function tryAlert() {
        $('body').append('<div id="mask"></div>').append(' <div class="repeatedAlert moveIn"><img src="img/关闭.png" alt="关闭按钮" id="close2"/><div class="repeatedAlertContent"><p >诶？有点小问题<br />请重新试试吧</p><div class="repeatedAlertBtns"><input type="button" class="repeatBtn" value="重试" /><input type="button" class="cancleBtn2" value="返回" /></div></div></div>');
        $('#close2').click(function(event) {
            $(this).parent().siblings('#mask').remove();
            $(this).parent().remove();
        });
        $('.cancleBtn2').click(function(event) {
            $(this).parent().parent().parent().siblings('#mask').remove();
            $(this).parent().parent().parent().remove();
        });
        $('.repeatBtn').click(function(event) {
            $(this).parent().parent().parent().siblings('#mask').remove();
            $(this).parent().parent().parent().remove();
            myAjax();
        });
    }*/
    /*手机有误弹窗*/
    /*function phoneAlert() {
        $('body').append('<div id="mask"></div>').append(' <div class="repeatedAlert moveIn"><img src="img/关闭.png" alt="关闭按钮" id="close2"/><div class="repeatedAlertContent"><p >手机号码有误<br />请再仔细检查一下吧</p><div class="repeatedAlertBtns"><input type="button" class="repeatBtn" value="好的" /><input type="button" class="cancleBtn2" value="返回" /></div></div></div>');
        $('#close2').click(function(event) {
            $(this).parent().siblings('#mask').remove();
            $(this).parent().remove();
        });
       $('.cancleBtn2').click(function(event) {
            $(this).parent().parent().parent().siblings('#mask').remove();
            $(this).parent().parent().parent().remove();
        });
      
      $('.repeatBtn').click(function(event) {
            $(this).parent().parent().parent().siblings('#mask').remove();
            $(this).parent().parent().parent().remove();
             myRemoveSwitch(1);
                $('.next').attr({
                'value': '下一步',
            }).removeAttr("id"); 
        });
    }*/
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    /*基本信息判空*/
    $('.mainForm-content-baseMsg input').each(function(i) {
        $(this).blur(function(event) {
            if ($.trim($(this).val()) == '') {
                $(this).parent().find("span").addClass('red');
            } else {
                $(this).parent().find("span").removeClass('red');
            }
        });
    });
    $('input').on('input propertychange', function() {
        /*  if (($.trim($('#Username').val()) !== "") && ($.trim($('#Usercollege').val()) !== "") && (reg.test($.trim($('#Usernumber').val())) == true)) {
            $('.next').removeAttr('disabled', "true");
        } else {
            $('.next').attr('disabled', "true");
        }
        if ((reg.test($.trim($('#Usernumber').val())) == false)&& ($.trim($('#Usernumber').val()) !== "")){
           $('#Usernumber').parent().find("span").addClass('red');
        } else {
           $('#Usernumber').parent().find("span").removeClass('red');
        }
    */
        if (($.trim($('#Username').val()) !== "") && ($.trim($('#Usercollege').val()) !== "") && ($.trim($('#Usernumber').val()) !== "")) {
            $('.next').removeAttr('disabled', "true");
        } else {
            $('.next').attr('disabled', "true");
        }
    });
    /*ajax*/
    /*function myAjax() {
        $('.LoadingWrap').fadeIn();
        var UpData = new FormData(document.getElementById('FupForm')),
            oChoiceGroup = document.getElementsByClassName('active')[0],
            UserSex = document.getElementById('UserSex');

        UpData.append("group", oChoiceGroup.value);
        UpData.append("UserSex", UserSex.value);
        //Ajax
        $.ajax({
            url: 'https://www.ustopmoving.xin/api/application',
            type: 'POST',
            data: UpData,
            contentType: false,
            processData: false,
            success: function(data, status) {
                console.log(data + ':' + data.code);
                if (data.code == 5001) {
                    repeatedAlert();
                    document.getElementById('FupForm').reset();
                    /!*$('#userimg').attr('src', 'img/apply/camera.png');
                    myRemoveSwitch(1);
                    myRemoveSwitch(0);*!/
                } else {
                    conpeletedAlert();
                    document.getElementById('FupForm').reset();
                    /!*$('#userimg').attr('src', 'img/apply/camera.png');*!/
                    /!*myRemoveSwitch(1);
                    myRemoveSwitch(0);
*!/
                }
                $('.LoadingWrap').fadeOut();
            },
            fail: function(err, status) {
                tryAlert();
                console.log(err);
                $('.LoadingWrap').fadeOut();
            }
        });
    }*/
});
