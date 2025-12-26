<template>
  <div class="home">
    <div class="bg-blur-dot"></div>
    <div class="bg-blur-dot dot-2"></div>
    
    <div class="content-box">
      <div class="loader-icon">
        <div class="circle"></div>
      </div>
      
      <h1 class="status-title">頁面製作中</h1>
      <p class="status-text">感謝您的來訪，我們正在努力裝修這個區塊。<br>敬請期待更精彩的內容！</p>
      
      <router-link to="/" class="back-home">回作品集看看</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
  background: #fff5f7;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif TC", serif;
}

/* 兩個背景光暈讓層次感更好 */
.bg-blur-dot {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #ffd1dc 0%, transparent 70%);
  filter: blur(80px);
  top: -100px;
  right: -100px;
  opacity: 0.6;
}
.dot-2 {
  left: -150px;
  bottom: -150px;
  background: radial-gradient(circle, #e2d1f9 0%, transparent 70%);
}

.content-box {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  padding: 80px 40px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 30px 60px rgba(255, 184, 198, 0.2);
  text-align: center;
  max-width: 500px;
  width: 90%;
}

/* 動畫圖示樣式 */
.loader-icon {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
.circle {
  width: 50px;
  height: 50px;
  border: 4px solid var(--pink-light, #ffe4e9);
  border-top: 4px solid #ffb8c6;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.status-title {
  font-size: 2.2rem;
  font-weight: 900;
  color: #3b3a69;
  margin-bottom: 15px;
  letter-spacing: 2px;
}

.status-text {
  color: #7d7ba5;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 40px;
}

/* 返回按鈕樣式 */
.back-home {
  display: inline-block;
  padding: 12px 30px;
  background: white;
  color: #ffb8c6;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  transition: 0.3s;
  box-shadow: 0 10px 20px rgba(255, 184, 198, 0.2);
}

.back-home:hover {
  background: #ffb8c6;
  color: white;
  transform: translateY(-3px);
}
</style>