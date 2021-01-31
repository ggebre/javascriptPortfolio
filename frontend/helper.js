class Helper {
    static shuffle(array){
        
        let currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    static randomColor() {
        const letter = "0123456789ABCDEF"
        let newColor = "#" 
        for(let i=0; i < 6; i++){
            const randomIndex = Math.floor(Math.random() * 16)
            newColor += letter[randomIndex]
        }
        return newColor
    }
    
}