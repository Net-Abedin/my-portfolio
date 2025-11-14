$(document).ready(function () {
  loadPage();
});
function loadPage() {
  $('.header-bars').click(function () {
    $('.sidebar').animate({ width: '350px' }, 200);
    $('.sidebar-container').fadeIn(200);
    $('.products-container').animate({ width: '81%' }, 200);
  });
  $('.sidebar-close').click(function () {
    $('.sidebar').animate({ width: '0px' }, 200);
    $('.sidebar-container').fadeOut(200);
    $('.products-container').animate({ width: '100%' }, 200);
    $('body').removeClass('fixed-position');
  });
  $('.header-bars-mobile').click(function () {
    $('.sidebar').animate({ width: '100%' }, 200);
    $('.sidebar-container').fadeIn(200);
    fixed();
  });
  function fixed() {
    if ($('.sidebar-container').css('display') == 'flex') {
      $('body').addClass('fixed-position');
    }
  }
  $('.list-text-btn').click(function () {
    $('.list-image-btn').removeClass('active');
    $('.list-text-btn').addClass('active');
    $('.products-items-image').fadeOut(300);
    $('.products-items-text').fadeIn(300);
  });
  $('.list-image-btn').click(function () {
    $('.list-image-btn').addClass('active');
    $('.list-text-btn').removeClass('active');
    $('.products-items-text').fadeOut(300);
    $('.products-items-image').fadeIn(300);
  });
  $('.finalize-btn').click(function () {
    $('.add-product').slideUp();
    $('.customer-container').slideUp();
    $('.sidebar-login').slideDown(200);
    $('.submit-cart ').fadeOut();
  });
  $('#cart-login').click(function () {
    $('.sidebar-login').slideUp();
    $('.address-carts').slideDown(200);
  });
  $('#payment').click(function () {
    $('.address-carts').fadeOut(100);
    $('.thanks').fadeIn(200);
  });
  $('#back-payment').click(function () {
    $('.address-carts').fadeOut();
    $('.add-product').slideDown();
    $('.customer-container').slideDown();
    $('.submit-cart ').fadeIn();
  });
  // loading page products
  $('.breakfast-offer').click(function () {
    $('.products-container').load(
      './assets/pages/breakfast.html .products',
      function () {
        loadPageImage();
        showItem();
      }
    );
  });
  $('.breakfast-offer-text').click(function () {
    $('.products-container').load(
      './assets/pages/breakfast.html .products',
      function () {
        showItem();
        loadPageText();
      }
    );
  });
  $('.hotdrinks').click(function () {
    $('.products-container').load(
      './assets/pages/hotdrinks.html .products',
      function () {
        loadPageImage();
        showItem();
        subLoadImage();
        subLoadText();
      }
    );
  });
  $('.hotdrinks-text').click(function () {
    $('.products-container').load(
      './assets/pages/hotdrinks.html .products',
      function () {
        showItem();
        loadPageText();
        subLoadImage();
        subLoadText();
      }
    );
  });
  // loading page products
}
// load page image
function loadPageImage() {
  $('#back-page-image').click(function () {
    $('.products-container').load('products.html .products', function () {
      loadPage();
    });
  });
  $('#previous-page-image').click(function () {
    $('.products-container').load('products.html .products', function () {
      loadPage();
    });
  });
  $('#back-page-text').click(function () {
    $('.products-items-text').fadeOut(300);
    $('.products-items-image').fadeIn(300);
    $('.list-image-btn').addClass('active');
    $('.list-text-btn').removeClass('active');
  });
  $('#previous-page-text').click(function () {
    $('.products-container').load('products.html .products', function () {
      loadPage();
    });
    $('.list-image-btn').addClass('active');
    $('.list-text-btn').removeClass('active');
  });
}
// load page image

// load page text
function loadPageText() {
  $('.products-items-image').fadeOut(0);
  $('.products-items-text').fadeIn(300);
  $('#back-page-text').click(function () {
    $('.products-container').load('products.html .products', function () {
      loadPage();
      $('.products-items-image').fadeOut(0);
      $('.products-items-text').fadeIn(300);
      $('.list-image-btn').removeClass('active');
      $('.list-text-btn').addClass('active');
    });
  });
  $('#back-page-image').click(function () {
    $('.products-items-image').fadeOut(0);
    $('.products-items-text').fadeIn(300);
    $('.list-image-btn').removeClass('active');
    $('.list-text-btn').addClass('active');
  });
  $('#previous-page-image').click(function () {
    $('.products-container').load('products.html .products', function () {
      loadPage();
    });
  });
  $('#previous-page-text').click(function () {
    $('.products-container').load('products.html .products', function () {
      loadPage();
    });
    $('.list-image-btn').addClass('active');
    $('.list-text-btn').removeClass('active');
  });
}
// load page text

// options list
function showItem() {
  for (let index = 1; index <= 6; index++) {
    $(`.item-icon-${index}`).click(function () {
      $(`.item-footer-${index}`).toggle(200);
      closeOtherItems(index);
    });
  }
  $('select[multiple].active.3col').multiselect({
    columns: 1,
    placeholder: 'انتخاب ویژگی ها',
  });
}
function closeOtherItems(item) {
  for (let index = 1; index <= 6; index++) {
    if (index != item) {
      $(`.item-footer-${index}`).fadeOut(200);
    }
  }
}
// options list

// sub load image
function subLoadImage() {
  $('.hotdrinks-sub-image-1').click(function () {
    $('.products-container').load(
      './assets/pages/hotdrinks-sub-1.html .products',
      function () {
        loadPageImage();
        loadPage();
        showItem();
        $('#back-page-image').click(function () {
          $('.products-container').load(
            './assets/pages/hotdrinks.html .products',
            function () {
              loadPageImage();
              showItem();
              subLoadText();
              subLoadImage();
            }
          );
        });
      }
    );
  });
  $('.hotdrinks-sub-image-2').click(function () {
    $('.products-container').load(
      './assets/pages/hotdrinks-sub-2.html .products',
      function () {
        loadPageImage();
        loadPage();
        showItem();
        $('#back-page-image').click(function () {
          $('.products-container').load(
            './assets/pages/hotdrinks.html .products',
            function () {
              loadPageImage();
              showItem();
              subLoadText();
              subLoadImage();
            }
          );
        });
      }
    );
  });
  $('.hotdrinks-sub-image-3').click(function () {
    $('.products-container').load(
      './assets/pages/hotdrinks-sub-3.html .products',
      function () {
        loadPageImage();
        loadPage();
        showItem();
        $('#back-page-image').click(function () {
          $('.products-container').load(
            './assets/pages/hotdrinks.html .products',
            function () {
              loadPageImage();
              showItem();
              subLoadText();
              subLoadImage();
            }
          );
        });
      }
    );
  });
}
// sub load image

// sub load text
function subLoadText() {
  $('.hotdrinks-sub-text-1').click(function () {
    $('.products-container').load(
      './assets/pages/hotdrinks-sub-1.html .products',
      function () {
        loadPageText();
        loadPage();
        showItem();
        $('#back-page-text').click(function () {
          $('.products-container').load(
            './assets/pages/hotdrinks.html .products',
            function () {
              loadPageText();
              showItem();
              subLoadImage();
              subLoadText();
            }
          );
        });
      }
    );
  });
  $('.hotdrinks-sub-text-2').click(function () {
    $('.products-container').load(
      './assets/pages/hotdrinks-sub-2.html .products',
      function () {
        loadPageText();
        loadPage();
        showItem();
        $('#back-page-text').click(function () {
          $('.products-container').load(
            './assets/pages/hotdrinks.html .products',
            function () {
              loadPageText();
              showItem();
              subLoadImage();
              subLoadText();
            }
          );
        });
      }
    );
  });
  $('.hotdrinks-sub-text-3').click(function () {
    $('.products-container').load(
      './assets/pages/hotdrinks-sub-3.html .products',
      function () {
        loadPageText();
        loadPage();
        showItem();
        $('#back-page-text').click(function () {
          $('.products-container').load(
            './assets/pages/hotdrinks.html .products',
            function () {
              loadPageText();
              showItem();
              subLoadImage();
              subLoadText();
            }
          );
        });
      }
    );
  });
}
// sub load text

// $('#breakfast').click(function () {
//   var page = $(this).attr('href');
//   $('.products-container').load(
//     './assets/pages/' +
//       page +
//       '.html .products-items-image,.products-items-text'
//   );
//   return false;
// });
