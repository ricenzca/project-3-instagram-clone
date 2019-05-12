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
            },
            done: function(e,data) {
                $('#submitButton').removeClass('d-none');

                $('.cloudfilter').removeClass('d-none');

                var filter1 = $("#filter1").html('');
                $.cloudinary.image(data.result.public_id, {
                    format: data.result.format, width: 180, height: 180, crop: "fit"}
                    ).appendTo(filter1);
                (filter1).prepend("<br>");
                (filter1).prepend("Normal");

                var filter2 = $("#filter2").html('');
                $.cloudinary.image(data.result.public_id, {
                    format: data.result.format, width: 180, height: 180, crop: "fit", effect: "art:audrey"}
                    ).appendTo(filter2);
                (filter2).prepend("<br>");
                (filter2).prepend("Audrey");

                var filter3 = $("#filter3").html('');
                $.cloudinary.image(data.result.public_id, {
                    format: data.result.format, width: 180, height: 180, crop: "fit", effect: "art:eucalyptus"}
                    ).appendTo(filter3);
                (filter3).prepend("<br>");
                (filter3).prepend("Eucalyptus");

                var filter4 = $("#filter4").html('');
                $.cloudinary.image(data.result.public_id, {
                    format: data.result.format, width: 180, height: 180, crop: "fit", effect: "art:fes"}
                    ).appendTo(filter4);
                (filter4).prepend("<br>");
                (filter4).prepend("Fes");

                var filter5 = $("#filter5").html('');
                $.cloudinary.image(data.result.public_id, {
                    format: data.result.format, width: 180, height: 180, crop: "fit", effect: "art:peacock"}
                    ).appendTo(filter5);
                (filter5).prepend("<br>");
                (filter5).prepend("Peacock");
            }
        })
    }
})
        // $("input.cloudinary-fileupload[type=file]").bind("cloudinarydone", function (e, data) {
        //     $("#preview_pix").val(data.result.bytes);
        // var preview = $(".preview").html('');
        // $.cloudinary.image(data.result.public_id, {
        //   format: data.result.format, width: 50, height: 50, crop: "fit"
        // }).appendTo(preview);
        // })
        // ;

            // $('#preview_pix').removeClass('d-none');
            // $("#photo_bytes").val(data.result.bytes);
            // $(".status").text("");
            // var preview = $(".preview").html('');
            // $.cloudinary.image(data.result.public_id, {
            //   format: data.result.format, width: 50, height: 50, crop: "fit"
            // }).appendTo(preview);


// $('.cloudinary-fileupload').bind('fileuploadprogress', function(e, data) {
//   $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');
// });