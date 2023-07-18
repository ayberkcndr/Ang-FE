import { Component } from '@angular/core';

@Component({
  selector: 'app-about-room',
  templateUrl: './about-room.component.html',
  styleUrls: ['./about-room.component.css']
})
export class AboutRoomComponent {
  rooms = [
    {
      image: 'assets/roomimages/deluxe-room.jpg',
      title: 'Deluxe Oda',
      description: 'Lüks ve konforlu bir oda deneyimi sunan Deluxe Odalarımız sizleri bekliyor.'
    },
    {
      image: 'assets/roomimages/family-room.jpg',
      title: 'Aile Odası',
      description: 'Geniş ve rahat bir ortamda ailenizle konaklayabileceğiniz Aile Odalarımız.'
    },
    {
      image: 'assets/roomimages/standart-room.jpg',
      title: 'Standart Oda',
      description: 'Konforlu ve ekonomik bir konaklama seçeneği sunan Standart Odalarımız.'
    },
    {
      image: 'assets/roomimages/suite-room.jpg',
      title: 'Suit Oda',
      description: 'Lüks ve zarif bir konaklama deneyimi için özel olarak tasarlanan Suit Odalarımız.'
    }
  ];
}
