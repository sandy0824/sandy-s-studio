<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  
  const brandName = ref("Sandy's Studio.")
  const navLinks = ref([
    { name: '作品集', path: '/' },
    { name: '關於我', path: '/about' },
    { name: '成績', path: '/contact' }
  ])
  
  const isScrolled = ref(false)
  
  // 監聽滾動，讓導覽列在滾動時產生細微變化
  onMounted(() => {
    window.addEventListener('scroll', () => {
      isScrolled.value = window.scrollY > 50
    })
  })
  </script>
  
  <template>
    <nav class="navbar-wrapper" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="nav-capsule">
        <RouterLink to="/" class="brand">
          <div class="logo-dot"></div>
          <span class="brand-name">{{ brandName }}</span>
        </RouterLink>
  
        <ul class="nav-menu">
          <li v-for="link in navLinks" :key="link.name">
            <RouterLink :to="link.path" class="nav-item">
              {{ link.name }}
              <span class="dot"></span>
            </RouterLink>
          </li>
        </ul>
  
        <div class="nav-actions">
          <button class="hire-me">Go !</button>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  /* 引用你提供的變數與質感設定 */
  .navbar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    z-index: 9999;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* 滾動後的縮放效果 */
  .navbar-scrolled {
    padding: 15px 0;
  }
  
  .nav-capsule {
    /* 應用你提供的玻璃質感代碼 */
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
    border-radius: 9999px; /* 使用 var(--radius-full) */
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 8px 24px;
    width: 90%;
    max-width: 900px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .navbar-scrolled .nav-capsule {
    width: 80%;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.15);
  }
  
  /* --- Logo 樣式 --- */
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }
  
  .logo-dot {
    width: 12px;
    height: 12px;
    background: #061E42; /* 使用 var(--primary-dark) */
    border-radius: 50%;
    position: relative;
  }
  
  .logo-dot::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  .brand-name {
    font-family: 'Syncopate', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 2px;
    color: #061E42;
  }
  
  /* --- 選單樣式 --- */
  .nav-menu {
    display: flex;
    list-style: none;
    gap: 30px;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    text-decoration: none;
    color: #565C59; /* var(--gray-700) */
    font-size: 0.9rem;
    font-weight: 500;
    position: relative;
    padding: 5px 0;
    transition: color 0.3s ease;
  }
  
  .nav-item:hover {
    color: #061E42;
  }
  
  /* WZT 風格的小圓點指示器 */
  .dot {
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    width: 4px;
    height: 4px;
    background: #061E42;
    border-radius: 50%;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .nav-item:hover .dot,
  .router-link-active .dot {
    transform: translateX(-50%) scale(1);
  }
  
  /* --- 按鈕樣式 --- */
  .hire-me {
    background: #061E42;
    color: white;
    border: none;
    padding: 10px 24px;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .hire-me:hover {
    background: #2D466F;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(6, 30, 66, 0.2);
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(2.5); opacity: 0; }
  }
  
  /* 手機版適配 */
  @media (max-width: 768px) {
    .nav-menu { display: none; } /* 手機版通常會改用漢堡選單 */
    .nav-capsule { padding: 8px 10px 8px 18px; }
  }
  </style>