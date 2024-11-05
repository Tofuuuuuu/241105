let angle = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0) //背景顏色為黑色
  angleMode(DEGREES) //設定使用到角度,採用數字的方式0~360
  frameRate(5) //進入draw()函數,每秒執行10次
}
function draw() { //開始畫圖,每秒進入draw()會進入60次
  //background(220);
  background(0)
  //translate(width/2,height/2) //設定原點(0,0)在左上角,移到視窗的中心(width/2,height/2)
  translate(mouseX,mouseY)
  //視窗的中心點畫一個600*600的方形,框線為白色,不填滿顏色
  noFill() //不填滿顏色
  stroke(255) //框線為白色
  rectMode(CENTER) //設定方形的中心點為座標點
  for (let i = 0; i<33;i=i+1);{
  let r = map(sin(frameCount),-1,1,50,255)
  let g = map(cos(frameCount/2),-1,1,50,255)
  let b = map(sin(frameCount/4),-1,1,50,255)
  stroke(r,g,b)
  rotate(sin(angle-i*2)*mouseY/2)
  rect(0,0,100+(mouseX/10)-i*3,100+(mouseX/10)-i*3,20)

  }
  angle = angle+10
}
