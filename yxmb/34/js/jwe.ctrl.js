﻿(function($,undefined){$.jweCtrl={_focuseUni:null,_busyLock:false,BindEvents:function(){$(window).resize(function(){$.jwe.resizeContainer()});$.jweCtrl.bindKeyboardEvent();$.jweCtrl.bindTableUniEvent();$("#scorePanel .uni").each(function(){$.jweCtrl.bindScoreBarEvent(this)});$(".cartoonPanel").bind("click",function(){$(this).stop().hide()})},bindTableUniEvent:function(){$("#panelTb .uni").each(function(){$.jweCtrl.uniEvt($(this))})},uniEvt:function(Obj){Obj.mousedown(function(){_mouseDnObj=this;if($.jweCtrl._focuseUni!=null){$.jweAnimate.reform($($.jweCtrl._focuseUni))}$.jweAnimate.deform1A(Obj);$.jweCtrl._focuseUni=this}).draggable({containment:"#panelTb",scroll:false,stack:"#panelTb td",start:function(){$.jweCtrl._busyLock=true},drag:function(){},stop:function(){var TD=$(this).parent();var wi=parseInt(TD.css("width"));var hi=parseInt(TD.css("height"));var x=parseInt($(this).css("left"));var y=parseInt($(this).css("top"));var col=Math.round(x/wi);var row=Math.round(y/hi);if(col!=0||row!=0){$.jweGame.roundRun();var id=TD.attr("id");var ss=id.split("_");var row2=parseInt(ss[1])+row;var col2=parseInt(ss[2])+col;var id2=ss[0]+"_"+row2+"_"+col2;var TD2=$("#"+id2);$.jweCore.switch2TDsUni_orgPlace(TD,TD2,true,false);$.jweAnimate.moveToZero(TD,TD2,$.jweAnimate._unitSwitchTime);var delay2=$.jweAnimate._unitSwitchTime+$.jweAnimate._afterMoveDelay;setTimeout(function(){$.jweGame.runGameRules()},delay2)}else{$.jweAnimate.mZero(TD,"fast")}$.jweCtrl._busyLock=false}})},bindScoreBarEvent:function(o){$(o).bind("click",function(){var typeN=$(o).find("img:first").attr("lang");var b=false;b=$.jweGame.addScore(typeN,_oneSexyPicCost);if(b==true){$.jweGame.AddSumScore(_oneSexyPicCost);$.jweAnimate.showSexyCartoon1();$.jweGame.scoreRanking(0)}else{$.jweAnimate.showGamingTit("精力不足!",0,500)}})},bindKeyboardEvent:function(){$(window).keyup(function(event){switch(event.keyCode){case 192:$("#debugPanel").toggle();break;default:}if($.jweCtrl._focuseUni!=null){$.jweAnimate.reform($($.jweCtrl._focuseUni));var b;switch(event.keyCode){case 65:case 37:b=$.jweAnimate.moveUni2($.jweCtrl._focuseUni,"lf");break;case 87:case 38:b=$.jweAnimate.moveUni2($.jweCtrl._focuseUni,"up");break;case 68:case 39:b=$.jweAnimate.moveUni2($.jweCtrl._focuseUni,"rt");break;case 83:case 40:b=$.jweAnimate.moveUni2($.jweCtrl._focuseUni,"dn");break;default:}}})},bindEPEvts:function(){$("#endPanel #aWinner").click(function(){$.jweAnimate.girlsShowOutAnim()});$("#statPanel").click(function(){$(this).slideUp()});$("#aSTAT").click(function(){$("#statPanel").slideToggle()});$("#endBtn1").click(function(){if($.jweGame._sumScore>Math.abs(_oneSexyPicCost)){$.jweAnimate.HappyShoot1()}else{$.jweAnimate.showGamingTit("精疲力尽了呢!",0,1000)}})}}}(jQuery));