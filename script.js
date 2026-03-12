
      // QUIZ DATA – 40 Questions (Ch 1–40)

      const questions = [
        // Ch 1
        {
          ch: "Chapter 1 – Alerts",
          q: "JavaScript mein alert box kaise likhte hain?",
          opts: [
            'ALERT("Hello");',
            'alert("Hello");',
            'Alert("Hello");',
            'window.Alert("Hello");',
          ],
          ans: 1,
          exp: "alert lowercase mein hona chahiye. Capital hoga toh script stop ho jaye gi.",
        },
        // Ch 2
        {
          ch: "Chapter 2 – Variables for Strings",
          q: "String variable declare karne ka sahi tarika konsa hai?",
          opts: [
            'var name == "Mark";',
            'var "name" = "Mark";',
            'var name = "Mark";',
            'Name = "Mark";',
          ],
          ans: 2,
          exp: "var keyword se variable declare karte hain, = se value assign karte hain.",
        },
        // Ch 3
        {
          ch: "Chapter 3 – Variables for Numbers",
          q: "Number variable mein number ko kaise likha jata hai?",
          opts: [
            'var age = "25";',
            "var age = (25);",
            "var age = 25;",
            "var age = [25];",
          ],
          ans: 2,
          exp: "Numbers ko quotes ke bina likha jata hai, warna wo string ban jati hai.",
        },
        // Ch 4
        {
          ch: "Chapter 4 – Variable Names",
          q: "In mein se konsa variable name ILLEGAL hai?",
          opts: ["myVar1", "_userName", "1stName", "camelCase"],
          ans: 2,
          exp: "Variable name number se shuru nahi ho sakta. 1stName illegal hai.",
        },
        // Ch 5
        {
          ch: "Chapter 5 – Math: Familiar Operators",
          q: "% operator kya karta hai?",
          opts: [
            "Division result deta hai",
            "Remainder deta hai",
            "Percentage calculate karta hai",
            "Power deta hai",
          ],
          ans: 1,
          exp: "% modulus operator hai. 10 % 3 = 1 (remainder).",
        },
        // Ch 6
        {
          ch: "Chapter 6 – Unfamiliar Operators",
          q: "var num=5; var x = num++; — x ki value kya hogi?",
          opts: ["6", "5", "4", "Undefined"],
          ans: 1,
          exp: "Post-increment mein pehle original value assign hoti hai (5), phir num badhta hai (6).",
        },
        // Ch 6b
        {
          ch: "Chapter 6 – Unfamiliar Operators",
          q: "var num=3; var x = ++num; — num aur x dono ki value kya hogi?",
          opts: ["num=3, x=4", "num=4, x=4", "num=4, x=3", "num=3, x=3"],
          ans: 1,
          exp: "Pre-increment mein pehle increment hota hai, phir assign. Dono 4 ban jate hain.",
        },
        // Ch 7
        {
          ch: "Chapter 7 – Math: Eliminating Ambiguity",
          q: "var x = 1 + 3 * 4; — x ki value kya hogi?",
          opts: ["16", "13", "7", "12"],
          ans: 1,
          exp: "Multiplication pehle hoti hai (3*4=12), phir addition (1+12=13).",
        },
        // Ch 8
        {
          ch: "Chapter 8 – Concatenation",
          q: 'alert("2" + "2") kya display karega?',
          opts: ['"4"', '"22"', "4", "22"],
          ans: 1,
          exp: 'Dono numbers strings hain (quotes mein), toh concatenation hogi: "22".',
        },
        // Ch 9
        {
          ch: "Chapter 9 – Prompts",
          q: "Prompt se user ka response kaunsi type mein aata hai?",
          opts: ["Number", "Boolean", "String", "Undefined"],
          ans: 2,
          exp: "Prompt ka response hamesha string hota hai, chahe user number type kare.",
        },
        // Ch 9b
        {
          ch: "Chapter 9 – Prompts",
          q: "Agar user prompt pe Cancel press kare toh variable mein kya aata hai?",
          opts: ['""', '"cancel"', "null", "undefined"],
          ans: 2,
          exp: "Cancel press karne par variable ko null assign hota hai.",
        },
        // Ch 10
        {
          ch: "Chapter 10 – if Statements",
          q: "if statement mein comparison ke liye konsa operator use hota hai?",
          opts: ["=", "==", "===", "!=="],
          ans: 2,
          exp: "=== triple equal comparison ke liye hai. = sirf assignment ke liye hai.",
        },
        // Ch 11
        {
          ch: "Chapter 11 – Comparison Operators",
          q: '"Rose" === "rose" — kya ye true hai?',
          opts: ["True", "False", "Depends", "Error"],
          ans: 1,
          exp: 'String comparison case-sensitive hai. "Rose" aur "rose" alag hain, toh false.',
        },
        // Ch 11b
        {
          ch: "Chapter 11 – Comparison Operators",
          q: "Konsa operator 'not equal to' ko represent karta hai?",
          opts: ["!=", "!==", "<>", "=/="],
          ans: 1,
          exp: "!== not equal to ka correct operator hai JavaScript mein.",
        },
        // Ch 12
        {
          ch: "Chapter 12 – if...else",
          q: "else if kab use kiya jata hai?",
          opts: [
            "Sirf ek condition test karni ho",
            "Multiple conditions test karni hon aur previous false ho",
            "Loop banana ho",
            "Function banana ho",
          ],
          ans: 1,
          exp: "else if tab use hota hai jab upar wali sab conditions false hon aur ek nayi condition test karni ho.",
        },
        // Ch 13
        {
          ch: "Chapter 13 – Testing Conditions",
          q: "if (age>65 || age<21) — || ka matlab kya hai?",
          opts: [
            "AND – dono true honni chahiye",
            "OR – koi ek true ho",
            "NOT – ulta ho",
            "XOR – sirf ek true ho",
          ],
          ans: 1,
          exp: "|| OR operator hai. Koi bhi ek condition true ho toh pura expression true hoga.",
        },
        // Ch 14
        {
          ch: "Chapter 14 – Nested if",
          q: "Nested if mein nesting level kaise pata chalta hai?",
          opts: [
            "Indentation se",
            "Curly brackets ki position se",
            "Comments se",
            "Variable names se",
          ],
          ans: 1,
          exp: "JavaScript curly brackets ki position se nesting level samajhta hai.",
        },
        // Ch 15
        {
          ch: "Chapter 15 – Arrays",
          q: "Array ka pehla element kaunse index par hota hai?",
          opts: ["1", "0", "-1", "None"],
          ans: 1,
          exp: "Arrays zero-indexed hote hain. Pehla element hamesha index 0 par hota hai.",
        },
        // Ch 15b
        {
          ch: "Chapter 15 – Arrays",
          q: 'var cities = ["Karachi","Lahore","Islamabad"]; cities[1] kya dega?',
          opts: ["Karachi", "Lahore", "Islamabad", "Undefined"],
          ans: 1,
          exp: 'Index 1 = dusra element = "Lahore".',
        },
        // Ch 16
        {
          ch: "Chapter 16 – Arrays: Add/Remove",
          q: "Array ke end mein element add karne ka method konsa hai?",
          opts: ["push()", "pop()", "shift()", "unshift()"],
          ans: 0,
          exp: "push() array ke end mein ek ya zyada elements add karta hai.",
        },
        // Ch 16b
        {
          ch: "Chapter 16 – Arrays: Add/Remove",
          q: "pets.pop() kya karta hai?",
          opts: [
            "Pehla element hatata hai",
            "Last element hatata hai",
            "Sab elements hatata hai",
            "Nayi value add karta hai",
          ],
          ans: 1,
          exp: "pop() array ka last element remove karta hai.",
        },
        // Ch 17
        {
          ch: "Chapter 17 – Arrays: splice/slice",
          q: "pets.shift() kya karta hai?",
          opts: [
            "Last element hatata hai",
            "Pehla element hatata hai",
            "Sab elements shuffle karta hai",
            "Kuch nahi",
          ],
          ans: 1,
          exp: "shift() array ka pehla (index 0) element remove karta hai.",
        },
        // Ch 17b
        {
          ch: "Chapter 17 – Arrays: splice/slice",
          q: "splice(2, 0, 'cat') mein 0 ka matlab kya hai?",
          opts: [
            "0 elements hatao",
            "Index 0 se shuru karo",
            "Koi element na hatao, sirf add karo",
            "0 elements add karo",
          ],
          ans: 2,
          exp: "splice ka dusra argument kitne elements remove karne hain. 0 matlab kuch nahi hatana.",
        },
        // Ch 18
        {
          ch: "Chapter 18 – for Loops",
          q: "for (var i=0; i<=4; i++) — ye loop kitni baar chalega?",
          opts: ["4", "5", "6", "3"],
          ans: 1,
          exp: "i = 0,1,2,3,4 — 5 baar. i<=4 matlab 0 se 4 tak inclusive.",
        },
        // Ch 19
        {
          ch: "Chapter 19 – for Loops: Flags & break",
          q: "Boolean values kya hote hain?",
          opts: [
            '"true" aur "false"',
            "true aur false (bina quotes)",
            "1 aur 0",
            "Yes aur No",
          ],
          ans: 1,
          exp: "Booleans true aur false hain, quotes ke bina. Ye special values hain strings nahi.",
        },
        // Ch 19b
        {
          ch: "Chapter 19 – for Loops: Flags & break",
          q: "break keyword loop mein kya karta hai?",
          opts: [
            "Loop skip karta hai ek baar",
            "Loop ko turant rok deta hai",
            "Loop fast karta hai",
            "Kuch nahi karta",
          ],
          ans: 1,
          exp: "break loop ko immediately rok deta hai, chahe condition abhi bhi true ho.",
        },
        // Ch 20
        {
          ch: "Chapter 20 – Nested for Loops",
          q: "Nested loop mein inner loop kab poora cycle chalta hai?",
          opts: [
            "Outer loop khatam hone par",
            "Outer loop ke har ek iteration par",
            "Sirf ek baar",
            "Kabhi nahi",
          ],
          ans: 1,
          exp: "Inner loop outer loop ke EVERY iteration par apna poora cycle complete karta hai.",
        },
        // Ch 21
        {
          ch: "Chapter 21 – Changing Case",
          q: '"HELLO".toLowerCase() ka result kya hoga?',
          opts: ['"Hello"', '"HELLO"', '"hello"', "Error"],
          ans: 2,
          exp: "toLowerCase() sab characters ko lowercase mein convert karta hai.",
        },
        // Ch 22
        {
          ch: "Chapter 22 – String Length & Slice",
          q: '"JavaScript".length ki value kya hogi?',
          opts: ["9", "10", "11", "8"],
          ans: 1,
          exp: '"JavaScript" mein 10 characters hain.',
        },
        // Ch 22b
        {
          ch: "Chapter 22 – String Length & Slice",
          q: '"Hello".slice(1,3) kya return karega?',
          opts: ['"He"', '"el"', '"ll"', '"ell"'],
          ans: 1,
          exp: 'Index 1 se shuru, index 3 se pehle tak = "el" (e=1, l=2).',
        },
        // Ch 23
        {
          ch: "Chapter 23 – Finding Segments",
          q: "indexOf() kya return karta hai agar segment na mile?",
          opts: ["0", "null", "-1", "false"],
          ans: 2,
          exp: "Agar segment nahi mila toh indexOf -1 return karta hai.",
        },
        // Ch 24
        {
          ch: "Chapter 24 – charAt",
          q: '"Saylani".charAt(0) kya return karega?',
          opts: ['"S"', '"a"', '"Saylani"', "0"],
          ans: 0,
          exp: 'charAt(0) index 0 ka character return karta hai = "S".',
        },
        // Ch 25
        {
          ch: "Chapter 25 – Replace",
          q: "Global replace ke liye syntax kaisa hota hai?",
          opts: [
            'text.replace("old","new","g")',
            'text.replace(/old/g,"new")',
            'text.replaceAll("old","new","g")',
            'text.replace("old","new",true)',
          ],
          ans: 1,
          exp: "Global replace mein text ko /slashes/ mein aur end mein g lagana padta hai.",
        },
        // Ch 26
        {
          ch: "Chapter 26 – Rounding Numbers",
          q: "Math.floor(4.9) ka result kya hoga?",
          opts: ["5", "4.9", "4", "Round off nahi hoga"],
          ans: 2,
          exp: "Math.floor hamesha neeche round karta hai. 4.9 → 4.",
        },
        // Ch 26b
        {
          ch: "Chapter 26 – Rounding Numbers",
          q: "Math.ceil(4.1) ka result kya hoga?",
          opts: ["4", "4.1", "5", "Error"],
          ans: 2,
          exp: "Math.ceil hamesha upar round karta hai. 4.1 → 5.",
        },
        // Ch 27
        {
          ch: "Chapter 27 – Random Numbers",
          q: "1 se 6 tak random number generate karne ka sahi code konsa hai?",
          opts: [
            "Math.random() * 6",
            "Math.round(Math.random() * 6)",
            "Math.floor(Math.random() * 6) + 1",
            "Math.ceil(Math.random() * 6) - 1",
          ],
          ans: 2,
          exp: "Math.floor((Math.random()*6)+1) sahi tarika hai 1-6 ke beech number lene ka.",
        },
        // Ch 28
        {
          ch: "Chapter 28 – parseInt & parseFloat",
          q: 'parseInt("1.9999") ka result kya hoga?',
          opts: ["2", "1.9999", "1", "NaN"],
          ans: 2,
          exp: "parseInt decimal lop off karta hai (round nahi karta). 1.9999 → 1.",
        },
        // Ch 29
        {
          ch: "Chapter 29 – Type Conversion",
          q: "Number ko string mein convert karne ka tarika konsa hai?",
          opts: [
            "num.parseString()",
            "num.toString()",
            "String(num) only",
            "num.toText()",
          ],
          ans: 1,
          exp: "num.toString() number ko string mein convert karta hai.",
        },
        // Ch 30
        {
          ch: "Chapter 30 – toFixed()",
          q: "(10.5967).toFixed(2) kya return karega?",
          opts: ['"10.60"', '"10.59"', "10.6", "10.5967"],
          ans: 0,
          exp: 'toFixed(2) 2 decimal places tak round karta hai aur string return karta hai: "10.60".',
        },
        // Ch 31
        {
          ch: "Chapter 31 – Date Object",
          q: "getDay() method mein Sunday ko kaunse number se represent kiya jata hai?",
          opts: ["1", "7", "0", "6"],
          ans: 2,
          exp: "getDay() mein 0=Sunday, 1=Monday ... 6=Saturday.",
        },
        // Ch 32
        {
          ch: "Chapter 32 – Extracting Date/Time",
          q: "getMonth() January ke liye kya return karta hai?",
          opts: ["1", "0", "12", "January"],
          ans: 1,
          exp: "getMonth() 0-based hai. January = 0, December = 11.",
        },
      ];

      // STATE
      let current = 0;
      let userAnswers = new Array(questions.length).fill(null);
      let timerInterval = null;
      let timeLeft = 20 * 60; // 20 minutes
      let userName = "Student";

      // LOGIN
      document.getElementById("roleStudent").onclick = function () {
        this.classList.add("active");
        document.getElementById("roleAdmin").classList.remove("active");
      };
      document.getElementById("roleAdmin").onclick = function () {
        this.classList.add("active");
        document.getElementById("roleStudent").classList.remove("active");
      };

      function doLogin() {
        const email = document.getElementById("emailInput").value.trim();
        const pass = document.getElementById("passInput").value.trim();
        if (!email || !pass) {
          document.getElementById("loginError").style.display = "block";
          return;
        }
        userName = email.split("@")[0];
        document.getElementById("loginError").style.display = "none";
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("quizPage").style.display = "block";
        document.getElementById("avatarBox").textContent =
          userName[0].toUpperCase();
        buildSidebar();
        renderQuestion();
        startTimer();
      }

      // TIMER
      function startTimer() {
        timerInterval = setInterval(() => {
          timeLeft--;
          const m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
          const s = String(timeLeft % 60).padStart(2, "0");
          const badge = document.getElementById("timerBadge");
          badge.textContent = `⏱ ${m}:${s}`;
          badge.className = "badge-timer" + (timeLeft < 60 ? " danger" : "");
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResult();
          }
        }, 1000);
      }

      // SIDEBAR
      function buildSidebar() {
        const nav = document.getElementById("sidebarNav");
        nav.innerHTML = questions
          .map(
            (q, i) => `
    <div class="nav-link ${i === current ? "active" : ""}" id="sideNav${i}" onclick="jumpTo(${i})">
      <span class="dot"></span> Q${i + 1}
    </div>`,
          )
          .join("");
      }
      function updateSidebar() {
        questions.forEach((_, i) => {
          const el = document.getElementById("sideNav" + i);
          if (!el) return;
          el.className = "nav-link";
          if (i === current) el.classList.add("active");
          else if (userAnswers[i] !== null) {
            el.classList.add(
              userAnswers[i] === questions[i].ans ? "answered" : "wrong",
            );
          }
        });
      }

      // RENDER QUESTION
      function renderQuestion() {
        const q = questions[current];
        document.getElementById("qMeta").textContent = q.ch;
        document.getElementById("questionText").textContent =
          `Q${current + 1}. ${q.q}`;

        const optContainer = document.getElementById("optionsContainer");
        optContainer.innerHTML = q.opts
          .map(
            (opt, i) => `
    <button class="option-btn ${getBtnClass(i)}" onclick="selectOption(${i})" id="opt${i}">
      <span class="opt-label">${String.fromCharCode(65 + i)}</span>
      ${opt}
    </button>`,
          )
          .join("");

        // Explanation
        const expBox = document.getElementById("explanationBox");
        if (userAnswers[current] !== null) {
          expBox.textContent = "💡 " + q.exp;
          expBox.classList.add("show");
        } else {
          expBox.textContent = "";
          expBox.classList.remove("show");
        }

        // Progress
        const pct = Math.round(((current + 1) / questions.length) * 100);
        document.getElementById("progressLabel").textContent =
          `Question ${current + 1} of ${questions.length}`;
        document.getElementById("progressPct").textContent = pct + "%";
        document.getElementById("progressBar").style.width = pct + "%";

        // Prev/Next
        document.getElementById("prevBtn").style.visibility =
          current === 0 ? "hidden" : "visible";
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.textContent =
          current === questions.length - 1 ? "Submit Quiz ✓" : "Next →";
        nextBtn.className =
          "btn-nav " +
          (current === questions.length - 1 ? "btn-submit" : "btn-next");

        updateSidebar();
      }

      function getBtnClass(i) {
        const ua = userAnswers[current];
        if (ua === null) return "";
        const correct = questions[current].ans;
        if (i === correct) return "correct";
        if (i === ua && ua !== correct) return "incorrect";
        return "";
      }

      // SELECT OPTION
      function selectOption(i) {
        if (userAnswers[current] !== null) return; // already answered
        userAnswers[current] = i;
        renderQuestion();
      }

      // NAVIGATION
      function nextQ() {
        if (current === questions.length - 1) {
          showResult();
          return;
        }
        current++;
        renderQuestion();
      }
      function prevQ() {
        if (current > 0) {
          current--;
          renderQuestion();
        }
      }
      function jumpTo(i) {
        current = i;
        renderQuestion();
      }

      // RESULT
      function showResult() {
        clearInterval(timerInterval);
        document.getElementById("quizPage").style.display = "none";

        const correct = userAnswers.filter(
          (a, i) => a === questions[i].ans,
        ).length;
        const wrong = userAnswers.filter(
          (a, i) => a !== null && a !== questions[i].ans,
        ).length;
        const skipped = userAnswers.filter((a) => a === null).length;
        const pct = Math.round((correct / questions.length) * 100);

        document.getElementById("statCorrect").textContent = correct;
        document.getElementById("statWrong").textContent = wrong;
        document.getElementById("statSkipped").textContent = skipped;
        document.getElementById("resultPct").textContent = pct + "%";

        const pass = pct >= 50;
        document.getElementById("resultCircle").className =
          "result-circle " + (pass ? "pass" : "fail");
        document.getElementById("resultGrade").textContent =
          pct >= 80
            ? "Excellent"
            : pct >= 60
              ? "Good"
              : pct >= 50
                ? "Pass"
                : "Fail";
        document.getElementById("resultMsg").textContent = pass
          ? `Mubarak! Aapne ${correct}/${questions.length} sawaal sahi kiye. 🎉`
          : `Aapne ${correct}/${questions.length} sahi kiye. Aur practice karo! 📖`;

        const rp = document.getElementById("resultPage");
        rp.style.display = "flex";
        rp.style.flexDirection = "column";
      }

      function retryQuiz() {
        current = 0;
        userAnswers = new Array(questions.length).fill(null);
        timeLeft = 20 * 60;
        document.getElementById("resultPage").style.display = "none";
        document.getElementById("quizPage").style.display = "block";
        buildSidebar();
        renderQuestion();
        startTimer();
      }
 