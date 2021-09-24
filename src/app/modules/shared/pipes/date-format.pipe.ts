import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({name: 'tmDateFormat'})
export class DateFormatPipe implements PipeTransform{
  transform(value: Date, ...args: any[]): any {
    return moment(value).fromNow();
  }
}
