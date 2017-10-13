function Ball(x, y, r) {
  this.x = x;
  this.y = y;
  this.xdir = -1;
  this.ydir = random(-1,1);
  this.r = r;

  this.render = function()  {
    fill(255);
    noStroke();
    rect(this.x, this.y, this.r, this.r);
  }

  this.move = function() {
    this.x += this.xdir * scl;
    this.y += this.ydir * 5;
  }

  this.score = function() {
    if (this.x < 15) {
      this.x = x;
      this.y = y
      this.ydir = random(-2,2);
      console.log('reset');
      RScore++;
      this.xdir = this.xdir * -1;
      scl = 5;
      ScoreDisplay();
    } else if (this.x > width - 15) {
      this.x = x;
      this.y = y;
      this.ydir = random(0,1);
      console.log('reset')
      LScore++;
      this.xdir = this.xdir * -1;
      scl = 5;
      ScoreDisplay();
    }
  }

  this.edges = function() {
    if (this.y < 0) {
      this.y = 1;
      this.ydir = this.ydir * -1;
    } else if (this.y > height) {
      this.y = height -1;
      this.ydir = this.ydir * -1;
    }
  }

  this.hit = function() {
    if (this.x <= 25 && this.y >= PadL.y - 110 && this.y <= PadL.y + 110) {
      this.xdir = this.xdir * -1;
      this.ydir = random(-3, 3);
      scl += 0.1;
    } else if (this.x >= width - 25 && this.y >= PadR.y - 110 && this.y <= PadR.y + 110) {
      this.xdir = this.xdir * -1;
      this.ydir = random(-3, 3);
      scl += 0.1;
    }
  }
}
