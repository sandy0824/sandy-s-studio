<template>
  <div class="home">
    <div class="bg-blur-dot"></div>
    <div class="bg-blur-dot dot-2"></div>
    
    <div class="about-container">
      <div class="intro-section">
        <div class="avatar-wrapper">
          <img src="/favicon.png" alt="Sandy" class="avatar-img" />
          <div class="avatar-ring"></div>
        </div>
        <h1 class="my-name">Sandy</h1>
        <p class="my-bio">
          輔大資管四年級，熱衷於探索全端開發與 UI/UX 設計。<br>
          從基礎網頁開發到前後端架構規劃，我享受將課堂所學轉化為實體專案的過程，<br>並持續挑戰新技術，不斷磨練解決問題的實戰能力。
        </p>
      </div>

      <div class="section-box">
  <h3 class="section-title">TECHNICAL SKILLS</h3>
  
  <div class="tech-bento-grid">
    <div class="bento-item lang-tech">
      <span class="bento-label">語言</span>
      <div class="bento-tags">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">C#</span>
      </div>
    </div>

    <div class="bento-item frontend-tech">
      <span class="bento-label">前端</span>
      <div class="bento-tags">
        <span class="tech-tag">Vue</span>
        <span class="tech-tag">React</span>
        <span class="tech-tag">HTML / CSS</span>
        <span class="tech-tag">JavaScript</span>
      </div>
    </div>

    <div class="bento-item backend-tech">
      <span class="bento-label">後端</span>
      <div class="bento-tags">
        <span class="tech-tag">FastAPI</span>
        <span class="tech-tag">ASP.NET Web Forms</span>
        <span class="tech-tag">PHP</span>
      </div>
    </div>

    <div class="bento-item db-tech">
      <span class="bento-label">資料庫</span>
      <div class="bento-tags">
        <span class="tech-tag">MySQL</span>
        <span class="tech-tag">Microsoft SQL Server</span>
      </div>
    </div>

    <div class="bento-item other-tech">
      <span class="bento-label">其他技能</span>
      <div class="bento-tags">
        <span class="tech-tag">Photoshop</span>
        <span class="tech-tag">Illustrator</span>
        <span class="tech-tag">Excel</span>
        <span class="tech-tag">Git / GitHub</span>
      </div>
    </div>
  </div>
</div>

<div class="section-box">
  <h3 class="section-title">MY JOURNEY</h3>
  <div class="timeline">
    
    <div class="timeline-item">
      <div class="time-dot"></div>
      <div class="timeline-content">
        <span class="time-year">2025</span>
        <h4>持續探索：技術邊界的擴展</h4>
        <p>
          步入大四，我並未停下腳步。透過修習 ASP.NET Web Forms 與各類 CMS（WordPress, Drupal）技術，我致力於填補知識版圖的每一塊空白。
          我深知技術領域永無止盡，即便目前仍有進步空間，但我享受那種「從不懂到掌握」的過程。我會持續精進，運用這些工具完成更多具備生命力的作品。
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="time-dot"></div>
      <div class="timeline-content">
        <span class="time-year">2024</span>
        <h4>實戰洗禮：大專題與產學的火花</h4>
        <p>
          大三這年，我挑戰了為期一年的畢業專題。與富邦人壽的產學合作是一場震撼教育，在與業師、教授無數次的燒腦會議中，我學會將抽象的業務痛點，親手轉化為具備技術可行性的實體功能。我們運用 Vue 與 FastAPI 實踐前後端分離，為了呈現最完美的系統，架構改了又改，甚至在技術瓶頸中反覆摸索。真的很感謝組員們從不放棄的熱血精神，讓我們在不斷的磨合與優化下，最終榮獲「專題發表佳作」的肯定！這份佳作不只是獎項，更是我們共同解決實務問題、圓滿完成大學最重要課題的勳章！
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="time-dot"></div>
      <div class="timeline-content">
        <span class="time-year">2023</span>
        <h4>思維蛻變：從寫程式到設計系統</h4>
        <p>
          大二下接觸 PHP 與 MySQL，第一次看到前後端成功串接時，那種震撼至今難忘！但真正的轉折是「系統分析與設計」課程，它讓我驚覺寫網頁不只是敲代碼，更是一場嚴謹的邏輯工程。從練習撰寫系統文件到學著站在使用者角度思考架構，這段思維磨練極大地提升了我的開發深度，讓我學會如何從全局設計出更完善的系統，真的受益良多！
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="time-dot"></div>
      <div class="timeline-content">
        <span class="time-year">2022</span>
        <h4>重拾初心：在大學校園重新出發</h4>
        <p>
          大一回到了熟悉的 Python 與 HTML 領域。儘管在準備學測期間有過短暫的斷層，重拾技術時也曾感到 Python 的深奧與挑戰，
          但我真的很享受看著網頁從零散混亂變得精緻美觀的過程。這一年，我紮實地磨練前端基礎，看著作品從靜態轉向豐富互動，不僅找回了開發的熱情，更為未來的全端之路打下最穩固的地基！
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="time-dot"></div>
      <div class="timeline-content">
        <span class="time-year">High School ↓</span>
        <h4>啟蒙階段：堅定的技術嚮往</h4>
        <p>
          高中受家裡影響決定讀資管。從高一 Python、C++ 到 RPG 製作，雖然是初次摸索，但在不斷嘗試中我發現了寫程式的樂趣，這也讓我確定，這裡就是我想發光發熱的領域！
        </p>
      </div>
    </div>

  </div>
</div>
    </div>
  </div>
</template>

<style scoped>
  .home {
    position: relative;
    min-height: 100vh;
    background: #fff5f7;
    padding: 160px 20px 80px; /* 增加頂部間距給 Navbar */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Noto Serif TC", serif;
  }
  
  .about-container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 40px;
  }
  
  /* 頭貼與自介 */
  .intro-section {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .avatar-wrapper {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 20px;
  /* ✅ 加入這兩行，確保容器內所有東西都置中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-img {
  width: 150px; /* ✅ 強制給予固定寬高 */
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(255, 184, 198, 0.3);
  /* ✅ 移除可能干擾的 margin */
  display: block; 
}

.avatar-ring {
  position: absolute;
  /* ✅ 使用 inset: -10px 會根據父層 wrapper 擴張 */
  inset: -10px;
  border: 2px dashed #ffb8c6;
  border-radius: 50%;
  animation: spin 20s linear infinite;
  /* ✅ 確保 ring 不會擋到點擊事件 */
  pointer-events: none; 
}
  
  .my-name {
    font-size: 2.5rem;
    color: #3b3a69;
    font-weight: 900;
    margin-bottom: 10px;
    background: linear-gradient(90deg, #3b3a69, #ffb8c6, #3b3a69);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 5s linear infinite;
  }

  @keyframes shine {
    to { background-position: 200% center; }
  }
  
  .my-bio {
    color: #7d7ba5;
    line-height: 1.6;
  }
  
  /* 區塊框框共同樣式 */
  .section-box {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(15px);
    padding: 40px;
    border-radius: 40px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 20px 40px rgba(255, 184, 198, 0.1);
    transition: all 0.4s ease;
  }

  .section-box:hover {
  /* ✅ 大框框輕微浮動 5 像素就好，避免晃動感太大 */
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.6); /* 稍微變亮一點 */
  box-shadow: 0 25px 50px rgba(255, 184, 198, 0.15);
  border-color: rgba(255, 255, 255, 0.9);
}
  
  .section-title {
    font-family: 'Syncopate', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 3px;
    color: #ffb8c6;
    margin-bottom: 25px;
    font-weight: 800;
  }
  
  /* 技術標籤 */
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  
  .tech-tag {
    background: white;
    padding: 8px 20px;
    border-radius: 50px;
    color: #7d7ba5;
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid #ffe4e9;
    transition: all 0.3s ease;
  }
  
  .tech-tag:hover {
  /* ✅ 背景變紫色 */
  background: #e2d1f9; 
  /* ✅ 文字顏色變深，增加對比 */
  color: #5e5a91; 
  /* ✅ 邊框顏色同步調整 */
  border-color: #d1bdf2;
  /* ✅ 輕微往上浮動感 */
  transform: translateY(-2px);
  /* ✅ 增加一點點紫色陰影，讓質感更精緻 */
  box-shadow: 0 5px 15px rgba(226, 209, 249, 0.4);
}
  
  /* 時間軸經歷 */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
  .timeline-item {
    display: flex;
    gap: 20px;
    position: relative;
  }
  
  .time-dot {
    width: 12px;
    height: 12px;
    background: #ffb8c6;
    border-radius: 50%;
    margin-top: 6px;
    flex-shrink: 0;
    box-shadow: 0 0 10px rgba(255, 184, 198, 0.5);
  }
  
  .timeline-content h4 {
    color: #3b3a69;
    margin: 5px 0;
    font-size: 1.1rem;
  }
  
  .timeline-content p {
  color: #7d7ba5;
  line-height: 1.8; /* 增加行高，閱讀長文更輕鬆 */
  font-size: 0.95rem;
  margin-top: 10px;
  text-align: justify; /* 左右對齊讓視覺更方正美觀 */
}

/* 當滑鼠滑過 timeline-item 時，讓點發光更明顯 */
.timeline-item:hover .time-dot {
  transform: scale(1.5);
  background: #ff8fa3;
  box-shadow: 0 0 15px rgba(255, 143, 163, 0.8);
  transition: all 0.3s ease;
}
  
.time-year {
  font-family: 'Patrick Hand', 'Syncopate', sans-serif;
  font-size: 0.85rem;
  color: #ffb8c6;
  font-weight: bold;
  padding: 2px 8px;
  position: relative;
  z-index: 1;
}

/* 手繪圓圈裝飾 */
.time-year::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 140%;
  border: 1.5px solid rgba(255, 184, 198, 0.6);
  border-radius: 45% 55% 50% 50% / 55% 45% 55% 45%; /* 不規則圓形 */
  z-index: -1;
  /* 讓圓圈看起來像手畫的，線條不均勻 */
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); 
}

  /* 便當盒佈局核心 */
  .tech-bento-grid {
  display: grid;
  /* ✅ 改為 3 欄佈局 */
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(110px, auto); /* 讓高度能隨內容增長 */
  gap: 15px;
}

.bento-item {
  background: white;
  border-radius: 25px;
  padding: 20px;
  border: 2px solid #ffe4e9;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.bento-item:hover {
  /* ✅ 向上浮動 8 像素 */
  transform: translateY(-8px); 
  /* ✅ 邊框變粉色 */
  border-color: #ffb8c6;
  /* ✅ 陰影變得更深、更廣，營造懸浮感 */
  box-shadow: 0 15px 35px rgba(255, 184, 198, 0.25);
  background: white; /* 確保背景實心不透明 */
}

.bento-item:hover .tech-tag:hover {
  background: #e2d1f9;
  color: #5e5a91;
}

/* --- 配置每張卡片的大小 --- */

/* 程式語言 - 1格 */
.lang-tech {
  grid-column: span 1;
}

/* 前端 - 2格 (放在第一排後面) */
.frontend-tech {
  grid-column: span 2;
  background: linear-gradient(145deg, #ffffff, #fff5f7);
}

/* 後端 - 2格 (放在第二排前面) */
.backend-tech {
  grid-column: span 2;
}

/* 資料庫 - 1格 (放在第二排後面) */
.db-tech {
  grid-column: span 1;
}

/* 其他技能 - 3格 (橫跨最後一整排) */
.other-tech {
  grid-column: span 3;
}

/* --- 內部裝飾 --- */
.bento-label {
  font-family: 'Syncopate', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #ffb8c6;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.bento-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: rgba(255, 184, 198, 0.1);
  padding: 5px 12px;
  border-radius: 50px;
  color: #7d7ba5;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 0.2s;
}

.bento-item:hover .tech-tag {
  background: white;
  border-color: #ffe4e9;
}

/* 手機版適配：全部變一欄直排 */
@media (max-width: 768px) {
  .tech-bento-grid {
    grid-template-columns: 1fr;
  }
  .lang-tech, .frontend-tech, .backend-tech, .db-tech, .other-tech {
    grid-column: span 1;
  }
}
  
  /* 針對背景動畫的旋轉 */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  

/* 定義進場動畫 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 套用到主容器，讓整頁進場更柔和 */
.about-container {
  animation: fadeInUp 1s ease-out forwards;
}


  </style>