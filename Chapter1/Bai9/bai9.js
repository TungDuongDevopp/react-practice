let age = 18;
let result = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(result);

let user = {};
console.log(user?.address?.city ?? "Not found user");

let userAdmin = {
    admin: () => console.log("I am an admin")
};
userAdmin.admin();

let userGuest = {};
userGuest.admin?.();