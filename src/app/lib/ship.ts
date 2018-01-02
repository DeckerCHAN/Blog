import { Utils } from '../utils';
import { Turret } from './turret';

export class Ship {
  public static drawShip(x2d: CanvasRenderingContext2D, x: number, y: number, direction: number) {
    x2d.save();
    x2d.translate(x, y);
    x2d.rotate(Utils.getActuallDegree(direction) * Math.PI / 180);
    x2d.fillStyle = 'red';

    x2d.beginPath();
    x2d.moveTo(20, 0);
    x2d.lineTo(5, 5);
    x2d.lineTo(-10, 5);
    x2d.lineTo(-20, 2);
    x2d.lineTo(-20, -2);
    x2d.lineTo(-10, -5);
    x2d.lineTo(5, -5);
    x2d.closePath();
    x2d.fill();

    Turret.drawDualTurret(x2d, 10, 0, 0, false);
    Turret.drawDualTurret(x2d, -10, 0, 0, true);


    x2d.restore();

  }
}
