(function () {
  var bn = "০১২৩৪৫৬৭৮৯";

  /* ---------- archive filter ---------- */
  var archChips = document.getElementById("archChips");
  if (archChips) {
    var types = ["সব", "সংকলন", "মঞ্চনাটক", "অডিও রেকর্ড", "ছবি", "ভিডিও"];
    var current = "সব";
    var archData = window.ARCHIVE_DATA || [];

    function renderArch() {
      var list = document.getElementById("archList");
      if (!list) return;
      var q = (document.getElementById("archQ")?.value || "").trim();
      list.innerHTML = "";
      var count = 0;
      archData.forEach(function (a) {
        if ((current !== "সব" && a.type !== current) || (q && a.title.indexOf(q) < 0)) return;
        count++;
        var r = document.createElement("div");
        r.className = "item";
        var c = document.createElement("div");
        var h = document.createElement("h3"); h.textContent = a.title;
        var s = document.createElement("small"); s.textContent = a.type + " · " + a.meta;
        c.appendChild(h); c.appendChild(s);
        r.appendChild(c);
        var btn = document.createElement("a");
        btn.className = "btn ghost small";
        btn.textContent = "বিবরণ";
        btn.href = a.link || "#";
        r.appendChild(btn);
        list.appendChild(r);
      });
      if (!count) {
        var e = document.createElement("div");
        e.className = "empty";
        e.textContent = current === "সব" ? "কিছু পাওয়া যায়নি।" : current + " ধরনের উপকরণ যোগ করা হচ্ছে।";
        list.appendChild(e);
      }
    }

    function buildChips() {
      archChips.innerHTML = "";
      types.forEach(function (t) {
        var b = document.createElement("button");
        b.className = "chip";
        b.type = "button";
        b.textContent = t;
        b.setAttribute("aria-pressed", String(current === t));
        b.addEventListener("click", function () {
          current = t;
          buildChips();
          renderArch();
        });
        archChips.appendChild(b);
      });
    }

    var archQ = document.getElementById("archQ");
    if (archQ) archQ.addEventListener("input", renderArch);
    buildChips();
    renderArch();
  }

  /* ---------- events ---------- */
  var evList = document.getElementById("evList");
  if (evList) {
    var events = window.EVENTS_DATA || [];
    if (!events.length) {
      evList.innerHTML = '<div class="empty">এখন কোনো ইভেন্ট নেই।</div>';
    } else {
      events.forEach(function (e) {
        var r = document.createElement("div");
        r.className = "ev";
        var d = document.createElement("div");
        d.className = "date";
        var b = document.createElement("b"); b.textContent = e.day;
        var sp = document.createElement("span"); sp.textContent = e.month;
        d.appendChild(b); d.appendChild(sp);
        r.appendChild(d);
        var c = document.createElement("div");
        var h = document.createElement("h3"); h.textContent = e.title;
        var p = document.createElement("p"); p.className = "muted"; p.textContent = e.desc;
        c.appendChild(h); c.appendChild(p);
        r.appendChild(c);
        evList.appendChild(r);
      });
    }
  }

  /* ---------- training form (Netlify Forms) ---------- */
  var trainForm = document.getElementById("trainingForm");
  if (trainForm) {
    trainForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("tName");
      var email = document.getElementById("tEmail");
      var phone = document.getElementById("tPhone");
      var err = document.getElementById("tErr");
      var ok = document.getElementById("tOk");

      if (!name.value.trim()) { err.textContent = "নাম লিখুন।"; return; }
      if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) { err.textContent = "সঠিক ইমেইল দিন।"; return; }
      if (phone.value.trim() && !/^01\d{9}$/.test(phone.value.replace(/\s/g, ""))) {
        err.textContent = "মোবাইল নম্বর ১১ অঙ্কের হতে হবে।"; return;
      }
      err.textContent = "";

      var data = new URLSearchParams(new FormData(trainForm)).toString();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data
      }).then(function (res) {
        if (res.ok) { ok.hidden = false; trainForm.reset(); }
        else { err.textContent = "জমা দেওয়া যায়নি। পরে আবার চেষ্টা করুন।"; }
      }).catch(function () {
        err.textContent = "নেটওয়ার্ক সমস্যা। পরে আবার চেষ্টা করুন।";
      });
    });
  }

  /* ---------- contact form (Netlify Forms) ---------- */
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("cName");
      var email = document.getElementById("cEmail");
      var msg = document.getElementById("cMsg");
      var err = document.getElementById("cErr");
      var ok = document.getElementById("cOk");

      if (!name.value.trim()) { err.textContent = "নাম লিখুন।"; return; }
      if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) { err.textContent = "সঠিক ইমেইল দিন।"; return; }
      if (!msg.value.trim()) { err.textContent = "বার্তা লিখুন।"; return; }
      err.textContent = "";

      var data = new URLSearchParams(new FormData(contactForm)).toString();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data
      }).then(function (res) {
        if (res.ok) { ok.hidden = false; contactForm.reset(); }
        else { err.textContent = "পাঠানো যায়নি। পরে আবার চেষ্টা করুন।"; }
      }).catch(function () {
        err.textContent = "নেটওয়ার্ক সমস্যা। পরে আবার চেষ্টা করুন।";
      });
    });
  }

  /* ---------- Scroll to Top Button ---------- */
  var scrollTopBtn = document.createElement("button");
  scrollTopBtn.innerHTML = "↑";
  scrollTopBtn.setAttribute("aria-label", "উপরে যান");
  scrollTopBtn.style.cssText = "position:fixed; bottom:24px; right:24px; width:48px; height:48px; border-radius:50%; background:var(--accent); color:var(--on-accent); border:none; font-size:24px; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.15); opacity:0; visibility:hidden; transition:all 0.3s ease; z-index:99; display:flex; align-items:center; justify-content:center;";
  
  document.body.appendChild(scrollTopBtn);

  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      scrollTopBtn.style.opacity = "1";
      scrollTopBtn.style.visibility = "visible";
    } else {
      scrollTopBtn.style.opacity = "0";
      scrollTopBtn.style.visibility = "hidden";
    }
  });

  scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
