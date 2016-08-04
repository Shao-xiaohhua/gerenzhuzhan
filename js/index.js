$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('#example').popover();
    var num=0;
    var nuc=0;
    var nuj=0;
    var h =function(){
        num++;
        if(num>=90){
            num=90;
        }
        $('.html .baifen').html(num+'%');
    }
    var c =function(){
        nuc++;
        if(nuc>=80){
            nuc=80;
        }
        $('.css .baifen').html(nuc+'%');
    }
    var j =function(){
        nuj++;
        if(nuj>=80){
            nuj=80;
        }
        $('.js .baifen').html(nuj+'%');
    }
    var n1=90;
    $('.section .html').on('mouseover',function(){
        var hh=setInterval(h,50);
    })
    $('.section .css').on('mouseover',function(){
        var cc=setInterval(c,50);
    })
    $('.section .js').on('mouseover',function(){
        var jj=setInterval(j,50);
    })

})