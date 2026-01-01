<template>
  <div class="home">
    <div class="bg-blur-dot"></div>
    <div class="bg-blur-dot dot-2"></div>
    
    <div class="content-box">
      <div class="loader-icon">
        <div class="circle"></div>
      </div>
      
      <h1 class="status-title">學習成績</h1>
      <p class="status-text">
        點擊下方按鈕即可下載我大學期間的歷年成績單，<br>
        透過數據了解我的學習歷程！
      </p>
      
      <a 
        href="/Sandy_Transcript.pdf" 
        download="Sandy_輔大資管歷年成績單.pdf" 
        class="download-btn"
      >
        下載成績單 (PDF)
      </a>

      <router-link to="/" class="back-link">回作品集看看</router-link>
    </div>
  </div>
</template>

/* 下載按鈕專屬樣式 */
.download-btn {
  display: inline-block;
  padding: 15px 40px;
  background: #ffb8c6; /* 使用粉色作為主色 */
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 20px rgba(255, 184, 198, 0.4);
  margin-bottom: 20px;
}

.download-btn:hover {
  background: #ff9fb2;
  transform: translateY(-5px) scale(1.05); /* 增加一點 Q 彈感 */
  box-shadow: 0 15px 30px rgba(255, 184, 198, 0.5);
}

/* 返回連結樣式 */
.back-link {
  display: block;
  color: #7d7ba5;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.7;
  transition: 0.3s;
}

.back-link:hover {
  opacity: 1;
  text-decoration: underline;
}