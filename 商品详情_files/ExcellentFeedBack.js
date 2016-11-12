//�ص��������������
$(function(){
    $.extend({
        survey:function(options){
            //Ĭ������
            var defaults = {
                content: "������ʹ�ý�������뷨�������ǰɣ����ǽ������������ĸ��ܣ���", //�����Ĭ������
                width: "298",
                height: "207",
                words: 500,
                survClass: 'feedback',//���������ʽ
                backTopClass: 'backtop',//���ض�����ʽ
                api: baseDetailUrl+"c=Ajax_DetailReply&a=AddReply&callback=?&t="+Math.random(), //Ajax��ַ
                channel: '<em>����ǰҳ�桱</em>',
                merchantId:0
            }
            var options = $.extend(defaults, options);
            var merchantId = defaults.merchantId;
            var survClass   = defaults.survClass;
            var backTopClass    = defaults.backTopClass;
            
            //��ȡIE�汾
            if ($.browser.msie) {
                var ieVersion = parseInt($.browser.version);
            }

            //�������ض���������������
            var __feedCreat = function(){
                var feedHtml = $('#pubFeedBack');
                feedHtml.html('<a class="' + survClass +'" href="javascript:void(0)" id="callSurvey" title="���鷴��">���鷴��</a><a class="'+ backTopClass +'" href="javascript:void(0)" style="display:none" id="backTop" title="���ض���">���ض���</a>');
                //$("body").append(feedHtml);
                __ie6Fixed();
            }

            //����������HTML
            var __surveyCreate = function() {
                var surveyHtml = $("<div></div>");
                surveyHtml.addClass("survey-box");
                surveyHtml.attr("id", "D_SurveyBox");
                if (ieVersion && ieVersion < 10) {
                    surveyHtml.addClass("survey-ie")
                }
                surveyHtml.html('<div class="survey-header"><div class="survey-title">����' + options.channel + '������</div><a id="D_SurveyClose" class="survey-close" href="#"></a></div><div class="survey-main"><div class="survey-radio survey-radio-good" idx="1"><i></i>����</div><div class="survey-radio survey-radio-bad" idx="2"><i></i>������</div><textarea id="D_SurveyText" class="survey-text default">' + options.content + '</textarea><div class="survey-count">����������<label id="D_SurveyCountCur" class="survey-count-cur">' + options.words + '</label>��</div><button id="D_SurveySubmit" class="survey-submit">�ύ</button></div><div id="D_SurveyMask" class="survey-mask"></div><div id="D_SurveyTip" class="survey-tip"></div>');
                $("body").append(surveyHtml);
                __ie6Fixed();
            }

            //��������ʾ
            var __surveyShow = function() {
                var surveyBox = $("#D_SurveyBox");
                if (!surveyBox) return;
                if (!ieVersion || ieVersion >= 10) {
                    surveyBox.removeClass("survey-hide-w3c").addClass("survey-show-w3c")
                }
                surveyBox.css("visibility", "visible")
            }

            //����������
            var __surveyHide = function() {
                var surveyBox = $("#D_SurveyBox");
                if (!surveyBox) return;
                __reset();
                if (!ieVersion || ieVersion >= 10) {
                    surveyBox.removeClass("survey-show-w3c").addClass("survey-hide-w3c");
                    return
                }
                surveyBox.css("visibility", "hidden")
            }

            //��������
            var __reset = function() {
                $("#D_SurveyText").val(options.content).addClass("default");
                $(".survey-count-cur").text(options.words);
                $(".survey-radio").removeClass("survey-radio-good-sel survey-radio-bad-sel")
            }

            //���¼�
            var __initEvent = function() {

                $(window).resize(function(){
                    var winW = $(this).width();
                    if (winW <= 1124){
                        $('#pubFeedBack').hide();
                    } else {
                        $('#pubFeedBack').show();
                    }
                })
                $(window).bind('scroll',function(){
                    //console.log($(this).scrollTop());                    
                    if($(this).scrollTop() > 50) {
                        $("#backTop").fadeIn().css({'display':'block'})
                    } else {
                        $("#backTop").fadeOut().css({'display':''})
                    }
                })

                //���ض���
                $("#backTop").bind('click',function(e) {
                    e.preventDefault();
                    $('html,body').scrollTop(0);
                })

                //��ʾ������
                $("#callSurvey").bind('click',function(e) {
                    e.preventDefault(); 
                    __surveyShow();
                })

                //�رշ�����
                var surveyClose = $("#D_SurveyClose");
                surveyClose.bind("click", function(e) {
                    e.preventDefault();
                    __surveyHide()
                });

                //ѡ�����ⲻ����
                var surveyRadios = $(".survey-radio");
                if (!surveyRadios || !surveyRadios.length) return;
                surveyRadios.each(function() {
                    $(this).bind("click", function() {
                        surveyRadios.removeClass("survey-radio-good-sel survey-radio-bad-sel");
                        if ($(this).attr("idx") == 1) {
                            $(this).addClass("survey-radio-good-sel")
                        } else {
                            $(this).addClass("survey-radio-bad-sel")
                        }
                    })
                });

                //�ı���״̬
                var surveyText = $("#D_SurveyText"), surveySubmit = $("#D_SurveySubmit");
                surveyText.bind({
                    "focus": function() {
                        if ($(this).val() == options.content) {
                            $(this).val("")
                        }
                        $(this).removeClass("default")
                    },
                    "blur": function() {
                        if ($(this).val() == "" || $(this).val() == options.content) {
                            $(this).val(options.content);
                            $(this).addClass("default")
                        } else {
                            $(this).removeClass("default")
                        }
                    },
                    "keyup": function() {
                        var tempLen = (options.words - $(this).val().length), count = $("#D_SurveyCountCur");
                        count.html(tempLen);
                        if (tempLen < 0) {
                            count.addClass("survey-count-over");
                            surveySubmit.attr("disabled", "disabled").addClass("survey-submit-disabled");
                        } else {
                            count.removeClass("survey-count-over");
                            surveySubmit.removeAttr("disabled").removeClass("survey-submit-disabled");
                        }
                    }
                });

                //�ύ
                if(!surveySubmit.hasClass("survey-submit-disabled")){
                    surveySubmit.bind("click", function() {
                        __submit.call(this)
                    })
                }
            }

            //��֤����
            var __validate = function() {
                var selRadio = $(".survey-radio-good-sel").length > 0 ? $(".survey-radio-good-sel").attr("idx") : "" 
                || $(".survey-radio-bad-sel").length > 0 ? $(".survey-radio-bad-sel").attr("idx") : "";
                var valIn = $("#D_SurveyText").val();
                //userid = $.cookie('zol_userid');  //��ȡ��¼cookie
                if ("" == selRadio) {
                    __tip("warning", "��ѡ�� '����' ���� '������'��");
                    return null
                }
                if (valIn.length == 0 || valIn == options.content) {
                    __tip("warning", "����������" + options.channel + "�Ľ��飡");
                    return null
                }
                /*�ж��Ƿ��¼
                if(!userid) {
                    __tip("warning", "��¼����ܷ���Ŷ��");
                    return null
                }
                */
                return {causes : selRadio, content : valIn}
            }

            //Ajax�ύ
            var __submit = function() {
                if (!(feedContent = __validate())) return;
                $.getJSON(
                    options.api,
                    {pageType:cType+'_'+aType,causes:feedContent.causes,content:feedContent.content,merchantId:merchantId},
                    function(data) {
                        if (data.flag == 1) {
                            __tip("success", "�ύ�ɹ�! лл���ķ���!");
                            setTimeout(function() {
                                    __surveyHide()
                            }, 1000)
                        } else {
                            if (data.flag == 0) {
                                    __tip("warning", "�ύʧ��! ���Ժ�����!")
                            } else {
                                if (data.flag == 2) {
                                        __tip("warning", "10������ֻ���ύһ�ζ�!")
                                }
                            }
                        }   
                    }
                );
            }

            //������ʾ
            var __tip = function(type, tipText) {
                var surveyTip = $("#D_SurveyTip"), surveyMask = $("#D_SurveyMask");
                if (!surveyTip || !surveyMask) return;
                surveyTip.removeClass("warning success").addClass(type).html(tipText);
                surveyMask.css("display", "block");
                surveyTip.css("display", "block");
                setTimeout(function() {
                        surveyMask.css("display", "none");
                        surveyTip.css("display", "none")
                }, 1000)
            }

            //IE6 ��λ���ײ�
            var __ie6Fixed = function() {
                if (ieVersion !== 6) return;
                var surveyBox = $("#D_SurveyBox");
                var pubFeedBack = $("#pubFeedBack");
                if (!surveyBox || !pubFeedBack) return;
                $(window).bind("scroll", function() {                    
                    var h = $(window).height(), st = $(window).scrollTop(), _top = h + st - options.height;
                    var _top1 = h + st - pubFeedBack.height() - 15;
                    surveyBox.css("top", _top + "px")
                    pubFeedBack.css("top", _top1 + "px")

                })
            }

            if(screen.width>=1280){
                (function() {
                    __feedCreat();
                    __surveyCreate();
                    __initEvent();
                })();
            }
        }
    });
});