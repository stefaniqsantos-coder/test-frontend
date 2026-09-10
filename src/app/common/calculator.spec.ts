import {describe, it, expect,vi} from 'vitest';
import { calculator } from "./calculator";


describe(" Vitest Calculator", () => {

    it("should add two numbers ", () => {
    
    const result = calculator.add(2, 3);
    expect(result).toBe(6);
    
})

//mock
    it("shows how  mocking works", () => {
    const spy = vi.spyOn(calculator, "add").mockReturnValue(5);
    const result = calculator.add(2, 3);

    expect(result).toBe(5); //se o resultado foi exatamente 5
    expect(spy).toHaveBeenCalledOnce(); //se o método foi chamado exatamente 1 vez
    expect(spy).toHaveBeenCalledWith(2, 3);//se os argumentos foram exatamente 2 e 3

//pure mock
it ("shows how pure mocking works", () => {
const addmock = vi.fn().mockReturnValue(10);
const result = addmock(5, 5);

expect(result).toBe(10);
expect(addmock).toHaveBeenCalledOnce();
expect(addmock).toHaveBeenCalledWith(5, 5);

})


})
});

