class Sibling {
    constructor(name, birthorder) {
      this.name = name;
      this.birthorder = birthorder;
    }
  
    describe() {
      return `${this.name} is ${this.birthorder}. `;
    }
  }
//   I used class to declare a new object named "Sibling". "name" and "birthorder" are my parameters. 
// I used the "this" keyword to have my parameters work as properties.
// In lines 7 and 8, the return statement is used along with a string to show the birthorder of each sibling.
  
  class Family {
    constructor(name) {
      this.name = name;
      this.siblings = [];
    }
  
    addSibling(sibling) {
      if (sibling instanceof Sibling) {
        this.siblings.push(sibling);
      } else {
        throw new Error(`Sorry, wrong sibling: ${sibling}`);
      }
    }
  
    describe() {
      return `${this.name} is made of ${this.siblings.length} kids.`;
    }
  }
//   In lines 15-18, I used class to declare a new object named "Family". "name" and "siblings" are my parameters. 
// In lines 21-25, I used the "instanceof" operator so that the sibling parameter can be used to see if the object "Sibling"
// is an instanceof the class named "Sibling".
// In lines 29-30, returns a string to indicate the number of kids in the "siblings" array.
  
  class Menu {
    constructor() {
      this.families = [];
      this.selectedFamily = null;
    }
  
    start() {
      console.log("Menu started.");
      let selection = this.showMainMenuOptions();
      while (selection != '0') {
        switch (selection) {
          case '1':
            this.createFamily();
            break;
          case '2':
            this.viewFamily();
            break;
          case '3':
            this.deleteFamily();
            break;
          case '4':
            this.displayFamilies();
            break;
          default:
            selection = 0;
            break;
        }
        selection = this.showMainMenuOptions();
      }
  
      console.log('See you later');
    }

    // In lines 38-69, Menu is declared as a class. An empty array named "families" and a property named "selectedFamily" are used.
    // I used a "start" method which then goes through a while loop which is what allows the app to remain on the main page until
    // the 0 is entered. The while loop has a switch statement which is what allows the person on the app to enter the indicated 
    // numbers 1-4 to go to different pages on the app.
  
    showMainMenuOptions() {
      console.log("Showing main menu options.");
      return prompt(`
        0) exit
        1) create new family
        2) view family
        3) delete family
        4) display all families
      `);
    }

    // In lines 76-84, the method named "showMainMenuOptions" is used to show the main menu options. The console.log statement shows 
    // what the options are.
    // Options are shown to the person using the app with the prompt function. 
  
    showFamilyMenuOptions(familyInfo) {
      console.log("Showing family menu options.");
      return prompt(`
        0) back
        1) create sibling
        2) delete sibling
        - - - - - - - - - - -
        ${familyInfo}
      `);
    }

    // In lines 91-99, the method "showFamilyMenuOptions" is used to show the family menu options. Options are shown with a 
    // console.log statement.
    // Options are shown to the person using the app with the prompt function.

  
    displayFamilies() {
      console.log("Displaying families.");
      let familyString = '';
      for (let i = 0; i < this.families.length; i++) {
        familyString += i + ') ' + this.families[i].name + '\n';
      }
      alert(familyString);
    }
  
    createFamily() {
      console.log("Creating a new family.");
      let name = prompt('Enter the new family name:');
      this.families.push(new Family(name));
    }
  
    viewFamily() {
      console.log("Viewing a family.");
      let index = prompt('Enter the name of the family you want to view:');
      if (index > -1 && index < this.families.length) {
        this.selectedFamily = this.families[index];
        let description = 'Family Name: ' + this.selectedFamily.name + '\n';
  
        for (let i = 0; i < this.selectedFamily.siblings.length; i++) {
          description += i + ') ' + this.selectedFamily.siblings[i].name +
            ' - ' + this.selectedFamily.siblings[i].birthorder + '\n';
        }
  
        let selection = this.showFamilyMenuOptions(description);
        switch (selection) {
          case "1":
            this.createSibling();
            break;
          case "2":
            this.deleteSibling();
            break;
        }
      }
    }

    // In lines 107-144, a method named "displayFamilies" is declared. A string named "familyString" is then declared. Said string
    // allows data about each family to be stored. A "for" loop is used for all families in the array named "families".
    // An "alert" box is used to display the the families.

    // A method named "createFamilies" is declared. With this method, the person using the app will have to enter the new family name.
    // in line 119, Family is declared as an object and then goes through the array named "families".

    // A method named "viewFamily" is declared. The prompt allows the person using the app to enter the name of the family
    // they want to view. 
    // Using an "if" statement, the family in the index is chosen. A despription string is used for the name of the family and 
    // other data about each sibling.
    // The person using the app has to choose something from the menu. If 1 is chosen, they'll have to create a sibling.
    // If 2 is chosen, a sibling will be deleted.
  
    deleteFamily() {
      console.log("Deleting a family.");
      let index = prompt('Enter the name of the family you want to delete:');
      if (index > -1 && index < this.families.length) {
        this.families.splice(index, 1);
      }
    }
  
    createSibling() {
      console.log("Creating a new sibling.");
      let name = prompt('Enter the new sibling name:');
      let birthorder = prompt('Enter the birth order for the new sibling:');
      this.selectedFamily.addSibling(new Sibling(name, birthorder));
    }
  
    deleteSibling() {
      console.log("Deleting a sibling.");
      let index = prompt('Enter the name of the sibling you want to delete:');
      if (index > -1 && index < this.selectedFamily.siblings.length) {
        this.selectedFamily.siblings.splice(index, 1);
      }
    }
  }
  
  let menu = new Menu();
  menu.start();
  
// In line 160-185, A method named "deleteFamily" is declared. The prompt is what allows the person using the app to enter the name
// of the family they want the app to delete. The splice method gets rid of the family in the index declared with the if statement
// from the list of families entered.
// A method named "createSibling" is declared. The prompt is what allows the person using the app to enter the name
// of the sibling they want the app to create. The new sibling is added to the "selectedFamily" class.
// A method named "deleteSibling" is declared. The prompt is what allows the person using the app to enter the name
// of the sibling they want the app to delete. The splice method gets rid of the sibling in the index declared with the if statement
// from the list of siblings entered.
// The variable "menu" is created and it has the class named "Menu" and its data inside of it.
// A method named "start" is declared. 