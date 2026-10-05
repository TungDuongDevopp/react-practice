const info = {
    name: "Nguyen Van A",
    age: 20,
    address: "Ha Noi",
    email: "A@example.com"   
    };

    const{name, age, address, email} = info;
    console.log(name, age, address, email);

    const city=["Ha Noi", "Da Nang", "Ho Chi Minh","Hai Phong"];
    const [city1, city2,, city4] = city;
    console.log(city1, city2, city4);