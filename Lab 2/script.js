import {
  clearCanvas,
  drawBresenhamCircle,
  drawBresenhamLine,
  drawBresenhamLineDotted,
} from "./algorithm.js";
import { charecters, square } from "./charecter.js";

clearCanvas();
drawBresenhamLineDotted(300, 100, 360, 150);
drawBresenhamLine(300, 150, 360, 200);
drawBresenhamLineDotted(300, 250, 360, 200);

drawBresenhamLine(400, 100, 450, 100);
drawBresenhamLine(400, 250, 450, 250);
drawBresenhamLine(400, 250, 450, 250);
drawBresenhamLine(400, 100, 450, 100);

drawBresenhamLine(500, 100, 560, 150);
drawBresenhamLineDotted(500, 150, 560, 200);
drawBresenhamLine(500, 250, 560, 200);

drawBresenhamLine(600, 100, 600, 150);
drawBresenhamLine(600, 150, 670, 150);
drawBresenhamLine(660, 140, 660, 250);
