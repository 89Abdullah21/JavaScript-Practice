function Id_Card(image, name, age, gender, address){

    let html=`<div class="card">
        <div class="content">
            <div class="image">
                <img src="${image}" alt="Id Card Image">
            </div>
            <div class="text">
                <p class="name"> <span>Name:</span> ${name}</p>
                <p class="age">  <span>Age:</span> ${age}</p>
                <p class="gender"> <span>Gender:</span> ${gender}</p>
                <p class="address"> <span>Address:</span> ${address}</p>
            </div>
        </div>
    </div>`;

    document.body.innerHTML+=html;
}

Id_Card("https://randomuser.me/api/portraits/men/1.jpg", "John Doe", 28, "Male", "123 Main St, Anytown, USA");
Id_Card("https://randomuser.me/api/portraits/women/2.jpg", "Jane Smith", 32, "Female", "456 Elm St, Othertown, USA");
Id_Card("https://randomuser.me/api/portraits/men/3.jpg", "Mike Johnson", 45, "Male", "789 Oak St, Sometown, USA");
Id_Card("https://randomuser.me/api/portraits/women/4.jpg", "Emily Davis", 29, "Female", "321 Pine St, Anytown, USA");
Id_Card("https://randomuser.me/api/portraits/men/5.jpg", "David Wilson", 38, "Male", "654 Maple St, Othertown, USA");
Id_Card("https://randomuser.me/api/portraits/women/6.jpg", "Sarah Brown", 27, "Female", "987 Cedar St, Sometown, USA");