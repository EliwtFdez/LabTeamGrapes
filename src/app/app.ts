import { Component } from '@angular/core';

interface Pixel {
  x: number;
  y: number;
  fill: string;
}

// Uva pixelada: h = brillo, p = uva, s = tallo, l = hoja
const GRAPE_ROWS = [
  '.....s.ll..',
  '.....sll...',
  '..hp.hp.hp.',
  '..pp.pp.pp.',
  '...hp.hp...',
  '...pp.pp...',
  '....hp.....',
  '....pp.....',
  '.....p.....',
];
const GRAPE_FILLS: Record<string, string> = { p: '#b69aee', h: '#e5dfc5', s: '#e5dfc5', l: '#c4f564' };

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly grape: Pixel[] = GRAPE_ROWS.flatMap((row, y) =>
    row
      .split('')
      .map((c, x) => ({ x, y: y + 1, fill: GRAPE_FILLS[c] }))
      .filter((px) => !!px.fill),
  );
}
