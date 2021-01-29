let counter = 0;
function right(){
    let h = document.getElementById("head").innerText;
    let p = document.getElementById("para").innerText;
    let photo = document.getElementById("changephoto");
    let newHead;
    let newPara;
    if (counter==0)
    {
       newHead="We are available all across the globe";
       newPara="With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country . Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
       counter++
       photo.style.backgroundImage="url('images/desktop-image-hero-2.jpg')";
    }
    else if(counter == 1){
        newHead="Manufactured with the best materials";
        newPara="Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
        counter ++;
        photo.style.backgroundImage="url('images/desktop-image-hero-3.jpg')";
    }
    else if(counter ==2){
        newHead="Discover innovative ways to decorate";
        newPara="We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love.";
        counter=0;
        photo.style.backgroundImage="url('images/desktop-image-hero-1.jpg')";
    }
   document.getElementById("head").innerText=newHead;
   document.getElementById("para").innerText=newPara;
}
function left(){
    let h = document.getElementById("head").innerText;
    let p = document.getElementById("para").innerText;
    let photo = document.getElementById("changephoto");
    let newHead;
    let newPara;
    if (counter==0)
    {
        newHead="Manufactured with the best materials";
        newPara="Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
        counter =2;
        photo.style.backgroundImage="url('images/desktop-image-hero-3.jpg')";
        
    }
    else if(counter == 1){
        newHead="Discover innovative ways to decorate";
        newPara="We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love.";
        counter=0;
        photo.style.backgroundImage="url('images/desktop-image-hero-1.jpg')";
        
    }
    else if(counter ==2){
        newHead="We are available all across the globe";
        newPara="With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country . Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
        counter=1;
        photo.style.backgroundImage="url('images/desktop-image-hero-2.jpg')";
       
        
    }
   document.getElementById("head").innerText=newHead;
   document.getElementById("para").innerText=newPara;
}