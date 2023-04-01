
const btn = document.querySelectorAll('.name_product  button')
console.log(btn)
btn.forEach(function (btn, index) {
    btn.addEventListener('click', function (event) {
        const btnitem = event.target
        console.log(btnitem)
        const dad = btnitem.parentElement
        console.log(dad)
        var pic = dad.parentElement.querySelector('img').src
        console.log(pic)
        
        var ten = dad.querySelector('h3').innerHTML
        console.log(ten)
        
        
        var dadgia = dad.querySelector('.unit_price').lastElementChild
         gia= dadgia.querySelector('span').innerHTML
        console.log(gia)
        addcart(pic,ten,gia)
        total()
    })
})

function addcart(pic, ten, gia) {
    var addtr = document.createElement('tr')
    var card = document.querySelectorAll('#tbody tr')
    for (i = 0; i < card.length; i++) {
        var name = document.querySelectorAll('.name-buy')
        //console.log(name[i].innerHTML)
        if (name[i].innerHTML == ten) {
            var sl = card[i].querySelector('input').value

            card[i].querySelector('input').value = ++sl
            return

        }
    }
    var trcontent = '<tr><td class="name-buy">' + ten + '</td><td><img src="' + pic + '" width="50px"></td><td><span style="font-weight:bold">' + gia + '</span><td><input type="number" style="width: 30px ; outline: none;" onchange="total()"  value="1" min="0"></td><td><button class="delete" style="background-color:#ee4d2d; border: 1px solid #ccaeae; border-radius: 5px; padding: 5px;  color: #fff">xóa</button></td></tr>'
    addtr.innerHTML = trcontent
    var carttable = document.querySelector('#tbody')
    carttable.append(addtr)
    deletecard()
}
function total() {
    var cartitem = document.querySelectorAll('#tbody tr')
    var total = 0;
    for (var i = 0; i < cartitem.length; i++) {
        //console.log(i)
        var input = cartitem[i].querySelector("input").value
        console.log(input)
        var cost = cartitem[i].querySelector('span').innerHTML
        console.log(cost)
        totala = input * cost
        console.log(typeof totala)
        total = totala + total
        console.log(total)
    }
    var nen = document.querySelector('.cost')
    nen.innerHTML = "Tổng tiền: "+total+" triệu VND"
    var infor_price_total = document.getElementById("infor-price-total");
    infor_price_total.innerHTML = +total+" triệu VND";
    var price_total_costumer = document.getElementById("price_total_costumer");
    price_total_costumer.innerHTML = + total + "triệu VND";
}
function deletecard(){
const deletebtn = document.querySelectorAll('.delete')
console.log(deletebtn)
deletebtn.forEach(function (btn, index) {
    btn.addEventListener('click', function (event) {
        const deleteitem = event.target
        const dad = deleteitem.parentElement.parentElement
        dad.remove()
        total()

    }
    )
})
}

/*******************************************************Mua ngay button**************************************************/
var buynow = document.getElementById("buy-now");
var tbody = document.getElementById("tbody");
buynow.addEventListener("click", function(event){
    /*Bắt sự kiện khi người dùng ấn vào mua ngay! */
})

/****************************************************Tổng tiền trong form thông tin mua hàng****************************/
