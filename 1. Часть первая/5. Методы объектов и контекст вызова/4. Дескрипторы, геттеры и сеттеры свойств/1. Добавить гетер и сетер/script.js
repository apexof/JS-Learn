var vasya = new User("Василий Попкин");


alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров



function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        "firstName" : {
            get: function(){
                var split = this.fullName.split(" ");
                return split[0];
            },
            set: function (firstName) {
                this.fullName = firstName + " " + this.lastName;
            }
        },
        "lastName" : {
            get: function(){
                var split = this.fullName.split(" ");
                return split[1];
            },
            set: function (lastName) {
                this.fullName = this.firstName + " " + lastName;
            }
        }
    });
}

