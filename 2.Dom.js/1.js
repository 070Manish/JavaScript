//lect.12.Introduction to DOM

/*
DOM- Document Object Model
iska mtlb javascript ko apne browser ke sth intract krane wale hai

jo html ke tags hote na unko na apn DOM bolte, So javaScript ke help se apn in DOM elements ko apn create , update and delete kr skte iske upar hum apni DOM intractivity add kr skte


like if you want change in DOM just add <script> </script> tag in you HTML file and write JavaScript code

chrome developer tool-> inspect
1.Elements->jo bhi tum code apne html me likhoge vo tumko Elements me dikhega
2.Console-> jo bhi apn javaScript me likhenge uski op idhr dikhega jo <script> tag me likhenge like koi error , koi op ,koi alert etc
3.Sources-> jo bhi apn file banate project structure me uska code as it is hume idhr dikhega no need to open VScode
4.Network-> jb bhi apn API call krte na vo idhr dikhega
5.Application-> ky data hai jo local storage me pdha hai ky keys hai and ky values ye sb idhr dikhega
6.Lighthouse -> check performance of site.

<script>
1.alert("Hey There I am alert")//users koi popup box dikana hai tb apn alert use krte
2.prompt("Whats Your name :","Manish");//ye bhi popup deta but input box bhi deta hai with default value bhi de skte apn
const value = prompt("Whats your age:");//apn entered values ko store bhi kr skte.
console.log(value);//op-> 26

3.Two Types of Objet which are available at Window level

3.1.window.console.log("manish") same as console.log("manish") it automatically use window.c
jo  bhi apn window me kr rh vo sb window object throuugh kr rh hai

3.2.console.log(document.title);//op->title of html
document.title = "ABCD;//ishe apn direct HTML page me changes bhi kr skte
console.log(document.body);//pura body tag dikhega idhr
document.write("This is Hacked");//ye tumhree wen page me dikhayega or html page me bhi add kr dega debugging purpose ke liye use krte.

Ex->
<script>
    const name = prompt("Whats your name ?);
    document.write("Hello "+ name);
</script>

-------------------------------------------------------------------------------------

lect.13.Query Selector -Dom manipulation

-----Query Selector-----Query Selector All--

-Selectors

1.tag name

    1.const body = document.querySelector("body");//we are selecting body tag
    console.log(body);//console tab me jayenge to apne ko body tag dikhega pura
    2.body.innerHTML = "<h1>Hacked!!</h1>";//sbkch delete krke body me bs ye h1 wala tag dikahyega console and web page pr dono me
    3.console.log(body.innerHTML);//pura code as string return krega code which conatin sbkch comments code sbkch

    ex: const div = doument.querySelector("div");
        div.innerHTML "<h1>This is hacked !<h1>";// ye sirf div ko change krega

2.id #
    
    const username = document.querySelector("#useranem");
    console.log(username);
    username.innerText = "John Doe";

3.class

    const ele = document.querySelector(".paragraph");
    console.log(ele.document);

*/

//---------------------------------------------------------------------------------------

/*

lect.14.Select Element By Id in JavaScript

Refer-14.html

<script>
        const el = document.getElementById("username");
        //console.log(el.innerText);->ye username ke andar ky likha hai vo batayega
        //el.innerText = "Jhon Doe";//Manish Nagpure ko John Doe kr dega
        //el.classList.add("red-color","underline");//style tag ke classes add kr rh apn
        //console.log(el.classList);//ismee batayega konsi classes apn use kiye yhai

        //el.classList.remove("pink-color");//it will remove class pinkcolor where id="username" 
        
        //inLine Style like ex: style="color: blue"
        const el1 = document.getElementById("code");
        el1.style.textDecoration = "undeline";
        el1.style.color = "tomato";// ye sb add ho chuka hai HTML me whre id = "code" check in console tab
        console.log(el1.parentElement.parentElement);//parent tag access kr skte nd isme bhi change kr skte
        el1.parentElement.style.background = "grey";
        el1.remove();//we deleted element where id = "code";
    </script>
*/

//-----------------------------------------------------------------------------------------------------------------------

/*
lect.15.Get Elements By Class Name 

Refere 15.html

<script>
        //Agr mujhe kisi class ko select krna hai to apn aishe krnge
        //1. way was query selector . use kro
        
        //2.way-> ye multiple elements select krega
        const elements = document.getElementsByClassName("block");//all block select kr rh
        for(let i=0; i<elements.length; i++)
        {
            //console.log(elements.item(i));->jo jo tag ki class="block" hai vo dikahyega console tab me
            elements.item(i).style.background = "blue";//jis jis tag me class="block" hoga sb blue ho jayega 
            //this how we can select multiple elements
        }

</script>

*/

//--------------------------------------------------------------------------------------------------------------------------

/*
lect.16.What are Event Listeners in JavScript

refer -> 16.html

<button onclick="console.log('Hey I am Clicked')">Click Me 1</button><br>
    <button onclick="alert('Hey I am Clicked')">Click Me 2</button><br><br>

    <button onclick="handleButtonClick()">Click and Alert 3</button><br><br>

    <button id="clickButton">Click by ID 4</button><br><br>

    <button id="maglu">Click by ID 5</button><br><br>

    <button id="update">Changed</button><br><br>



    <script>
        //EventListeners->hum kisi trh ke event ko listen kr rh like watching some kind of event.
        //Event-> like clicking on button is event, loading a page is event.

        //above was 1 way withou function

        //2nd way-> function bana kr 
        function handleButtonClick()
        {
            console.log("That Button is Clicked");
            alert("Hey I am Clicked");
        }

        //3rd way most prefer by id
        //3.1
        const el  = document.getElementById("clickButton");
        el.onclick = function()
        {
            console.log("Hey I am clicked");
            alert("Clicked by ID");
        }//but isme dikkat hai override ki jo llatest wala hai vo run hoga

        //3.2->most Preferred way
        const el1  = document.getElementById("maglu");
        function doSomething()
        {
            console.log("I am Clicked");
            alert("Hacked");
        }
        el1.addEventListener("click", doSomething);

        or both are same
        el1.addEvetListener("click", function{
            console.log("I am Clicked");
            alert("Hacked");
        })

       

        //Assignment -> jb bhi mai click Kru on "Update Button" it should update text colour to Red colour where id="name-block"
        const nameBlock = document.getElementById("name-block");
        const el2 = document.getElementById("update");
        el2.addEventListener("click", function()//toggling effect
        {
            if(nameBlock.style.color === "red")
            {
                nameBlock.style.color = "blue";
            }
            else
            {
                nameBlock.style.color = "red";
            }
        });

       

    </script>

    <script>
        //Assigmnet-> aisha kch krna hai hume like jis tag ke part pr click krnge vo DOM se remove ho jana chahiye
        const allChildren = document.querySelector("body").children;

        for(let i=0;i<allChildren.length;i++)
        {
            allChildren.item(i).addEventListener("click", function()
            {
                allChildren.item(i).remove();
            })
        }
    </script>
*/

//--------------------------------------------------------------------------------------------------------------------------

/*
lect.17. Create Elements Dynamically in JavaScript

refer->17.html

<div id="my-container"></div>
    
    <button id="clickButton">Click Me</button>

    <script>
        //assigment1-> is to keep adding Manish Nagpure on webpage or in our div tag which id="my-conatiner"whenever i click on button "Click Me"
        const button = document.getElementById('clickButton');
        const container = document.getElementById('my-container');

        button.addEventListener("click", function()
        {
            const el = document.createElement('h1');//h1 tag create kr rh
            el.innerText = "Manish Nagpure";//manish nagpure pr h1 tag laga rh
            //container.innerHTML = "<h1>Piyush</h1>";-> ye bhi ek way hai add krne ka but ye sirf ek br hi add krega keep on adding chahiye
            container.appendChild(el);//now manish nagpure add kr rh apn container me 
        });
       
       
        //assignment2-> list add krna hai number ki apn button pr click krng  number increment ho kr add hona chahiye
        let count = 1;
        const button = document.getElementById('clickButton');
        const container = document.getElementById('my-container');

        button.addEventListener("click", function()
        {
            const el = document.createElement("ul")//list tag
            el.innerHTML = count;
            container.appendChild(el);//It will keep on adding
            count++;
        });

    </script>
*/