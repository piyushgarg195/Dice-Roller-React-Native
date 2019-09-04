import React,{useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,Alert } from 'react-native';

export default function App() {
  const [url,seturl]=useState(require(`./src/images/dice1.png`));

  const [url2,seturl2]=useState(require(`./src/images/dice2.png`));

  const [bgc,setbgc]=useState('white');

  const randomNumber = () =>{
   return Math.floor(Math.random()*6)+1;
  }
  const randomColor = () =>{
    return(
      "rgb("+
      Math.floor(Math.random()*255)
      +","+
      Math.floor(Math.random()*255)
      +","+
      Math.floor(Math.random()*255)
      +")"
    )
   }

  const randomDice = () =>{
    let num = randomNumber();
   
    switch(num){
      case 1:
          seturl2(require(`./src/images/dice1.png`));
        break;
        case 2:
            seturl2(require(`./src/images/dice2.png`));
        break;
        case 3:
            seturl2(require(`./src/images/dice3.png`));
        break;
        case 4:
            seturl2(require(`./src/images/dice4.png`));
        break;
        case 5:
            seturl2(require(`./src/images/dice5.png`));
        break;
        case 6:
            seturl2(require(`./src/images/dice6.png`));
        break;
    }
    switch(randomNumber()){
      case 1:
        seturl(require(`./src/images/dice1.png`));
        break;
        case 2:
        seturl(require(`./src/images/dice2.png`));
        break;
        case 3:
        seturl(require(`./src/images/dice3.png`));
        break;
        case 4:
        seturl(require(`./src/images/dice4.png`));
        break;
        case 5:
        seturl(require(`./src/images/dice5.png`));
        break;
        case 6:
        seturl(require(`./src/images/dice6.png`));
        break;
    }
    setbgc(randomColor());
    
   }


  return (
    <View style={[styles.container,{
      backgroundColor:bgc
    }]}>
      <TouchableOpacity
      onPress={randomDice}
      >
      <Image
        source={url}
      />
      <Image
        source={url2}
      />
      </TouchableOpacity>
      <Text>Made By Piyush Garg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
