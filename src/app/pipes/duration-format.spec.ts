import { describe, it, expect, beforeEach } from "vitest";
import { DurationFormatPipe } from "./duration-format.pipe"

describe('DurationFormatPipe', () => {
    
    let pipe: DurationFormatPipe;

    beforeEach(() => {
        pipe = new DurationFormatPipe();
    });

    it(' should create the pipe', () => {
        expect(pipe).toBeTruthy();
    });

    it ('should format duration', () => {
        const result = pipe.transform("05:30");
        expect(result).toBe("05h 30m");

    })

    it ('should return original value if invalid input', () => {
        const input = "90";
        expect(pipe.transform(input)).toBe(input);
    })


    it ('should only format the first two parts', () => {
        expect(pipe.transform("01:20:45")).toBe("01h 20m");
        
    
    })
    
                                                                  
})





