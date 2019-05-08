$(function() {
    if($.fn.cloudinary_fileupload !== undefined) {
        $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
    }
});




// $('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {
//     console.log(data.result.public_id)})
    // $('.preview').html(
    //    $.cloudinary.imageTag(data.result.public_id,
    //        { format: data.result.format, version: data.result.version,
    //          crop: 'scale', width: 200 }));
    // $('.image_public_id').val(data.result.public_id);
    // return true;});


// with click implemented
// $("#uploadInitializer").click(function() {
//     if($.fn.cloudinary_fileupload !== undefined) {
//         $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
//     }
// });