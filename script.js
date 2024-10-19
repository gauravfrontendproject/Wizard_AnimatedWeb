function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav, nav li", {
    y: -40,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: 200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.7"
  );

  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}

// End of function1

// start of function2
function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });

  // Line1

  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );

  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );

  // Line2
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );

  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
}
// End of function2

// Start of function3
function page3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl3.from(
    ".centerBg img",
    {
      x: 85,
      opacity: 0,
      duration: 1,
    },
    "greet"
  );

  tl3.from(
    ".centerBg h1,.centerBg p,.centerBg button",
    {
      x: -85,
      opacity: 0,
      duration: 1,
    },
    "greet"
  );
  tl3.from(".related-content", {
    x: -85,
    opacity: 0,
    duration: 1,
  });

  tl3.from("form", {
    x: 85,
    opacity: 0,
    duration: 1,
  });
}

// End of function3

// Start of function4
function page4Animation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section4",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });
  tl4.from(".section4", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });

  tl4.from(".content", {
    x: -85,
    opacity: 0,
    duration: 1,
  });
}

// End of function4

// Calling all the function
page1Animation();
page2Animation();
page3Animation();
page4Animation();

// Onclick method for menu

function showSidebar() {
  const sidebar = document.querySelector(".nav-sidebar");
  sidebar.style.display = "flex";
}

function hideSideBar() {
  const sidebar = document.querySelector(".nav-sidebar");
  sidebar.style.display = "none";
}
