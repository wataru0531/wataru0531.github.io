//フォーム
function checkForm(){
    var flag = 0;

    if(document.form.name.value == ""){
        flag = 1;
        document.querySelector('.name-notice').style.display = "block";
    }else{
        document.querySelector('.name-notice').style.display = "none";
    }

    if(document.form.email.value == ""){
        flag = 1;
        document.querySelector('.email-notice').style.display = "block";
    }else{
        document.querySelector('.email-notice').style.display = "none";
    }

    if(document.form.inquiry.value == ""){
        flag = 1;
        document.querySelector('.inquiry-notice').style.display = "block";
    }else{
        document.querySelector('.inquiry-notice').style.display = "none";
    }

    if(!document.form.check.checked){
        flag = 1;
        document.querySelector('.check-notice').style.display = "block";
    }else{
        document.querySelector('.check-notice').style.display = "none";
    }

    if(flag){
        // window.alert('必須事項は記入してください');
        return false;
        
    }else{
        return true;
    }
}