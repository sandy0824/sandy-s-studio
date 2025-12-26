<script setup>
    import { onMounted, ref } from 'vue'
    
    const isLoaded = ref(false)
    
    onMounted(() => {
      // 模擬載入後的優雅進場
      setTimeout(() => {
        isLoaded.value = true
      }, 100)
    })
    </script>
    
    <template>
      <div class="wzt-wrapper" :class="{ 'is-visible': isLoaded }">
        <div class="bg-text">ARTWORK</div>
    
        <nav class="top-nav">
          <div class="logo">PORTFOLIO.</div>
          <div class="menu-icon"><span></span></div>
        </nav>
    
        <main class="hero-section">
          <div class="hero-content">
            <div class="side-info">
              <p class="year">2025 EDITION</p>
              <p class="role">FRONTEND / DESIGN</p>
            </div>
    
            <h1 class="main-title">
              <span class="line">DIGITAL</span>
              <span class="line text-outline">EXPERIENCE</span>
              <span class="line">CREATOR</span>
            </h1>
    
            <div class="image-container">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Hero" />
              <div class="image-overlay"></div>
            </div>
          </div>
    
          <div class="scroll-indicator">
            <div class="line"></div>
            <span>SCROLL</span>
          </div>
        </main>
      </div>
    </template>
    
    <style scoped>
    /* 引入極簡且強力的字體 */
    @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Inter:wght@300;900&display=swap');
    
    .wzt-wrapper {
      background-color: #0f0f0f; /* 極深灰黑色背景 */
      color: #ffffff;
      min-height: 100vh;
      font-family: 'Inter', sans-serif;
      overflow: hidden;
      position: relative;
    }
    
    /* 背景裝飾大字 */
    .bg-text {
      position: absolute;
      font-size: 20vw;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.03);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
      pointer-events: none;
      z-index: 0;
    }
    
    .top-nav {
      display: flex;
      justify-content: space-between;
      padding: 40px 60px;
      position: relative;
      z-index: 10;
    }
    
    .logo {
      font-family: 'Syncopate', sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
    }
    
    .hero-section {
      height: calc(100vh - 100px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10%;
    }
    
    .hero-content {
      position: relative;
      width: 100%;
    }
    
    .side-info {
      position: absolute;
      left: -80px;
      top: 50%;
      transform: rotate(-90deg);
      font-size: 10px;
      letter-spacing: 4px;
      color: #666;
    }
    
    /* 標題設計：WZT 經典的層疊感 */
    .main-title {
      font-size: 8vw;
      font-weight: 900;
      line-height: 0.9;
      letter-spacing: -2px;
      margin: 0;
      position: relative;
      z-index: 5;
      text-transform: uppercase;
    }
    
    .line {
      display: block;
      opacity: 0;
      transform: translateY(50px);
      transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
    }
    
    .is-visible .line {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* 空心字效果 */
    .text-outline {
      -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
      color: transparent;
    }
    
    /* 拱門圖片 */
    .image-container {
      position: absolute;
      right: 0;
      top: -10%;
      width: 30vw;
      height: 45vw;
      border-radius: 500px 500px 0 0; /* 經典拱門造型 */
      overflow: hidden;
      z-index: 2;
      transform: scale(0.8) rotate(5deg);
      opacity: 0;
      transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
      transition-delay: 0.4s;
    }
    
    .is-visible .image-container {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
    
    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: saturate(0.5) contrast(1.2);
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      font-size: 10px;
      letter-spacing: 2px;
      color: #666;
    }
    
    .scroll-indicator .line {
      width: 1px;
      height: 60px;
      background: linear-gradient(to bottom, #fff, transparent);
      animation: scrollAnim 2s infinite;
    }
    
    @keyframes scrollAnim {
      0% { transform: scaleY(0); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
      51% { transform: scaleY(1); transform-origin: bottom; }
      100% { transform: scaleY(0); transform-origin: bottom; }
    }
    </style>