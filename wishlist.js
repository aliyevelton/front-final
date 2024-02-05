// Wishlist item 

let wishListItem;
let wishList = localStorage.getItem('wishList');
let wishListArray = JSON.parse(wishList) ?? [];
wishListArray.forEach((item) => {
    wishListItem = document.createElement('div');
    wishListItem.classList.add('cart-item');
    wishListItem.innerHTML = `
        <div class="row d-flex align-items-center text-left text-md-center">
            <div class="col-12 col-md-5"><a class="cart-remove close mt-3 d-md-none" href="#"><i
                        class="fa fa-times"></i></a><a class="d-md-none" href="#">
                            <i class="fa-solid fa-cart-shopping"></i></a>
                <div class="d-flex align-items-center"><a href="detail-1.html"><img
                            class="cart-item-img"
                            src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/product-square-kyle-loftus-596319-unsplash.jpg"
                            alt="..."></a>
                    <div class="cart-title text-left"><a class="text-dark"
                            href="detail-1.html"><strong>Transparent
                                Blouse</strong></a><br><span class="text-muted text-sm">Size:
                            Medium</span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-7 mt-4 mt-md-0">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <div class="row">
                            <div class="col-6 d-md-none text-muted">Price per item</div>
                            <div class="price col-6 col-md-12 text-right text-md-center">$55.00</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-6 d-md-none text-muted">Status </div>
                           
                        </div>
                    </div>
                    <div class="col-md-4 d-none d-md-block text-center">
                    </div>
                    <div class="col-1 d-none d-md-block text-center"><a
                            class="cart-remove text-muted" href="#">
                            <svg class="svg-icon w-2rem h-2rem mt-2">
                                <use xlink:href="#close-1"> </use>
                            </svg></a></div>
                </div>
            </div>
        </div>
    `;
    wishListItem.querySelector('.cart-item-img').src = item.img; 
    document.querySelector('.cart-body').appendChild(wishListItem);
});
