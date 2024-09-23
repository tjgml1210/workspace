$(document).ready(function() {
    $("#password1").focus(function() {
        var passwordMessage = "영문자 대/소문자, 특수문자, 숫자 포함 8~32자";
        var $messageKey = $("#password1").next(".message");

        if ($messageKey.length === 0) {
            $messageKey = $('<div class="message">').text(passwordMessage);
            $("#password1").after($messageKey);
        }
        $messageKey.show();
    })

    $("input[type='text'], input[type='password']").on('blur', function() {
        var $this = $(this);
        var $messageBox = $this.next(".message");

        if ($this.val().trim() === "" && $this.prop("required")) {
            if ($messageBox.length === 0) {
                $messageBox = $('<div class="message">').text("필수 입력 항목입니다.");
                $this.after($messageBox);
            }
            $messageBox.show();
        } else {
            $messageBox.hide();
        }
    });
    });