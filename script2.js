var pass1, pass2, result, val, f_n1=0, f_n2=0, f_n3=0, f_n4=0, f_n5=0, f_n6=0, f_n7=0, f_n8=0, f_n9=0, f_n10=0, f_n11=0, f_n12=0, p_len, strengh, ssize, smth;

function clear(){
   $('.pss').val('');
   $('.psh').val(''); 
   $('#passstrength').empty();
   $('#status').hide();
   $('#passsboth').empty();
   
   $("*[rel='fh']").empty().removeClass().addClass('no');
   $("*[rel='sh']").empty().removeClass().addClass('yes');
   $("*[rel='st']").empty();
   
   f_n1=0;
   f_n2=0;
   f_n3=0;
   f_n4=0;
   f_n5=0;
   f_n6=0;
   ssize=$('div#bar').width();
   
   $('div#bar').css('height', '5px');
	 $('div#pc_val').text("");
	 $('div#sb_b').attr('style', 'width: 0px;');
	 $('div#status').attr('style', 'width: 0px; opacity: 0;');
};

$(document).ready(function(){	
 $('.d_hide').hide();
 $('.s_hide').click(function(){
  $(this).next('.d_hide').slideToggle(300)
  return false;
 });


  ssize=$('div#bar').width();
 
 var Reg1 = new RegExp("^.*[A-ZА-ЯЁ]+.*$"); //1
 var Reg2 = new RegExp("^.*[a-zа-яё]+.*$"); //1
 var Reg3 = new RegExp("^.*[0-9]+.*$"); //1
 var Reg4 = new RegExp("^.*[\\!@#$%\^&*()_+\"№;:?=\/|.,-]+.*$");
 var Reg5 = new RegExp("^.*[^0-9\\!@#$%\^&*()_+\"№;:?=\/|.,-]+[0-9\\!@#$%\^&*()_+\"№;:?=\/|.,-]+[^0-9\\!@#$%\^&*()_+\"№;:?=\/|.,-].*$");
 
 var Reg6 = new RegExp("^[A-zА-яЁё]+$"); //2
  var Reg61 = new RegExp("^.*[^a-z].*$"); //2
  var Reg62 = new RegExp("^([a-zа-яё]+|\d+)$i"); //2
 var Reg7 = new RegExp("^[0-9]$"); //1
  var Reg71 = new RegExp("^.*[^0-9].*$"); //1
 var Reg8 = /(.)(\1)/; 
 var Reg9 = new RegExp("^.*[A-zА-яЁё]{4,}.*$"); //2
 var Reg0 = new RegExp("^.*[0-9]{4,}.*$"); //1
 
 $('#pass1').keyup(function(){
  pass1=$('#pass1').val();
  if(pass1!='')
   {
   
   strengh=0;
   p_len=pass1.length;
    strengh+=p_len;
	$('#g_simNom').text(p_len);
    if(p_len>5)
	 {
	 f_n1=1;
	 $('#g_simNom').removeClass().addClass('yes');
	 }
    else
     {
	 f_n1=0;
	 $('#g_simNom').removeClass().addClass('no');
	 }	 
	
   if(Reg1.test(pass1))
    {
	f_n2=1;
	strengh+=3;
	$('#g_bigLet').text('3');
	$('#g_bigLet').removeClass().addClass('yes');
	}
   else
    {
	f_n2=0;
	strengh-=3;
	$('#g_bigLet').text('');
	$('#g_bigLet').removeClass().addClass('no');
	}   
   if(Reg2.test(pass1))
    {
	f_n3=1;
	strengh+=2;
	$('#g_smallLet').text('2');
	$('#g_smallLet').removeClass().addClass('yes');
	}
   else	
    {
	f_n3=0;
	strengh-=2;
	$('#g_smallLet').text('');
	$('#g_smallLet').removeClass().addClass('no');
	}
   if(Reg3.test(pass1))
    {
	f_n4=1;
	strengh+=1;
	$('#g_num').text('1');
	$('#g_num').removeClass().addClass('yes');
	}  
   else
    {
	f_n4=0;
	strengh-=1;
	$('#g_num').text('');
	$('#g_num').removeClass().addClass('no');
	}   
   if(Reg4.test(pass1))
    {
	f_n5=1;
	strengh+=4;
	$('#g_sim').text('4');
	$('#g_sim').removeClass().addClass('yes');
	}
   else
    {
	f_n5=0;
	strengh-=4;
	$('#g_sim').text('');
	$('#g_sim').removeClass().addClass('no');
	}   
   if(Reg5.test(pass1))
    {
	f_n6=1;
	strengh+=5;
	$('#g_mid').text('5');
	$('#g_mid').removeClass().addClass('yes');
	}
   else
    {
    f_n6=0;
	strengh-=5;
	$('#g_mid').text('');
	$('#g_mid').removeClass().addClass('no');
    }
   
   if(f_n1+f_n2+f_n3+f_n4+f_n5+f_n6==6)	
    {
    strengh+=3;
	$('#g_rez').text('3');
	$('#g_rez').removeClass().addClass('yes');
	} 
   else
    {
	strengh-=3;
	$('#g_rez').text('');
	$('#g_rez').removeClass().addClass('no');
	} 
	  
	
	
	
   if(Reg61.test(pass1))
    {
	f_n7=1;
	strengh+=2;
	$('#b_let').text('');
	$('#b_let').removeClass().addClass('yes');
	}
   else
    {
	f_n7=0;
	strengh-=2;
	$('#b_let').text('2');
	$('#b_let').removeClass().addClass('no');
	}  
   if(Reg71.test(pass1))
    {
	f_n8=1;
	$('#b_num').text('');
	$('#b_num').removeClass().addClass('yes');
	}
   else
    {
	f_n8=0;
	strengh-=3;
	$('#b_num').text('3');
	$('#b_num').removeClass().addClass('no');
	}   
   if(Reg8.test(pass1))
    {
	f_n9=1;
	strengh--;
	$('#b_tw').text('1');
	$('#b_tw').removeClass().addClass('no');
	}
   else 
    {
	f_n9=0;
	strengh++;
	$('#b_tw').text('');
	$('#b_tw').removeClass().addClass('yes');
	}   
   if(Reg9.test(pass1))
    {
	f_n10=1;
	strengh-=2;
	$('#b_l3').text('3');
	$('#b_l3').removeClass().addClass('no');
	}
   else
    {
	f_n10=0;
	strengh+=2;
	$('#b_l3').text('');
	$('#b_l3').removeClass().addClass('yes');
	}
   if(Reg0.test(pass1))
    {
	f_n11=1;
	strengh-=2;
	$('#b_n3').text('2');
	$('#b_n3').removeClass().addClass('no');
	}	
   else
    {
	f_n11=0;
	strengh+=2;
	$('#b_n3').text('');
	$('#b_n3').removeClass().addClass('yes');
	}   
	
	if(strengh<0)
	 strengh=0;
  // 25-minmax	
	$('#tdrez').text(strengh);	
	
	smth=Math.round(100*strengh/25);
	
	if(smth>100)
	 {
	 smth=100;	 
	 }
	if(f_n1+f_n2+f_n3+f_n4+f_n5!=5||f_n7+f_n8+f_n9+f_n10+f_n11<5)
	  {
	  smth--;
	  //alert('!!!!');
	  } 
	f_n1=Math.round(ssize*smth/100);
	$('#log').text(smth+' '+f_n1);
	if(strengh>0)
	 {
	 $('div#bar').css('height', '25px');
	 $('div#sb_b').attr('style', 'width:'+f_n1+'px;');
	 $('div#status').attr('style', 'width:'+f_n1+'px; opacity: '+smth/100+';');
	 $('div#pc_val').text(smth+"%");
	 }
	else
     {
	 $('div#bar').css('height', '5px');
	 $('div#pc_val').text("");
	 $('div#sb_b').attr('style', 'width: 0px;');
	 $('div#status').attr('style', 'width: 0px; opacity: 0;');
	 }	
	 
	result='Очень слабый.'; 
	if(smth>20)
	 result='Слабый.'; 
	if(smth>50)
	 result='Средний.'; 
	if(smth>80)
	 result='Хороший.';
	if(smth>95)
	 result='Отличный.';
	if(smth>99)
	 result='Суперский.';
	$('#passstrength').html(result); 
	/*
   if(strengh>4)
    {
	aletr('1');
	$('div#status').attr('style', 'width:'+Math.round(ssize/20*3)+'px; background: #f44;');
    result='Слабый.<br>Попробуйте использовать латинские/кириллические буквы в разных регистрах.';  
	}
   if(strengh>9)
    {
	$('div#status').attr('style', 'width:'+Math.round(ssize/20*6)+'px; background: #da4;');
    result='Средний.<br>Попробуйте использовать буквы и спецсимволы.';  
	}
   if(strengh>12)
    {
	$('div#status').attr('style', 'width:'+Math.round(ssize/20*8)+'px; background: #cb4;');
    result='Неплохой.<br>Попробуйте использовать спецсимволы.';
    }	
   if(strengh>18)
    {
	$('div#status').attr('style', 'width:'+Math.round(ssize/20*12)+'px; background: #bc4;');
    result='Хороший.<br>'; 
    }	
   if(strengh>22)
    {
	$('div#status').attr('style', 'width:'+Math.round(ssize/20*15)+'px; background: #ad4;');
    result='Отличный.'; 
    }	
   if(strengh>25)
    {
	$('div#status').attr('style', 'width:'+Math.round(ssize)+'px; background: #9f4;');
    result='Суперский.';
    } 	
   //$('#passstrength').html(strengh+"/11");
   $('#passstrength').html(result);*/
   
   }
  else 
   {
   /*
   $('.pss').val('');
   $('.psh').val(''); 
   $('#passstrength').empty();
   $('#status').hide();
   $('#passsboth').empty();
   */
   clear();
   }
   
  if($('#pass2').val()!='')
   {
   if($('#pass2').val()==$('#pass1').val())
    $('#passsboth').html("<span style='color: green;'>Пароль подтвержден.</span>");
   else
    $('#passsboth').html("<span style='color: red;'>Пароли не совпадают.</span>"); 
	
   }  
 }); 
 
 $('#pass2').keyup(function(){
  if($('#pass2').val()!='')
   {
   if($('#pass2').val()==$('#pass1').val())
    $('#passsboth').html("<span style='color: green;'>Пароль подтвержден.</span>");
   else
    $('#passsboth').html("<span style='color: red;'>Пароли не совпадают.</span>");
   }
  else 
   {   
   $('#passsboth').empty();
   } 
 });
 
 $('button.shh').mousedown(function(){
   val=$(this).parent().children('.psh').val();
   $('input.pss').val(val);
   $(this).parent().children('.psh').hide();
   $(this).parent().children('.pss').show();
 });
 $('button.shh').mouseup(function(){
   $('.pss').hide();
   $('.psh').show();   
 });
 
 
 $('button#clear').click(function(){
  /*
   $('.pss').val('');
   $('.psh').val(''); 
   $('#passstrength').empty();
   $('#status').attr('style', 'width:0px;');
   $('#passsboth').empty();
   */
   clear();
 });
});