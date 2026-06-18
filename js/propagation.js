const grandparent =
document.getElementById("grandparent");

const parent =
document.getElementById("parent");

const child =
document.getElementById("childBtn");



grandparent.addEventListener(
"click",
()=>console.log("Grandparent Capture"),
true
);

parent.addEventListener(
"click",
()=>console.log("Parent Capture"),
true
);

child.addEventListener(
"click",
()=>console.log("Child Capture"),
true
);



grandparent.addEventListener(
"click",
()=>console.log("Grandparent")
);

parent.addEventListener(
"click",
()=>console.log("Parent")
);

child.addEventListener(
"click",
()=>console.log("Child")
);