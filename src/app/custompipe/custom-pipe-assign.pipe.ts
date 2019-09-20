import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipeAssignPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return null;
    else
    {
      let testvalues = [ 'of', 'the'];
      let words = value.split(' ');
      console.log(words);
      for(let i=0;i<words.length;i++)
      {
          if(words[i]=="of" || words[i] == "the")
          {
              words[i]=words[i].substr(0,1).toLowerCase()+words[i].substr(1);
          }
          else
          {
            words[i]= words[i].substr(0,1).toUpperCase()+words[i].substr(1).toLowerCase();
          }
      }
      return words.join(' ');
    }
  }

}
