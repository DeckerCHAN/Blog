import { Utils } from '../utils';

export class Turret {
  public static drawDualTurret(x2d: CanvasRenderingContext2D, x: number, y: number, direction: number, isRare: boolean) {
    x2d.save();
    x2d.translate(x, y);
    if (isRare) {
      direction += 180;
    }
    x2d.rotate(Utils.getActuallDegree(direction) * Math.PI / 180);
    x2d.scale(0.25, 0.25);

    x2d.fillStyle = 'blue';

    x2d.beginPath();
    x2d.moveTo(10, -4);
    x2d.lineTo(20, -4);
    x2d.lineTo(20, -6);
    x2d.lineTo(10, -6);
    x2d.lineTo(5, -10);
    x2d.lineTo(-5, -10);
    x2d.lineTo(-10, -5);
    x2d.lineTo(-10, 5);
    x2d.lineTo(-5, 10);
    x2d.lineTo(5, 10);
    x2d.lineTo(10, 6);
    x2d.lineTo(20, 6);
    x2d.lineTo(20, 4);
    x2d.lineTo(10, 4);

    x2d.closePath();
    x2d.fill();

    x2d.restore();
  }


}
