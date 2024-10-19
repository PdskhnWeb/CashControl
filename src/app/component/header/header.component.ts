import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private intervalId: any;

  ngOnInit(): void {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000); // обновление времени каждую секунду
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // останавливаем таймер при уничтожении компонента
    }
  }

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString(); // получаем строку с локальным временем
  }

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  GoToError() {
    this.router.navigate(['/error']);
  }
}