import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
    transform(value: any, todos: boolean = true) {
        value = value.toLowerCase();
        let fullname = value.split(" ");
        if(todos) {
            for(let char in fullname) {
                fullname[char] = fullname[char][0].toUpperCase() + fullname[char].substring(1);
            }
        } else {
            fullname[0] = fullname[0][0].toUpperCase() + fullname[0].substring(1);
        }

        return fullname.join(" ");
    }
}