const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE"; // 13.3" x 7.5"

const NAVY = "1E2761";
const ICE = "CADCFC";
const WHITE = "FFFFFF";
const MINT = "02C39A";
const CHARCOAL = "36454F";

// ---------- Slide 1 : title ----------
const s1 = pptx.addSlide();
s1.background = { color: NAVY };

s1.addText("Pi-Agent实践课作业", {
  x: 1.0, y: 2.7, w: 11.3, h: 1.3,
  fontSize: 44, bold: true, color: WHITE,
  fontFace: "Microsoft YaHei", align: "center", margin: 0
});

s1.addText("实践课作业提交", {
  x: 1.0, y: 4.15, w: 11.3, h: 0.6,
  fontSize: 20, color: ICE,
  fontFace: "Microsoft YaHei", align: "center", margin: 0
});

// ---------- Slide 2 : all tasks done ----------
const s2 = pptx.addSlide();
s2.background = { color: WHITE };

// check icon in a colored circle
s2.addShape("ellipse", {
  x: 5.9, y: 1.6, w: 1.5, h: 1.5,
  fill: { color: MINT }, line: { type: "none" }
});
s2.addText("✓", {
  x: 5.9, y: 1.6, w: 1.5, h: 1.5,
  fontSize: 44, bold: true, color: WHITE,
  fontFace: "Arial", align: "center", valign: "middle", margin: 0
});

s2.addText("任务全部完成", {
  x: 1.0, y: 3.45, w: 11.3, h: 1.1,
  fontSize: 40, bold: true, color: NAVY,
  fontFace: "Microsoft YaHei", align: "center", margin: 0
});

s2.addText("所有任务均已按要求完成", {
  x: 1.0, y: 4.7, w: 11.3, h: 0.6,
  fontSize: 18, color: CHARCOAL,
  fontFace: "Microsoft YaHei", align: "center", margin: 0
});

pptx.writeFile({ fileName: "Pi-Agent实践课作业.pptx" }).then(() => {
  console.log("Saved: Pi-Agent实践课作业.pptx");
});
