import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "src/environments/environment";

@Pipe({name: 'urlPipe'})
export class UrlPipe implements PipeTransform {
    transform(value: string,) {
        return value ? `${environment.api}${value}` : `${environment.api}resources/images/noAvatar.jpg`;
    }
}