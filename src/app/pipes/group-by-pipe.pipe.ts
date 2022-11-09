import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByPipe',
})
export class GroupByPipePipe implements PipeTransform {
  transform(collection: any[], property: string): any[] {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection) {
      return null;
    }

    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }

      return previous;
    }, {});

    // this will return an array of objects, each object containing a group of objects
    console.log(
      Object.keys(groupedCollection).map((name) => ({
        name,
        items: groupedCollection[name],
      }))
    );

    return Object.keys(groupedCollection).map((name) => ({
      name,
      items: groupedCollection[name],
    }));
  }
}
