
    
window.onload = function(){
    
    //x();
{
   document.body.onclick=(e)=>{
        let x= e.clientX
        let y= e.clientY
        let ripple= document.createElement("span")
        ripple.className="ripple"
        ripple.style.left=x-75+"px"
        ripple.style.top=y-75+"px"
        document.body.appendChild(ripple)
        setTimeout(()=>{
            ripple.remove()
        },500)}}
    
    const config = {
    apiKey: "AIzaSyAjYvGo-i9tPUJebCvfCHRKZZ5mhkGh0oU",
    authDomain: "hello-4ee02.firebaseapp.com",
    projectId: "hello-4ee02",
    storageBucket: "hello-4ee02.appspot.com",
    messagingSenderId: "404320860501",
    appId: "1:404320860501:web:7833523d305c643eeb57dc"
  };
  // Initialize Firebase



    // inteliging firebase
    firebase.initializeApp(config);
    var db=firebase.firestore();
    db.settings({timestampsInSnapshots: true});
    
    
    // reciving data from fire base
    
    function tp(){
       
       db.collection('Details').orderBy("Sn").get().then(l);
    }
    //setInterval(tp,1000);
    tp();
    function l(snap){
    var a = 1;
    document.getElementById("dv").innerHTML = "";     
        // getting catogrical data by for loop
        for(pg in snap.docs){
            /*data deleting
            var Id = snap.docs[pg].id;
            db.collection("Details").doc(Id).delete();
            //*/
            var name = snap.docs[pg].data().Name;
            var num = snap.docs[pg].data().Number;
            var numb = snap.docs[pg].data()["Your_msg"];
            var ht = "<div id='mn'><div id='nm'>"+a+". "+name+"</div><div id='nb'>"+num+"</div><div id='nb'>"+numb+"</div></div>";
            dv.insertAdjacentHTML("afterbegin",ht);
            a++; document.getElementById("count").innerHTML=a;
        }
    }
    
    // sending data to datatabase 
    
    var bn =  document.getElementById("myBtn");
    bn.addEventListener("click", function(){
        var in1 = document.getElementById("inp1").value;
        var in2 = document.getElementById("inp2").value;
        var in3 = document.getElementById("inp3").value;
        
            var a=document.getElementById("count").innerHTML;
            var datatasend= {Name:in1,Number:in2,Your_msg:in3,Sn:a}
            db.collection('Details').add(datatasend);
        
            document.getElementById("inp3").value="";
            tp();
        
        
    });
}
