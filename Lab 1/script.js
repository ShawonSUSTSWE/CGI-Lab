import {
  clearCanvas,
  drawBresenhamCircle,
  drawBresenhamLine,
  drawBresenhamLineDotted,
} from "./algorithm.js";
import { charecters, square } from "./charecter.js";

let text = "SHAWON";
clearCanvas();
drawBresenhamLine(300, 300, 1000, 300);
drawBresenhamLineDotted(350, 350, 950, 350);
drawBresenhamLine(400, 400, 900, 400);
drawBresenhamLineDotted(350, 350, 300, 300);
drawBresenhamLineDotted(950, 350, 1000, 300);
drawBresenhamLine(400, 400, 350, 350);
drawBresenhamLine(900, 400, 950, 350);

drawBresenhamLine(380, 300, 380, 100);
drawBresenhamLine(430, 300, 430, 100);
drawBresenhamLine(380, 100, 430, 100);

// drawBresenhamLine(650, 300, 650, 100);
// drawBresenhamLine(600, 300, 600, 100);
// drawBresenhamLine(700, 300, 700, 100);
drawBresenhamLine(650, 300, 650, 261);
drawBresenhamLine(650, 100, 650, 141);
drawBresenhamLine(600, 300, 600, 231);
drawBresenhamLine(600, 100, 600, 169);
drawBresenhamLine(700, 300, 700, 231);
drawBresenhamLine(700, 100, 700, 169);

drawBresenhamLine(650, 100, 675, 50);
drawBresenhamLine(600, 100, 625, 50);
drawBresenhamLine(700, 100, 725, 50);
drawBresenhamLine(625, 50, 725, 50);
drawBresenhamCircle(650, 200, 60);

drawBresenhamLine(920, 300, 920, 100);
drawBresenhamLine(870, 300, 870, 100);
drawBresenhamLine(870, 100, 920, 100);
