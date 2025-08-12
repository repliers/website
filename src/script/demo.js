const labels = {
  RESTAURANTS: "RESTAURANTS",
  INFLUENCERS: "INFLUENCERS",
  HEALTH_PROFESSIONALS: "HEALTH_PROFESSIONALS",
  CLOTHING_STORES: "CLOTHING_STORES",
};

const demoData = {
  [labels.RESTAURANTS]: {
    name: "Restaurants",
    icon: "fa fa-bowl-food",
    description:
      "Answer the query about the items, pricing and availability in your restaurant. You will have a 24/7 customer care executive ready to answer all your customers",
    options: [
      {
        query: "Ask for items",
        icon: "fa fa-utensils",
        userImage: "assets/jane-bourne.png",
        messages: [
          {
            us: false,
            text: "Hi, are there non-vegetarian items?",
          },
          {
            us: true,
            text: "Yes we do have non-vegetarian items.",
          },
          {
            us: false,
            text: "What are the chicken items? What are its prices?",
          },
          {
            us: true,
            text: "We have Chicken 65 (₹240), Chicken 65 Full (₹900), Chicken 65 Boneless (₹270).",
          },
        ],
      },
      {
        query: "Event quotas",
        icon: "fa fa-calendar-check",
        userImage: "assets/john-smith.png",
        messages: [
          {
            us: false,
            text: "Do you take bulk orders for events?",
          },
          {
            us: true,
            text: "Yes, we do provide catering services for events.",
          },
          {
            us: false,
            text: "What’s the maximum capacity?",
          },
          {
            us: true,
            text: "We can serve up to 200 guests per event. Please let us know your menu preferences for a quote.",
          },
        ],
      },
      {
        query: "Open timings",
        icon: "fa fa-clock",
        userImage: "assets/emily-chen.png",
        messages: [
          {
            us: false,
            text: "What are your opening hours?",
          },
          {
            us: true,
            text: "We’re open from 11:00 AM to 11:00 PM, Monday to Sunday.",
          },
          {
            us: false,
            text: "Do you open on public holidays?",
          },
          {
            us: true,
            text: "Yes, we are open on most public holidays except for Diwali and Christmas Day.",
          },
        ],
      },
      {
        query: "General query",
        icon: "fa fa-question-circle",
        userImage: "assets/michael-lee.png",
        messages: [
          {
            us: false,
            text: "Do you have parking available?",
          },
          {
            us: true,
            text: "Yes, we have free parking for up to 15 vehicles.",
          },
          {
            us: false,
            text: "Do you offer home delivery?",
          },
          {
            us: true,
            text: "Yes, we deliver within a 5 km radius via our delivery partners.",
          },
        ],
      },
    ],
  },
  [labels.INFLUENCERS]: {
    name: "Influencers",
    icon: "fa fa-bullhorn",
    description:
      "Handle brand collaboration inquiries, event invitations, and fan engagement. Have an assistant respond to your DMs with professionalism and charm.",
    options: [
      {
        query: "Brand collaboration",
        icon: "fa fa-handshake",
        userImage: "assets/alex-king.png",
        messages: [
          {
            us: false,
            text: "Hi, we’d like to collaborate for our skincare brand.",
          },
          {
            us: true,
            text: "Thank you for reaching out! Could you share more about your campaign and budget?",
          },
          {
            us: false,
            text: "Our budget is ₹50,000 for two reels. Interested?",
          },
          {
            us: true,
            text: "Yes, I’m interested. Please send your brand kit and timelines to collabs@influencer.com.",
          },
        ],
      },
      {
        query: "Event invitation",
        icon: "fa fa-calendar-alt",
        userImage: "assets/lisa-ray.png",
        messages: [
          {
            us: false,
            text: "You are invited to the Grand Fashion Gala this Friday.",
          },
          {
            us: true,
            text: "That sounds exciting! Could you share the venue details and dress code?",
          },
          {
            us: false,
            text: "The event is at Grand Hyatt, 7 PM. Dress code is formal.",
          },
          {
            us: true,
            text: "Perfect. I’ll confirm my attendance shortly.",
          },
        ],
      },
      {
        query: "Fan message",
        icon: "fa fa-heart",
        userImage: "assets/fan-avatar.png",
        messages: [
          {
            us: false,
            text: "Hi! I love your content, you inspire me so much ❤️",
          },
          {
            us: true,
            text: "Thank you so much! Your support means the world to me 💕",
          },
        ],
      },
      {
        query: "General query",
        icon: "fa fa-question-circle",
        userImage: "assets/random-user.png",
        messages: [
          {
            us: false,
            text: "How do you edit your videos?",
          },
          {
            us: true,
            text: "I use Final Cut Pro and sometimes CapCut for quick edits.",
          },
        ],
      },
    ],
  },
  [labels.HEALTH_PROFESSIONALS]: {
    name: "Health Professionals",
    icon: "fa fa-user-md",
    description:
      "Respond to patient queries, appointment requests, and provide basic health-related guidance. Your virtual assistant ensures quick and helpful replies.",
    options: [
      {
        query: "Appointment booking",
        icon: "fa fa-calendar-check",
        userImage: "assets/patient1.png",
        messages: [
          {
            us: false,
            text: "Can I book an appointment for tomorrow?",
          },
          {
            us: true,
            text: "Yes, we have slots available at 10:30 AM and 4:00 PM. Which works better for you?",
          },
          {
            us: false,
            text: "4:00 PM works.",
          },
          {
            us: true,
            text: "Your appointment for 4:00 PM tomorrow has been booked. See you then!",
          },
        ],
      },
      {
        query: "Prescription renewal",
        icon: "fa fa-file-prescription",
        userImage: "assets/patient2.png",
        messages: [
          {
            us: false,
            text: "I need a renewal for my blood pressure medicine.",
          },
          {
            us: true,
            text: "Sure, could you share your last prescription or patient ID?",
          },
          {
            us: false,
            text: "Patient ID: 4587.",
          },
          {
            us: true,
            text: "Got it. Your prescription renewal will be ready for pickup tomorrow.",
          },
        ],
      },
      {
        query: "Health advice",
        icon: "fa fa-stethoscope",
        userImage: "assets/patient3.png",
        messages: [
          {
            us: false,
            text: "I have a mild fever. What should I do?",
          },
          {
            us: true,
            text: "Stay hydrated, take adequate rest, and monitor your temperature. If it persists beyond 2 days, please visit the clinic.",
          },
        ],
      },
      {
        query: "General query",
        icon: "fa fa-question-circle",
        userImage: "assets/patient4.png",
        messages: [
          {
            us: false,
            text: "Do you accept insurance?",
          },
          {
            us: true,
            text: "Yes, we accept most major health insurance providers. Please bring your card during the visit.",
          },
        ],
      },
    ],
  },
  [labels.CLOTHING_STORES]: {
    name: "Clothing Stores",
    icon: "fa fa-tshirt",
    description:
      "Handle customer questions about product availability, sizing, returns, and promotions. Your assistant will ensure every shopper gets a quick, helpful reply.",
    options: [
      {
        query: "Product availability",
        icon: "fa fa-box-open",
        userImage: "assets/shopper1.png",
        messages: [
          {
            us: false,
            text: "Do you have size M for the blue denim jacket?",
          },
          {
            us: true,
            text: "Yes, we have size M in stock for the blue denim jacket.",
          },
          {
            us: false,
            text: "Great, how much does it cost?",
          },
          {
            us: true,
            text: "It’s priced at ₹2,499 and currently on a 10% discount.",
          },
        ],
      },
      {
        query: "Return policy",
        icon: "fa fa-undo-alt",
        userImage: "assets/shopper2.png",
        messages: [
          {
            us: false,
            text: "Can I return a dress if it doesn’t fit?",
          },
          {
            us: true,
            text: "Yes, returns are accepted within 14 days of purchase with the original tag intact.",
          },
          {
            us: false,
            text: "Do I need the bill?",
          },
          {
            us: true,
            text: "Yes, please bring the purchase bill for processing the return.",
          },
        ],
      },
      {
        query: "Store timings",
        icon: "fa fa-clock",
        userImage: "assets/shopper3.png",
        messages: [
          {
            us: false,
            text: "What time do you open on weekends?",
          },
          {
            us: true,
            text: "We’re open from 10:00 AM to 9:00 PM on weekends.",
          },
          {
            us: false,
            text: "Are you open on Sundays too?",
          },
          {
            us: true,
            text: "Yes, we’re open every Sunday.",
          },
        ],
      },
      {
        query: "Offers and discounts",
        icon: "fa fa-tags",
        userImage: "assets/shopper4.png",
        messages: [
          {
            us: false,
            text: "Any special offers this week?",
          },
          {
            us: true,
            text: "Yes! Buy 2 get 1 free on all t-shirts and 20% off on jackets till Sunday.",
          },
          {
            us: false,
            text: "Nice! Is this available online too?",
          },
          {
            us: true,
            text: "Yes, the same offer is available on our website as well.",
          },
        ],
      },
    ],
  },
};

window.addEventListener("load", () => {
  const tabs = {
    [labels.RESTAURANTS]: document.querySelector(
      ".demo-card .demo-nav-link.restaurant"
    ),
    [labels.INFLUENCERS]: document.querySelector(
      ".demo-card .demo-nav-link.influencer"
    ),
    [labels.HEALTH_PROFESSIONALS]: document.querySelector(
      ".demo-card .demo-nav-link.health"
    ),
    [labels.CLOTHING_STORES]: document.querySelector(
      ".demo-card .demo-nav-link.clothing"
    ),
  };

  Object.entries(tabs).forEach(([label, elem]) => {
    elem.addEventListener("click", () => {
      switchLabel(tabs, label);
      updateContent(label);
    });
  });

  updateContent(labels.RESTAURANTS);
});

function createElement(tag, options = {}) {
  const el = document.createElement(tag);

  if (options.attributes) {
    for (const [key, value] of Object.entries(options.attributes)) {
      el.setAttribute(key, value);
    }
  }

  if (options.text) {
    el.textContent = options.text;
  }

  if (options.parent) {
    options.parent.appendChild(el);
  }

  return el;
}

const switchLabel = (tabs, label) => {
  const activeLabel = getActiveLabel(tabs);
  tabs[activeLabel].classList.remove("active");
  tabs[label].classList.add("active");
};

const getActiveLabel = (tabs) => {
  return Object.entries(tabs).find((elem) => {
    return elem[1].classList.contains("active");
  })[0];
};

function updateContent(label) {
  const data = demoData[label];
  if (!data) return;

  // Update title and description
  document.querySelector(
    ".left .title"
  ).innerHTML = `<i class="${data.icon}"></i>${data.name}`;
  document.querySelector(".left .description").textContent = data.description;

  // Update demo buttons
  const btnContainer = document.querySelector(".left .demo-buttons");
  btnContainer.innerHTML = "";
  data.options.forEach((opt, idx) => {
    const btn = createElement("button", {
      attributes: { class: `demo-button ${idx === 0 ? "active" : ""}` },
      text: opt.query,
      parent: btnContainer,
    });

    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".demo-button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      loadMessages(opt.messages, opt.userImage);
    });
  });

  // Load first option's messages
  loadMessages(data.options[0].messages, data.options[0].userImage);
}

function loadMessages(messages, userImage) {
  console.log(messages, userImage);
  const msgContainer = document.querySelector(".demo-card .messages");
  msgContainer.innerHTML = ""; // Clear previous messages

  messages.forEach((msg, i) => {
    setTimeout(() => {
      const msgEl = document.createElement("div");
      msgEl.classList.add("message");
      if (msg.us) {
        msgEl.classList.add("mine");
      }
      if (!msg.us) {
        const img = document.createElement("img");
        img.src = userImage || "assets/default-avatar.png";
        msgEl.appendChild(img);
      }
      const p = document.createElement("p");
      p.textContent = msg.text;
      msgEl.appendChild(p);

      msgEl.classList.add("fade-in");
      msgContainer.appendChild(msgEl);
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }, i * 300);
  });
}
