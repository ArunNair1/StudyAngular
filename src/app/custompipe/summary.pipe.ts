import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dummy'
})
export class Summary implements PipeTransform{

    transform(value:string, limit?:number){
        if(!value)
        return null;

        let actualLimit = (limit)?limit:25;
        return value.substr(0,actualLimit);
    }
}