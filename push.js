


const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];



   let a=[];
  for (i=0;i<passengers.length;i++){
    a[i]=passengers[i].passengerName;
  }

  console.log(a);

    //  let b=[];
         
    //  for (j=0;j<passengers.length;i++){
    //     b[j]=passengers[j].isVegetarianOrVegan;
    //     b++
    
    //  }
    //       if(isVegetarianOrVegan==true){
    //     console.log("true");
    //  }
    //  else{
    //     console.log("false");
    //  }
    // console.log(b);


     
    const veg=[];
      nonveg=[];
      b=0;
      c=0;

      for(j=0;j<passengers.length;j++){
        if(passengers[j].isVegetarianOrVegan==true){
          nonveg[b]=passengers[j].passengerName;
          b++
        }
        else{
          veg[c]=passengers[j].passengerName;
          c++;
        }
      }
      console.log(veg);
      console.log(nonveg);
   



