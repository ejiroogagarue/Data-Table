import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  catalogue = [
    {
      description: 'Body Wave Long',
      trending: true,
      price: 65
    },
    {
      description: 'Curl Bob',
      trending: false,
      price: 40
    },
    {
      description: 'Body Wave Bang',
      trending: true,
      price: 30
    },
  ];

  showStyle = false;
  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'
  };


  getBackgroundColor() {
    if (this.showStyle) {
      return 'yellow';
    } else {
      return '';
    }
  }

  setMyStyles() {
    const styles = {
      'border-bottom': 'solid 2px lime',
      'font-size': '20px',
      'font-weight': 'bold'
    };
    return styles;
  }

  getClassByValue(value: string) {
    switch (value) {
      case "a": return "class-a";
      case "b": return "class-b";
    }
  }
}
