function addItem(type, name, quantity, phone){
    const dl = document.getElementById("order");

    const dtType = document.createElement("dt");
    dtType.innerText = `${type}`;
    const ddName = document.createElement("dd");
    ddName.innerText = `${name}`;
    const ddQuantity = document.createElement("dd");
    ddQuantity.innerText = `${quantity}`;
    const ddPhone = document.createElement("dd")
    ddPhone.innerText = `Phone: ${phone}`;
    dl.appendChild(dtType);
    dl.appendChild(ddName);
    dl.appendChild(ddQuantity);
    dl.appendChild(ddPhone);
}


window.onload = () => {
    document.getElementById("addItemForm").addEventListener("submit",
    (event) => {
        event.preventDefualt();
        const type = document.addItemForm.type.value;
        const name = document.addItemForm.name.value;
        const quantity = document.addItemForm.quantity.value;
        const phone = document.addItemForm.phone.value;
        addItem(type, name, quantity, phone);
    }
    );
}
