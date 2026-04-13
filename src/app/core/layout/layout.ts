import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../shared/components/header/header";
import { Footer } from '../../shared/components/footer/footer';
import { Sidebar } from '../../shared/components/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Header, Sidebar, RouterOutlet, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
