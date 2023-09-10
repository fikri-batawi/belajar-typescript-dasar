describe('Array', function(){
    it('Should same with javascript', function(){
        const names: string[] = ['Muhammad', "Fikri"];
        const values: number[] = [100,90];

        console.info(names);
        console.info(values);
    })

    it('Should support readonly array', function(){
        const hobbies: ReadonlyArray<string> = ["Coding", "Gaming"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
    })

    it('Should support tupple', function(){
        const person: readonly [string, string, number] = ['Muhammad Fikri', 'Mampang', 18];
        console.info(person)
    })
})