import {sayHello} from '../src/say-hello';

describe('sayHello', function(){
    it("should return hello fikri",function() {
        expect(sayHello('Fikri')).toBe('Hello Fikri');
    });
});