function myFunction(){
    var a, b=0.0, c=0.0, x1, x2,x3,x4, range, message = "";
    X = parseFloat(document.getElementById("X").value);
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);

    x1 = round(0);
    x2 = round(x1+a);
    x3 = round(x2+b);
    x4 = round(1);
    //console.log("x1 = "+x1+ " "+"x2 = "+x2);
    if (X >= x1 && X < x2){
        
        messageA();
        
        if (X >= x1 && X < x2){
            message = message+"a";

            x4 = x2;

            range = round((x4-x1)/10);
            x2 = round(x1 + range*a*10);
            x3 = round(x2 + range*b*10);

            if (X >= x1 && X < x2){
                message = message+"a";
    
                x4 = x2;
    
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else if (X >= x2 && X < x3){
                message = message + "b";
    
                x1 = x2;
                x4 = x3;
            
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else {
                message = message + "c";
                
                x1 = x3;
                
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
                
            }
        }
        else if (X >= x2 && X < x3){
            message = message + "b";

            x1 = x2;
            x4 = x3;
        
            range = round((x4-x1)/10);
            x2 = round(x1 + range*a*10);
            x3 = round(x2 + range*b*10);

            if (X >= x1 && X < x2){
                message = message+"a";
    
                x4 = x2;
    
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else if (X >= x2 && X < x3){
                message = message + "b";
    
                x1 = x2;
                x4 = x3;
            
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else {
                message = message + "c";
                
                x1 = x3;
                
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
                
            }
        }
        else {
            message = message + "c";
            
            x1 = x3;
            
            range = round((x4-x1)/10);
            x2 = round(x1 + range*a*10);
            x3 = round(x2 + range*b*10);

            if (X >= x1 && X < x2){
                message = message+"a";
    
                x4 = x2;
    
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else if (X >= x2 && X < x3){
                message = message + "b";
    
                x1 = x2;
                x4 = x3;
            
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else {
                message = message + "c";
                
                x1 = x3;
                
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
                
            }
            
        }

    }
    else if (X >= x2 && X < x3){
        message = message+"b";
        
        x1 = x2;
        x4 = x3;
        
        range = round((x4-x1)/10);
        x2 = round(x1 + range*a*10);
        x3 = round(x2 + range*b*10);
        
        if (X >= x1 && X < x2){
            message = message+"a";

            x4 = x2;

            range = round((x4-x1)/10);
            x2 = round(x1 + range*a*10);
            x3 = round(x2 + range*b*10);

            if (X >= x1 && X < x2){
                message = message+"a";
    
                x4 = x2;
    
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else if (X >= x2 && X < x3){
                message = message + "b";
    
                x1 = x2;
                x4 = x3;
            
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else {
                message = message + "c";
                
                x1 = x3;
                
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
                
            }
        }
        else if (X >= x2 && X < x3){
            message = message + "b";

            x1 = x2;
            x4 = x3;
        
            range = round((x4-x1)/10);
            x2 = round(x1 + range*a*10);
            x3 = round(x2 + range*b*10);

            if (X >= x1 && X < x2){
                message = message+"a";
    
                x4 = x2;
    
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else if (X >= x2 && X < x3){
                message = message + "b";
    
                x1 = x2;
                x4 = x3;
            
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else {
                message = message + "c";
                
                x1 = x3;
                
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
                
            }
        }
        else {
            message = message + "c";
            
            x1 = x3;
            
            range = round((x4-x1)/10);
            x2 = round(x1 + range*a*10);
            x3 = round(x2 + range*b*10);

            if (X >= x1 && X < x2){
                message = message+"a";
    
                x4 = x2;
    
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else if (X >= x2 && X < x3){
                message = message + "b";
    
                x1 = x2;
                x4 = x3;
            
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else {
                message = message + "c";
                
                x1 = x3;
                
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
                
            }
            
        }
    }
    else {
        message = message + "c";
        
        x1 = x3;
        
        range = round((x4-x1)/10);
        x2 = round(x1 + range*a*10);
        x3 = round(x2 + range*b*10);

        if (X >= x1 && X < x2){
            message = message+"a";

            x4 = x2;

            range = round((x4-x1)/10);
            x2 = round(x1 + range*a*10);
            x3 = round(x2 + range*b*10);

            if (X >= x1 && X < x2){
                message = message+"a";
    
                x4 = x2;
    
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else if (X >= x2 && X < x3){
                message = message + "b";
    
                x1 = x2;
                x4 = x3;
            
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else {
                message = message + "c";
                
                x1 = x3;
                
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
                
            }
        }
        else if (X >= x2 && X < x3){
            message = message + "b";

            x1 = x2;
            x4 = x3;
        
            range = round((x4-x1)/10);
            x2 = round(x1 + range*a*10);
            x3 = round(x2 + range*b*10);

            if (X >= x1 && X < x2){
                message = message+"a";
    
                x4 = x2;
    
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else if (X >= x2 && X < x3){
                message = message + "b";
    
                x1 = x2;
                x4 = x3;
            
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else {
                message = message + "c";
                
                x1 = x3;
                
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
                
            }
        }
        else {
            message = message + "c";
            
            x1 = x3;
            
            range = round((x4-x1)/10);
            x2 = round(x1 + range*a*10);
            x3 = round(x2 + range*b*10);

            if (X >= x1 && X < x2){
                message = message+"a";
    
                x4 = x2;
    
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else if (X >= x2 && X < x3){
                message = message + "b";
    
                x1 = x2;
                x4 = x3;
            
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
            }
            else {
                message = message + "c";
                
                x1 = x3;
                
                range = round((x4-x1)/10);
                x2 = round(x1 + range*a*10);
                x3 = round(x2 + range*b*10);
                
            }
            
        }
        
    }
    //console.log(message);
    document.getElementById("message").innerHTML = "The message is : " + message;
    //document.getElementById("interval").innerHTML = "The final sequence interval is : " + a;
}

function round (t) {
    return Math.round((t + Number.EPSILON) * 1000) / 1000
}

function messageA(){
    message =message+ "a";
    x4 = x2;
    range = round((x4-x1)/10);
    x2 = round(x1 + range*a*10);
    x3 = round(x2 + range*b*10);
}

function messageB(){
    message = message + "b";
    x1 = x2;
    x4 = x3;
    range = round((x4-x1)/10);
    x2 = round(x1 + range*a*10);
    x3 = round(x2 + range*b*10);
}
function messageC(){
    message = message + "c";   
    x1 = x3;
    range = round((x4-x1)/10);
    x2 = round(x1 + range*a*10);
    x3 = round(x2 + range*b*10);
}