import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'urlPipe'})
export class UrlPipe implements PipeTransform {
    transform(value: string,) {
        return value ? `https://localhost:5001/${value}` : `https://localhost:5001/resources/images/noAvatar.jpg`;
    }
}