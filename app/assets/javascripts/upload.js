$(function() {
    if($.fn.cloudinary_fileupload !== undefined) {
        $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload({
            start: function (e) {
              $(".status").text("Starting upload...");
            },
            progress: function (e, data) {
              $(".status").text("Uploading... " + Math.round((data.loaded * 100.0) / data.total) + "%");
            },
            fail: function (e, data) {
              $(".status").text("Upload failed");
            }
        });
    }
});

// $('.cloudinary-fileupload').bind('fileuploadprogress', function(e, data) {
//   $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');
// });