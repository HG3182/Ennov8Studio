import { Component, OnInit ,HostListener, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{



  constructor(private router: Router,private elRef: ElementRef, private renderer: Renderer2,private cdRef: ChangeDetectorRef) {}
  @HostListener('window:scroll', [])

 
  ngOnInit() {
    // Burger menus
    this.burgermenu();
 

  }

  burgermenu()
  {
    document.addEventListener('DOMContentLoaded', () => {
      // open
      const burger = document.querySelectorAll('.navbar-burger');
      const menu = document.querySelectorAll('.navbar-menu');

      if (burger.length && menu.length) {
        for (let i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', () => {
            for (let j = 0; j < menu.length; j++) {
              menu[j].classList.toggle('hidden');
            }
          });
        }
      }

      // close
      const close = document.querySelectorAll('.navbar-close');
      const backdrop = document.querySelectorAll('.navbar-backdrop');

      if (close.length) {
        for (let i = 0; i < close.length; i++) {
          close[i].addEventListener('click', () => {
            for (let j = 0; j < menu.length; j++) {
              menu[j].classList.toggle('hidden');
            }
          });
        }
      }

      if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', () => {
            for (let j = 0; j < menu.length; j++) {
              menu[j].classList.toggle('hidden');
            }
          });
        }
      }
    });
  }

  




}