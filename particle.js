function startApp() {
    var c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    
    var x = document.createElement("INPUT");
    x.type = "text";
    var y = document.createElement("INPUT");
    y.type = "text";
    x.value = "x-coordinate";
    y.value = "y-coordinate";
    document.body.appendChild(x);
    document.body.appendChild(y);
    //document.body.appendChild(createParticleButton]);

/*
    const element = document.getElementById("div1");
    element.appendChild(x);
    element.appendChild(y);
    //element.appendChild(createParticleButton);
    
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);

    const element = document.getElementById("div1");
    element.appendChild(para);
*/
}