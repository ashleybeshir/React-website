export class Random {

    static getRandomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    static getRandomString(max) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < max; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }  
}

