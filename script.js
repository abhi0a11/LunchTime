const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden', '.transition');
hiddenElements.forEach((el) => observer.observe(el));



function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("flexCheckChecked");
  // Get the output text
  var text = document.getElementById("floatingQuantity");
  var item = document.getElementById("item1");
  var item_div = document.getElementById("item_div1");
  var item_span = document.getElementById("Checkout1");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    item.style.display = "block";
    item_div.style.display = "block";
    item_span.style.display = "block";

  } else {
    text.style.display = "none";
    item.style.display = "none";
    item_div.style.display = "none";
    item_span.style.display = "none";
    document.Orderform.TandoriQty.value = 0;
  }
}

function myFunction_1() {
  // Get the checkbox
  var checkBox = document.getElementById("flexCheckChole");
  // Get the output text
  var item = document.getElementById("item2");
  var item_div = document.getElementById("item_div2");
  var item_span = document.getElementById("Checkout2");
  var text = document.getElementById("floatingQuantityVeg");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    item.style.display = "block";
    item_div.style.display = "block";
    item_span.style.display = "block";
  } else {
    text.style.display = "none";
    item.style.display = "none";
    item_div.style.display = "none";
    item_span.style.display = "none";
    document.Orderform.Mix_label_Qty.value = 0;
  }
}
function myFunction_2() {
  // Get the checkbox
  var checkBox = document.getElementById("flexCheckPaneer");
  // Get the output text
  var text = document.getElementById("floatingQuantityPaneer");
  var item = document.getElementById("item3");
  var item_div = document.getElementById("item_div3");
  var item_span = document.getElementById("Checkout3");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    item.style.display = "block";
    item_div.style.display = "block";
    item_span.style.display = "block";
  } else {
    text.style.display = "none";
    item.style.display = "none";
    item_div.style.display = "none";
    item_span.style.display = "none";
    document.Orderform.Paneer_label_Qty.value = 0;
  }
}
function myFunction_3() {
  // Get the checkbox
  var checkBox = document.getElementById("flexCheckImarti");
  // Get the output text
  var text = document.getElementById("ImartiInp");

  var item = document.getElementById("item4");
  var item_div = document.getElementById("item_div4");
  var item_span = document.getElementById("Checkout4");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    item.style.display = "block";
    item_div.style.display = "block";
    item_span.style.display = "block";
  } else {
    text.style.display = "none";
    document.Orderform.Imarti_label_Qty.value = 0;
    item.style.display = "none";
    item_div.style.display = "none";
    item_span.style.display = "none";
  }
}
function myFunction_4() {
  // Get the checkbox
  var checkBox = document.getElementById("flexCheckSamosa");
  // Get the output text
  var text = document.getElementById("SamosaInp");
  var item = document.getElementById("item5");
  var item_div = document.getElementById("item_div5");
  var item_span = document.getElementById("Checkout5");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    item.style.display = "block";
    item_div.style.display = "block";
    item_span.style.display = "block";
  } else {
    text.style.display = "none";
    item.style.display = "none";
    item_div.style.display = "none";
    item_span.style.display = "none";
    document.Orderform.Samosa_label_Qty.value = 0;
  }
}
function myFunction_5() {
  // Get the checkbox
  var checkBox = document.getElementById("flexCheckCoke");
  // Get the output text
  var text = document.getElementById("CokeInp");
  var item = document.getElementById("item6");
  var item_div = document.getElementById("item_div6");
  var item_span = document.getElementById("Checkout6");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    item.style.display = "block";
    item_div.style.display = "block";
    item_span.style.display = "block";
  } else {
    text.style.display = "none";
    document.Orderform.Coke_label_Qty.value = 0;
    item.style.display = "none";
    item_div.style.display = "none";
    item_span.style.display = "none";

  }
}
function myFunction_6() {
  // Get the checkbox
  var checkBox = document.getElementById("flexCheckKulche");
  // Get the output text
  var text = document.getElementById("KulcheInp");
  var item = document.getElementById("item7");
  var item_div = document.getElementById("item_div7");
  var item_span = document.getElementById("Checkout7");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    item.style.display = "block";
    item_div.style.display = "block";
    item_span.style.display = "block";
  } else {
    text.style.display = "none";
    item.style.display = "none";
    item_div.style.display = "none";
    item_span.style.display = "none";
    document.Orderform.kulche_label_Qty.value = 0;
  }
}
function myFunction_7() {
  // Get the checkbox
  var checkBox = document.getElementById("flexCheckBature");
  // Get the output text
  var text = document.getElementById("BatureInp");
  var item = document.getElementById("item8");
  var item_div = document.getElementById("item_div8");
  var item_span = document.getElementById("Checkout8");


  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    item.style.display = "block";
    item_div.style.display = "block";
    item_span.style.display = "block";
  } else {
    text.style.display = "none";
    item.style.display = "none";
    item_div.style.display = "none";
    item_span.style.display = "none";
    document.Orderform.Bature_label_Qty.value = 0;
  }
}
function myFunction_8() {
  // Get the checkbox
  var checkBox = document.getElementById("flexCheckDefault");
  // Get the output text
  var text = document.getElementById("floatingQuantityChole");
  var item = document.getElementById("item9");
  var item_div = document.getElementById("item_div9");
  var item_span = document.getElementById("Checkout9");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    item.style.display = "block";
    item_div.style.display = "block";
    item_span.style.display = "block";
  } else {
    text.style.display = "none";
    item.style.display = "none";
    item_div.style.display = "none";
    item_span.style.display = "none";
    document.Orderform.Mix_label_Qty.value = 0;
  }
}
// function ShowHideDiv(flexCheckDefault) {
//   var dvPassport = document.getElementById("floatingQuantityChole");
//   dvPassport.style.display = flexCheckDefault.checked ? "block" : "none";
// }

//form price calculation
function calculatePrice() {
  var qty_roti = document.Orderform.TandoriQty.value;
  var qty_chole = document.Orderform.Chole_label_Qty.value;
  var qty_mix = document.Orderform.Mix_label_Qty.value;
  var qty_paneer = document.Orderform.Paneer_label_Qty.value;
  var qty_imarti = document.Orderform.Imarti_label_Qty.value;
  var qty_samosa = document.Orderform.Samosa_label_Qty.value;
  var qty_coke = document.Orderform.Coke_label_Qty.value;
  var qty_kulche = document.Orderform.kulche_label_Qty.value;
  var qty_bature = document.Orderform.Bature_label_Qty.value;
  var price = qty_roti * 5 + qty_chole * 20 + qty_mix * 20 + qty_paneer * 40 + qty_imarti * 15 + qty_samosa * 15 + qty_coke * 50 + qty_kulche * 40 + qty_bature * 40;
  document.getElementById('Checkout').innerHTML ="<i class='bi bi-currency-rupee'></i>"+(price);


  document.getElementById("item1").innerHTML = "Tandoori Roti x" + qty_roti;
  document.getElementById("item9").innerHTML = "Chole ki sabji x" + qty_chole;
  document.getElementById("item2").innerHTML = "Mix Veg x" + qty_mix;
  document.getElementById("item3").innerHTML = "Paneer x" + qty_paneer;
  document.getElementById("item4").innerHTML = "Imarti x" + qty_imarti;
  document.getElementById("item5").innerHTML = "Samosa x" + qty_samosa;
  document.getElementById("item6").innerHTML = "Coke x" + qty_coke;
  document.getElementById("item7").innerHTML = "Chole Kulche x" + qty_kulche;
  document.getElementById("item8").innerHTML = "Chole Bature x" + qty_bature;

  document.getElementById("Checkout1").innerHTML = "<i class='bi bi-currency-rupee'></i>"+5 * qty_roti;
  document.getElementById("Checkout9").innerHTML = "<i class='bi bi-currency-rupee'></i>"+20 * qty_chole;
  document.getElementById("Checkout2").innerHTML = "<i class='bi bi-currency-rupee'></i>"+20 * qty_mix;
  document.getElementById("Checkout3").innerHTML = "<i class='bi bi-currency-rupee'></i>"+40 * qty_paneer;
  document.getElementById("Checkout4").innerHTML = "<i class='bi bi-currency-rupee'></i>"+15 * qty_imarti;
  document.getElementById("Checkout5").innerHTML = "<i class='bi bi-currency-rupee'></i>"+15 * qty_samosa;
  document.getElementById("Checkout6").innerHTML = "<i class='bi bi-currency-rupee'></i>"+50 * qty_coke;
  document.getElementById("Checkout7").innerHTML = "<i class='bi bi-currency-rupee'></i>"+40 * qty_kulche;
  document.getElementById("Checkout8").innerHTML = "<i class='bi bi-currency-rupee'></i>"+40 * qty_bature;
  
  document.getElementById('all_div').style.display = "block";
  document.getElementById('all_ul').style.display = "block";
  // send data to spreadsheet
  document.Orderform.Tandoori.value = qty_roti;
  document.Orderform.Chole.value = qty_chole;
  document.Orderform.Mix_Veg.value = qty_mix;
  document.Orderform.Paneer.value = qty_paneer;
  document.Orderform.Imarti.value = qty_imarti;
  document.Orderform.Samosa.value = qty_samosa;
  document.Orderform.Coke.value = qty_coke;
  document.Orderform.Kulche.value = qty_kulche;
  document.Orderform.Bature.value = qty_bature;
  document.Orderform.Total.value = price;
}

  function orderPlaced() {
    document.getElementById("Submit_button").style.background='white';
    document.getElementById("Submit_button").style.border='2px solid #198754';
    document.getElementById("Submit_button").style.color='#198754';
  }




  // const btn = document.getElementById('Submit_button');
  // btn.addEventListener('click', function orderPlaced(){
  //   btn.style.background='white';
  //   btn.style.border='2px solid #198754';
  //   btn.style.color='#198754';
  //   btn.style.cursor='not-allowed';
  //   btn.innerHTML="Order placed!"
  // })















