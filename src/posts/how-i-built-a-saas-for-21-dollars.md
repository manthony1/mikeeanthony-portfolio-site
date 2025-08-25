# 🚀 How I Built a SaaS in 3 Days for $21.75 — And Turned It Into Two Products

Most people think building a SaaS means months of coding, thousands of dollars, and a full dev team.  
I used to think that too.

But here’s the thing: with the right tools, you can go from idea → live product in a single weekend — for less than the cost of dinner 🍜.

I know, because I did it.

My MVP cost me exactly **$21.75** to build — and that one build has now turned into **two productized offers**:

- A live, subscription-based SaaS app  
- A teaching product that walks others through how to do the same

In this post, I’ll break down what I built, what I used, what worked (and what didn’t), and how you can follow the same playbook 💡.

---

## 🧠 Step 1: The Idea

**The goal:** Prove I could build and launch a SaaS fast.  
No weeks of coding. No expensive contractors. Just an MVP I could test with real users.

**The idea:**  
**YouTube → LinkedIn Posts**  
Paste a YouTube URL → app generates 3 ready-to-post LinkedIn updates.  
Simple, clear, and useful — especially for content creators 📹✍️.

---

## 🛠 Step 2: Tools I Used

Here’s the exact stack I used from idea → MVP:

- **[Lovable.dev](https://lovable.dev)** → AI UI builder (landing page, form, dashboard)
- **n8n** → Workflow automation and API handling
- **Supabase** → Auth + database
- **Stripe** → Billing and subscriptions
- **GitHub** → Version control
- **Netlify** → Hosting + auto-deploy

Each tool played a key role — but **Lovable.dev + n8n** were the real speed multipliers ⚡.

---

## 🏗 Step 3: Building the MVP

I kept it lean using a sprint-style roadmap:

- **Landing Page** → Built in Lovable. One input field. Clean, mobile-first.  
- **Webhook Setup** → Lovable → n8n connection  
- **n8n Workflow** → Receives input, calls OpenAI, returns post drafts  
- **Output UI** → Lovable renders results in styled cards (copy buttons + char counts)  
- **Pricing Tiers** → Free, Standard, Pro. Integrated Stripe.  
- **Auth + DB** → Supabase handles signups, logins, usage limits  

**By Sprint 7: Polish + Deploy**, I had a fully working MVP — live in 3 days.

---

## 💸 Step 4: Cost Breakdown

Here’s the full cost:

- **Lovable credits:** 87 credits @ $0.25 → **$21.75**  
- **Everything else:** Free tiers (Supabase, Netlify, GitHub, local n8n)  
- **Time:** 3 days, ~17 prompt rounds in Lovable  

Compare that to hiring a developer (easily $5K–$10K), and the ROI becomes pretty obvious 🔥.

---

## 🧩 Step 5: Two Products from One Build

This is where things got interesting...

### 1. The SaaS App

The **YouTube → LinkedIn Posts** app is now live.

- Free tier: 2 runs/month  
- Paid tiers: $5/mo and $15/mo  
- Fully automated. Pure recurring revenue 🔁💰

### 2. The “How To” Product

Turns out, the *process* was just as valuable as the app itself.  
Solopreneurs kept asking:

> "How can I build something like this without coding full-time?"

So I packaged the prompts, steps, and sprints into a teaching product:  
👉 **[Launch Your First SaaS in Just 1 Hour](https://gumroad.com/)** (available on Gumroad now)

Now I’ve got **two products**:

- A subscription SaaS  
- A digital info product  

All from a single weekend build 🎯

---

## 🧠 Step 6: Lessons Learned

Some takeaways if you’re thinking about building your own:

- **Structure > Vibes** — Breaking things into clear sprints made the whole thing smoother  
- **Test like a user, not just a dev** — I even built admin + impersonation features to QA properly  
- **Plan pricing tiers early** — Saves backtracking later  
- **Database design matters** — Next time I’ll set up Supabase row-level security and edge functions *before* building UI  
- **n8n is a cheat code** — Once you grasp "Input → Action → Output", the use cases are endless 🔄

---

## 🤔 Why This Matters

If you're a solo builder or small business owner, SaaS might seem out of reach:  
Too technical. Too expensive. Too slow.

But that’s not true anymore.

With the modern low-code stack, **anyone can build a real product**.  
What used to take a team can now be done with:

- ~$25  
- A weekend  
- And a willingness to learn 🚀

You don’t need to be a dev. You need a roadmap.

---

## ✅ Ready to Try It?

I built my MVP for $21.75, and it turned into two products.  
**If I can do it, you can too.**

👉 [Check out *Launch Your First SaaS in Just 1 Hour* on Gumroad](https://gumroadmike82.gumroad.com/l/ymkypd/)  
And imagine sending your first live SaaS link tonight.
