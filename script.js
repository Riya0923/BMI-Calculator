function bmi(){
    var h=document.getElementById('height').value;
    var w=document.getElementById('weight').value;
    var ag=document.getElementById('age').value;
    
    if( (h<=0) || (w<=0) || (ag<=0))
    {
        document.getElementById('result').innerHTML= "Invalid Input! Please enter values correctly.";
        document.getElementById('result1').innerHTML="";
    }
    else
    {
        var bmi= w/(h/100*h/100);
        var total= bmi.toFixed(2);
        var fat=((1.20*bmi) + (0.23*ag) - 5.4 ).toFixed(2);

        if(fat>100.00 || fat<0.00)
        {
            document.getElementById('result').innerHTML= "Invalid Input! Please enter values correctly.";
            document.getElementById('result1').innerHTML="";
        }
        else
        {
        if(bmi<18.5)
        {
            document.getElementById('result').innerHTML="Your BMI is : "+ total + " i.e, UNDERWEIGHT!" ;
            document.getElementById('result1').innerHTML="Fat percentage : "+ fat +"%" ;
            
        }
        else if(bmi<25)
        {
            document.getElementById('result').innerHTML="Your BMI is : "+ total + " i.e, NORMAL! ";
            document.getElementById('result1').innerHTML="Fat percentage : "+ fat +"%" ;
        }
        else if(bmi<29.9)
        {
            document.getElementById('result').innerHTML="Your BMI is : "+ total + " i.e, OVERWEIGHT! "
            document.getElementById('result1').innerHTML="Fat percentage : "+ fat +"%" ;
        }
        else
        {
            document.getElementById('result').innerHTML="Your BMI is : "+ total + " i.e, OBESE RANGE! "
            document.getElementById('result1').innerHTML="Fat percentage : "+ fat +"%" ;
        }
    }
    }
    
}