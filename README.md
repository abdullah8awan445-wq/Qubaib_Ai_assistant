
# **Qubaib AI** 🤖📖  
*A Quran-centric, Hadith-based AI Assistant for Authentic Islamic Guidance*  

**Qubaib AI** is an AI-powered Islamic assistant designed to provide **reliable, Quran- and Sunnah-based answers** while adhering to **Ahlus Sunnah wal-Jama'ah** principles. It avoids innovation (Bid'ah) and focuses on authentic sources, acting as a digital companion for learning, worship, and daily Islamic life.  

---

## **Core Principles** 🕌  
✅ **Quran & Sunnah First** – Answers are rooted in the Quran, authentic Hadith (Sahih Bukhari, Muslim, etc.), and interpretations from trusted scholars.  
✅ **Anti-Bid'ah** – Explicitly rejects unverified practices or fringe opinions.  
✅ **Fiqh-Aware** – Clarifies differing scholarly views (Salafi/Hanbali-leaning by default but configurable).  
✅ **Safe for All Ages** – Filters out inappropriate or extremist content.  

---

## **Features** ✨  

### **1. Quranic Toolkit**  
- **Verse Search**: Retrieve Ayat by keyword, Surah, or Juz (with Tajweed hints).  
- **Tafsir Integration**: Explanations from Ibn Kathir, Tafsir As-Sa'di, etc.  
- **Thematic Studies**: e.g., "Show verses about patience."  

### **2. Hadith Engine**  
- **Search by Topic**: e.g., "Hadith about backbiting."  
- **Grading Check**: Auto-tags Hadith as Sahih, Hasan, or Da'if (using Albani’s classifications).  
- **Contradiction Resolver**: Flags weak/fabricated narrations.  

### **3. Worship Support**  
- **Prayer Times**: Location-based with Qibla direction.  
- **Dua/Dhikr Generator**: Context-aware (e.g., "Give me a dua for anxiety").  
- **Salah Corrector**: Alerts users to common prayer mistakes.  

### **4. Fatwa & Fiqh**  
- **Halal/Haram Decisions**: With daleel (evidence).  
- **Everyday Rulings**: e.g., "Is crypto halal?" (with balanced scholarly views).  

### **5. User Safety**  
- **Misinfo Shield**: Warns against unsourced claims or extremist rhetoric.  
- **Child Mode**: Simplified answers for young users.  

---

## **Tech Stack** ⚙️  
- **Backend**: Python (FastAPI) + LangChain for structured Islamic QA.  
- **NLP Model**: Fine-tuned **Llama 3** or **Mistral** with Islamic datasets (Quran/Hadith embeddings).  
- **Knowledge Base**:  
  - Quran API (Quran.com/aladhan)  
  - Hadith collections (Sunnah.com, Dorar.net)  
  - Fiqh databases (IslamQA.info, Fatwa portals).  
- **Frontend**: Telegram Bot (Python-telegram-bot) + Web Demo (Gradio).  

---

## **Installation** 🛠️  
```sh
git clone https://github.com/yourusername/qubaib-ai.git  
cd qubaib-ai  
pip install -r requirements.txt  # Includes torch, transformers, fastapi  
python main.py  # Launches local server or bot  
```  

**Configure**: Add API keys (e.g., Telegram bot token) in `.env`.  

---

## **Roadmap** 🗺️  
- [x] Phase 1: Quran/Hadith CLI Tool  
- [ ] Phase 2: Telegram Bot Deployment  
- [ ] Phase 3: Mobile App (React Native + Tauri)  
- [ ] Phase 4: Voice Assistant (Whisper + Arabic STT).  

---

## **Why "Qubaib"?**  
Named after **Masjid Quba**, the first mosque in Islam, symbolizing purity and authenticity in knowledge.  

---

## **License** 📜  
**MIT License** (Open-source, but *not* for commercial use in misleading Islamic apps).  

**Disclaimer**: AI is a tool, not a scholar. Always consult real Ulama for critical matters.  
