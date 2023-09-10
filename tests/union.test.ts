describe('Union Test', function(){
    it('Should support in typescript', function(){
        let sample: string | number | boolean = "Fikri";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = false;
        console.info(sample);
    })

    it('Should support typeof operator', function(){

        function process(value: string | number | boolean){
            if(typeof value === 'string'){
                return value.toUpperCase();
            }else if(typeof value === 'number'){
                return value + 5;
            }else{
                return !value;
            }
        }


        expect(process("fikri")).toBe('FIKRI');
        expect(process(100)).toBe(105);
        expect(process(false)).toBe(true);

    })
})