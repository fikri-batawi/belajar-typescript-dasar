describe('Any', function(){
    it('Should support in javascript', function(){
        const person: any = {
            id: 1,
            name: "Muhammad Fikri",
            age: 17,
        }

        person.age = 19;
        person.address = "Indonesia";

        console.info(person)
    })
})