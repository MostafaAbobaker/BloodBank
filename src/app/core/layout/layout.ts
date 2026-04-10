import { Component } from '@angular/core';
import { Header } from "../../shared/components/header/header";

@Component({
  selector: 'app-layout',
  imports: [Header],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
