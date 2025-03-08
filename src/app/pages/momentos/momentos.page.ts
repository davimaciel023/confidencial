import { AfterViewInit, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButton, IonButtons, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class MomentosPage implements OnInit  {

  momentos = [
    {
      img: '/assets/imgs/Confidencial/1740337207966.jpg',
      title: 'Primeiro Encontro',
      description: 'Primeiro encontro, nossa primeira foto juntos.',
      date: '14/01/2024'
    },
    {
      img: '/assets/imgs/Confidencial/1740337207952.jpg',
      title: 'Antes do namoro',
      description: 'Dias antes de começarmos a namorar',
      date: '10/05/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/1740337207957.jpg',
      title: 'Dia especial',
      description: 'Admiriando sua festa.',
      date: '12/05/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/Photo from Davi Maciel.jpg',
      title: 'Melhor dia da minha vida',
      description: 'Um dia mágico que nunca esquecerei.',
      date: '15/05/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/1740337207945.jpg',
      title: 'Momentos juntos',
      description: 'Momentos que nunca esquecerei.',
      date: '30/06/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/Photo from Davi Maciel (1).jpg',
      title: 'Primeiro evento juntos',
      description: 'Primeiro evento que fizemos juntos.',
      date: '07/07/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/1740337207939.jpg',
      title: 'Primeira vaquejada',
      description: 'Dia que você veio pra minha casa',
      date: '14/07/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/1740337207927.jpg',
      title: 'Você na minha festa',
      description: 'Você na minha festa.',
      date: '18/08/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/1740337207922.jpg',
      title: 'Primeiro ensaio oficial',
      description: 'Primeiro ensaio oficial com a banda.',
      date: '09/11/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/1740337207912.jpg',
      title: 'Segunda festa',
      description: 'Segunda festa que fomos juntos.',
      date: '15/11/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/1740337207904.jpg',
      title: 'Rolê na praça',
      description: 'Rolê na praça com você.',
      date: '21/11/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/1740337207855.jpg',
      title: 'Evento CDL',
      description: 'Evento que a gente se conheceu.',
      date: '17/12/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/1740337207846.jpg',
      title: 'Sua Formatura',
      description: 'Comemorando com muito amor e alegria.',
      date: '17/12/2024'
    },
    {
      img: '../../../assets/imgs/Confidencial/Photo from Davi Maciel (2).jpg',
      title: 'Melhor final de semana',
      description: 'Mlehor final de semana com você.',
      date: '02/03/2025'
    },
  ];

  constructor() { }


  ngOnInit() {}



}
