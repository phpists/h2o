$(document).ready(function () {
    const cartItems = [
        { 'name': 'Kola asdad fdgdfg', 'price': 20, 'count': 3, 'image': 'Goddess-Garden-Broad-Spectrum-Spf-30-Natural-Mineral-Sunscreen-3-4-oz.jpg' },
        { 'name': 'pepso', 'price': 10, 'count': 2, 'image': 'Goddess-Garden-Broad-Spectrum-Spf-30-Natural-Mineral-Sunscreen-3-4-oz.jpg' },
    ];

    const itemList = $("#item-list");
    const totalPriceElement = $("#total-price");
    const fullTotalElement = $("#full-total");
    const shipElement = $("#shipping-cost");

    let radioButtonChecked = false;

    function renderCart() {
        itemList.empty();
        let total = 0;
        let fullTotal = 0; 
        let shipcost=0;
        cartItems.forEach(item => {
            if (item.count > 0) {
                const itemElement = $("<div class='item'></div>");
                const imElement = $("<div class='myimg'></div>");
                const imageElement = $(`<img  height=40px src="${item.image}" alt="${item.name}">`);
                imElement.append(imageElement);
                const detailsElement = $("<div class='item-details'></div>");
                const nameElement = $("<p class='item-name'></p>").text(item.name);
                const priceElement = $("<p class='item-price'></p>").text("Item price " + `$${item.price}`);
                const countElement = $("<p class='item-count'></p>").text(`${item.count}`);
                const itemTotal = item.price * item.count;
                const itemTotalElement = $("<p class='item-total'></p>").text(` $${itemTotal}`);
                const buttonsElement = $("<div class='item-buttons'></div>");
                const addButton = $("<div class='custom-button1'><button>+</button></div>");
                const removeButton = $("<div class='custom-button1'><button class='custom-button2'>-</button></div>");

                addButton.on("click", function () {
                    item.count++;
                    renderCart();
                });

                removeButton.on("click", function () {
                    if (item.count > 0) {
                        item.count--;
                        renderCart();
                    }
                });

                buttonsElement.append(addButton, countElement, removeButton);
                detailsElement.append(nameElement, priceElement, itemTotalElement);
                itemElement.append(imElement, detailsElement, buttonsElement);

                const deleteButton = $("<button class='custom-button3 delete-button'><svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' color='red' height='1.5em' width='1.5em' xmlns='http://www.w3.org/2000/svg'><polyline points='3 6 5 6 21 6'></polyline><path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path><line x1='10' y1='11' x2='10' y2='17'></line><line x1='14' y1='11' x2='14' y2='17'></line></svg></button>");
                deleteButton.on("click", function () {
                    item.count = 0;
                    renderCart();
                });

                itemElement.append(deleteButton);
                itemList.append(itemElement);

                total += itemTotal;
                fullTotal=total;
            }
        });

        if (radioButtonChecked) {
            
            fullTotal=total+60;
            shipcost+=60;
        }

        totalPriceElement.html(`<div>Subtotal:</div><div class="cost-order">$${total}</div>`);
        console.log("Total"+total);
        console.log(fullTotal);
        shipElement.html(`<div>Shiping cost:</div> <div class="cost-order">$${shipcost}</div>`);
        fullTotalElement.html(`<div>Total:</div><div class="cost-order"> $${fullTotal}</div>`);
    }

    $(".checkout-radio").on("change", function () {
        radioButtonChecked = $(this).is(":checked");
        renderCart();
    });

    renderCart();
});
