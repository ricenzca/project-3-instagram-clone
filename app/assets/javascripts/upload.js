$(function() {
    if($.fn.cloudinary_fileupload !== undefined) {
        $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
    }
});

// with click implemented
// $("#uploadInitializer").click(function() {
//     if($.fn.cloudinary_fileupload !== undefined) {
//         $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
//     }
// });


// $('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {
//     console.log(data.result.public_id)})
    // $('.preview').html(
    //    $.cloudinary.imageTag(data.result.public_id,
    //        { format: data.result.format, version: data.result.version,
    //          crop: 'scale', width: 200 }));
    // $('.image_public_id').val(data.result.public_id);
    // return true;});

// $('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {
//   $('.preview').html(
//     $.cloudinary.image(data.result.public_id,
//       { format: data.result.format, version: data.result.version,
//         crop: 'fill', width: 150, height: 100 })
//   );


//   $('.image_public_id').val(data.result.public_id);
//   return true;
// });

// $(document).ready(function(){
//     alert("jquery is working");
//     console.log("jquery is working");
// })