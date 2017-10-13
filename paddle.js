function Paddle(x, y) {
  this.x = x;
  this.y = y;
  this.dir = 0;

  this.render = function() {
    fill(255);
    rect(this.x, this.y, 10, 200);
  }

  this.Moving = function() {
    this.isMoving = false;
  }

  this.move = function() {
    this.y += this.dir * 5;
  }

  this.botR = function() {
    if (this.y != ball.y && ball.xdir == 1) {
      if (this.y > ball.y) {
        this.y -= 5
      } else if (this.y < ball.y) {
        this.y += 5
      }
    }
  }

  this.botL = function() {
    if (this.y != ball.y && ball.xdir == -1) {
      if (this.y > ball.y) {
        this.y -= 5
      } else if (this.y < ball.y) {
        this.y += 5
      }
    }
  }

  this.edges = function() {
    if (this.y < 100) {
      this.y = 100;
    } else if (this.y > height - 100) {
      this.y = height-100;
    }
  }
}
