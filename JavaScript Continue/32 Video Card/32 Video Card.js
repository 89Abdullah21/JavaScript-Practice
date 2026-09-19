function CreateCard(title, views, months, thumbnail){
    let views2;
    if(views>100000){
        views2=(views/100000).toFixed(1)+"M"
    }
    else{
        views2=views
    }

    let html=`<div class="card">
        <div class="content">
            <div class="image">
                <img src="${thumbnail}" alt="">
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${views2} views • ${months} months ago</p>
            </div>
        </div>
    </div>`

document.body.innerHTML+=html

}

CreateCard("JavaScript Tutorial for Beginners", 120000, 2, "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg");

CreateCard("Learn React in 30 Minutes", 95000, 1, "https://i.ytimg.com/vi/dGcsHMXbSOA/hqdefault.jpg");

CreateCard("Node.js Crash Course", 250000, 3, "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg");

CreateCard("CSS Flexbox Tutorial", 80000, 4, "https://i.ytimg.com/vi/JJSoEo8JSnc/hqdefault.jpg");

CreateCard("Python for Data Science", 150000, 5, "https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg");