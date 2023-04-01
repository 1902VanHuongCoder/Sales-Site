
accept();
function hidden_form_register() {
    document.getElementById("register-window").style.display = 'none'
}
function activited_register() {
    document.getElementById("register-window").style.display = 'block'
}
function hidden_form_login() {
    document.getElementById("login-window").style.display = 'none'
}
function activited_login() {
    document.getElementById("login-window").style.display = 'block'
}
function hidden_form_infor(){
    document.querySelector(".infor-card-wrapper").style.display="none";
}
function display_infor_form(){
    document.querySelector(".infor-card-wrapper").style.display="flex";
}
function hidden_form_infor_costumer(){
    hidden_form_infor();
    document.querySelector(".infor-costumer").style.display ="none";
}
function display_form_infor_costumer(){
    document.querySelector(".infor-costumer").style.display ="block";
}
function hidden_button_login_reg(){
    document.getElementById("button_login").style.display = 'none'
    document.getElementById("button_register").style.display = 'none'
    document.getElementById("button_logout").style.display = 'block'
}
function hidden_button_logout(){
    document.getElementById("button_login").style.display = 'block'
    document.getElementById("button_register").style.display = 'block'
    document.getElementById("button_logout").style.display = 'none'
    if (count_login==1) count_login=0;
}


function showpass_login() {
    document.getElementById("passlog").type = "text"
}
function hidepass_login() {
    document.getElementById("passlog").type = "password"
}
function showpass_register() {
    document.getElementById("passreg").type = "text"
}
function hidepass_register() {
    document.getElementById("passreg").type = "password"
}

function register() {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(emailreg.value) == false) {
        alert("Vui lòng nhập đúng Email.");
        return false;
    }
    if (passreg.value.length < 8) {
        alert("Mật khẩu dài hơn 8 chữ số.");
        return false;
    }
    if ((passreg.value) != (repassreg.value)) {
        alert("Vui lòng nhập đúng mật khẩu.");
        return false;
    }
    alert("Đăng ký tài khoản thành công.");
    hidden_form_register();
    return false;
}

function infor() {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(emailreg.value) == false || passreg.value.length < 8 || (passreg.value) != (repassreg.value)) {
        return false;
    }
    else {
        const infor_acount = localStorage.getItem("list_acount") ? JSON.parse(localStorage.getItem("list_acount")) : []
        infor_acount.push({
            email: emailreg.value,
            pass: passreg.value
        })
        localStorage.setItem("list_acount", JSON.stringify(infor_acount))
    }
}
const admin = [
    {
        emaillog: "binhb2105603@student.ctu.edu.vn",
        passlog: "123456789"
    },
    {
        emaillog: "anhb2105599@student.ctu.edu.vn",
        passlog: "123456789"
    },
    {
        emaillog: "ducb2111881@student.ctu.edu.vn",
        passlog: "123456789"
    },
    {
        emaillog: "huyb2105612@student.ctu.edu.vn",
        passlog: "123456789"
    },
    {
        emaillog: "huongb2105616@student.ctu.vn",
        passlog: "123456789"
    }
]
var count_login =0;
function login() {
    var emailLog = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailLog.test(emaillog.value) == false) {
        alert("Vui lòng nhập đúng Email.");
        return false;

    }
    if (passlog.value.length < 8) {
        alert("Mật khẩu dài hơn 8 chữ số.");
        return false;
    }

    let check_Log_admin = admin.some(x => x.emaillog == emaillog.value && x.passlog == passlog.value)
    if (check_Log_admin) {
        alert("Đăng nhập admin thành công.");
        hidden_form_login();
        count_login=1;
        hidden_button_login_reg();
        return false;
    }
    if (infor_log) return false
    else alert("Đăng nhập thất bại. Vui lòng kiểm tra thông tin.")
    return false;
}
function infor_log() {
    var emailLog = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailLog.test(emaillog.value) == false || passlog.value.length < 8) {
        return false;
    }
    const infor_acount = localStorage.getItem("list_acount") ? JSON.parse(localStorage.getItem("list_acount")) : []
    var q = document.getElementById("emaillog").value
    var w = document.getElementById("passlog").value
    let check_Log_user = infor_acount.some(y => y.email == q && y.pass == w)
    if (check_Log_user) {
        alert("Đăng nhập user thành công.");
        hidden_form_login();
        count_login=1;
        hidden_button_login_reg();
        return false;
    }
    else alert("Đăng nhập user thất bại. Vui lòng kiểm tra thông tin.")
}
function check_login(){
    if (count_login!=1){
        activited_login()
    }
}
function check_login_buy(){
    if (count_login!=1){
        activited_register()
    }
    else display_infor_form();
}
/*Code dùng để tạo animation thích */
$('.btn').on('click', function () {
    $(this).toggleClass('pink');
})
/*Code dùng để tạo hiệu ứng trong giỏ hàng */
function Buy() {
    document.getElementById("clicked").style.display = "block";
}
function Cancle() {
    document.getElementById('clicked').style.display = "none";
}
/*Code responsive navigation */
$(document).ready(function () {
    $("#more").click(function () {
        $("#navigation-wrap").slideToggle();
    });
})

/*Code phần input trong thanh navigation */
function search(){
    var input = document.getElementById('search').value;
    if(input == "acer i7"){
        window.location.href ="http://127.0.0.1:5500/Chi%20ti%E1%BA%BFt%20s%E1%BA%A3n%20ph%E1%BA%A9m/Acer%20Aspire%203%20i7.html";
    }else if(input == "acer"){
        window.location.href ="Acer Aspire 3.html";
    }else if(input == "asus"){
        window.location.href ="Asus TUF Gaming i5.html";
    }else if(input =="dell"){
        window.location.href ="Dell Inspiron 15 i3.html";
    }else if( input == "hp"){
        window.location.href ="HP 14s dq2550TU i7.html";
    }else{
        alert("Sản phẩm bạn tìm hiện tại đang hết hàng!!");
        return false;
    }
}
/*Code dùng để in ra thông tin của khách hàng khi ấn mua hàng */
 function accept(){
    var form = document.forms["frm"];
    var name = frm.name;
    var sdt = frm.sdt;
    var address = frm.address;

    var name1 = document.getElementById("name_costumer");
    var sdt1 = document.getElementById("phone_number");
    var address1 = document.getElementById("address_costumer");

    name1.innerHTML = name.value;
    sdt1.innerHTML = sdt.value;
    address1.innerHTML = address.value;
    
 }
 /*In ra thông báo khi submit form góp ý */
 function submit_form(){
    alert("Góp ý của bạn đã được ghi nhận!");
 }

 
