$(document).ready(function () {


       'use strict';

       $('.repeater').repeater({
           defaultValues: {
               'textarea-input': 'foo',
               'text-input': 'bar',
               'select-input': 'B',
               'checkbox-input': ['A', 'B'],
               'radio-input': 'B'
           },
           show: function () {
               $(this).slideDown();
               
            
           },
           hide: function (deleteElement) {
               if(confirm('Are you sure you want to delete this element?')) {
                   $(this).slideUp(deleteElement);
               }
           },
           ready: function (setIndexes) {

           }
       });

       window.outerRepeater = $('.outer-repeater').repeater({
           isFirstItemUndeletable: true,
           defaultValues: { 'text-input': 'outer-default' },
           show: function () {
               // console.log('outer show');
               // console.log(this);
               var index = $(this).parent().children('.input_count').val();
                   var new_index = ++index;
                   //****** INNER INPUT COUNT *********//
                   var div_index = $(this).index();
                   var final_div_index = div_index-1;
                   // console.log('div_index : '+div_index);
                  $(this).find('.inner_input_count').attr('id','sub_type_count_'+final_div_index);
                   //****** INNER INPUT COUNT *********//
                   $(this).parent().children('.input_count').val(new_index);
                   // console.log($(".select2"));
                   $(".select2").select2({
            allowClear: true,
                width: null,
                tags: true,
            tokenSeparators: [';', ''],
            });

               $(this).slideDown();
           },
           hide: function (deleteElement) {
            // console.log('hide outer function >>');
            if($(this).hasClass('inner'))
            {
              // console.log('inner true');
              return false;
            }

               if(confirm('Are you sure you want to delete this element?')) {
                   $(this).slideUp(deleteElement);
                   // console.log(this);
                   var index = $(this).parent().children('.input_count').val();
                   var new_index = --index;
                   $(this).parent().children('.input_count').val(new_index);
                   return false;
               }
           },
           repeaters: [{
               isFirstItemUndeletable: true,
               selector: '.inner-repeater',
               defaultValues: { 'inner-text-input': 'inner-default' },
               show: function () {
                   // console.log('inner show');

                   var index = $(this).parent().children('.inner_input_count').val();
                   var new_index = ++index;
                   var current_id = $(this).parent().children('.inner_input_count');
                   current_id.val(new_index);
                   // $(this).parent().find(".select2").select2({
                   //    allowClear: true,
                   //        width: 'resolve'
                   //    });
                    $(".select2").select2({
                      allowClear: true,
                          width: null,
                          tags: true,
                      tokenSeparators: [';', ''],
                      });
                   $(this).slideDown();
               },
               hide: function (deleteElement1) {
                  if(confirm('Are you sure you want to delete this element?')) {
                    var index = $(this).parent().children('.inner_input_count').val();
                   var new_index = --index;
                   $(this).parent().children('.inner_input_count').val(new_index);
                   $(this).slideUp(deleteElement1);
                   return false;

                  }
               }
           }]
       });
   });