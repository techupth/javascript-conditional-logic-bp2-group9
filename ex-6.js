let favoriteBooks = []; //Array
    function addFavoriteBook(bookName)
    {
    //เงื่อนไข
    //ต้องมีคำว่า “Beauty” ถึงจะถูกเพิ่ม(push)เข้าไปใน Array ของ favoriteBooks 
      if(bookName.includes("Beauty")) //JavaScript String includes() 
      {
        favoriteBooks.push(bookName);
      }
        // Array.push()
        /////Example String includes() 
        //let text = "Hello world, welcome to the universe.";
        //let result = text.includes("world");
    }
    addFavoriteBook("Let Me Tell You What I Mean");
    addFavoriteBook("Life Among the Terranauts");
    addFavoriteBook("The Beauty of Living Twice");
    addFavoriteBook("Black Beauty");
    addFavoriteBook("Monstrous Beauty");
console.log(favoriteBooks);