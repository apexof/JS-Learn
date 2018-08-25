function User() {
    var firstName;
    var surname;
    this.setFirstName = function(FN){
        firstName = FN;
    };
    this.setSurname = function(SN){
        surname = SN;
    };
    this.getFullName = function () {
        return firstName + " " + surname;
    };
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов