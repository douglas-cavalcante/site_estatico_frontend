$(function(){
    $('.menu_mobile_obj').on('click', function(){
        $('.menu_sub').toggleClass('ds_none');
        $(this).toggleClass('menu_mobile_obj_active');
    })
});