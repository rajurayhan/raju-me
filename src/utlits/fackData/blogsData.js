import blog_1 from "../../assets/images/blog/beyond-code.jpg";
import blog_2 from "../../assets/images/blog/yelp.jpg";
import blog_3 from "../../assets/images/blog/chrome.jpg";

import blog_1_og from "../../assets/images/blog/beyond-code-og.jpg";
import blog_2_og from "../../assets/images/blog/yelp-og.jpg";
import blog_3_og from "../../assets/images/blog/chrome-og.jpg";

export const blodData = [
    {
        id: 1,
        title: "Beyond Code: Getting Industry Ready",
        slug: "beyond-code-getting-industry-ready",
        date: "March 10, 2025",
        src: blog_1,
        src_og: blog_1_og,
        descripation: "Learn how fresh graduates can bridge the gap between academic knowledge and real-world software development with practical insights and habits.",
        detail: `
### Beyond Code: Getting Industry Ready

As a fresh graduate, stepping into the professional world can feel like a leap. This post is designed to guide you through that transition — moving beyond theoretical knowledge into **real-world readiness**.

#### ✅ What You’ll Learn
- How to **build real projects** that reflect your understanding of code structure and usability.
- Why **version control systems like Git** are must-have tools.
- The importance of **soft skills**: communication, teamwork, and problem-solving.
- How to **follow industry practices**, such as Agile, SCRUM, and writing clean, maintainable code.
- Resources and tips for **continuous learning** and staying updated.

#### 🎓 Who’s It For?
Fresh grads, junior devs, and even CS students aiming to land their first job confidently.

This is more than just a career guide — it’s a practical roadmap to becoming a developer your future team will love working with.
        `
    },
    {
        id: 2,
        title: "How We Automated Lead Conversion Using AI + Slack + ClickUp",
        slug: "automated-lead-conversion-ai-slack-clickup",
        date: "January 3, 2025",
        src: blog_2,
        src_og: blog_2_og,
        descripation: "A behind-the-scenes look at building a tool that receives Yelp leads, processes them with OpenAI, and notifies teams in Slack with next steps.",
        detail: `
### How We Automated Lead Conversion Using AI + Slack + ClickUp

In this post, I break down the automation system we built to improve response time and **boost lead conversions** from Yelp.

#### 🧠 Core Components
- **Webhook Receiver**: Captures Yelp form submissions in real-time.
- **OpenAI Integration**: Uses GPT to analyze queries and generate smart replies.
- **Slack Alerts**: Instantly sends a summary and action plan to the sales team in a Slack channel.
- **ClickUp Sync**: Creates a new task with all relevant info and auto-assigns it.

#### 💡 Why It Matters
Manual lead processing was time-consuming and inconsistent. This automation ensures every lead gets a personalized, prompt, and professional follow-up.

#### 🔧 Tech Stack
- Node.js / Laravel backend
- OpenAI API
- Slack API
- ClickUp API
- WhatConverts for lead tracking

This setup not only increased efficiency but **elevated our customer experience** from day one.
        `
    },
    {
        id: 3,
        title: "Building a Chrome Extension that Talks to Any Website",
        slug: "chrome-extension-talks-to-any-website",
        date: "August 28, 2024",
        src: blog_3,
        src_og: blog_3_og,
        descripation: "Here’s how I built a Chrome extension that lets users ask an AI assistant to scan and analyze any visited page, including technical challenges I solved.",
        detail: `
### Building a Chrome Extension that Talks to Any Website

Have you ever wanted to just ask a website, “What does this page mean?” or “What should I do here?” That’s the challenge I tackled by building a **Chrome extension powered by AI**.

#### 🔍 What It Does
- Adds a floating icon to every page you visit.
- Lets users ask questions — “What’s the contact info?” or “Summarize this article.”
- Sends the DOM to an AI API that parses, analyzes, and replies in real-time.
- Now includes **time-tracking features** for QA teams!

#### 🛠 Key Features
- JavaScript content scripts for DOM access
- API integration to Laravel/OpenAI backend
- Context-aware chat based on website structure
- Secure local storage for usage tracking

#### 🚀 The Real-World Benefit
QA teams, content creators, and researchers can now **interact with any website intelligently**, saving time and enhancing productivity.

This was a powerful mix of browser tech, AI, and UX thinking — and the possibilities are just beginning.
        `
    }
];
