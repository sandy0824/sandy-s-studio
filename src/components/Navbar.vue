<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  
  const brandName = ref("Sandy's Studio.")
  const navLinks = ref([
    { name: '作品集', path: '/', type: 'internal' },
    { name: '關於我', path: '/about', type: 'internal' },
    // ✅ 確保 path 指向 public 資料夾下的檔名
    { name: '學習成績', path: `${import.meta.env.BASE_URL}score.pdf`, type: 'external' }
  ])

  
  const isScrolled = ref(false)
  const isMenuOpen = ref(false) // 新增：控制手機版選單開關
  
  // 切換選單
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  
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
  
        <ul class="nav-menu" :class="{ 'nav-menu-open': isMenuOpen }">
          <li v-for="link in navLinks" :key="link.name">
            <RouterLink 
      v-if="link.type === 'internal'"
      :to="link.path" 
      class="nav-item" 
      @click="isMenuOpen = false"
    >
      {{ link.name }}
      <span class="dot"></span>
    </RouterLink>

    <a 
      v-else
      :href="link.path" 
      target="_blank" 
      class="nav-item" 
      @click="isMenuOpen = false"
    >
      {{ link.name }}
      <span class="dot"></span>
    </a>
          </li>
        </ul>
  
        <div class="nav-actions">
          <button class="menu-toggle" @click="toggleMenu">
            <span class="hamburger" :class="{ 'active': isMenuOpen }"></span>
          </button>
          
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
    height:50px;
    width: 90%;
    max-width: 700px;
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
    background: #3b3a69; /* 使用 var(--primary-dark) */
    opacity: 0.5;
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
    font-size: 1.2rem;
    letter-spacing: 2px;
    color: #3b3a69; 
    opacity: 0.7;
    background: linear-gradient(90deg, #3b3a69, #ffb8c6, #3b3a69);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 5s linear infinite;
  }

  @keyframes shine {
    to { background-position: 200% center; }
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
    color: #B0B0B0; /* var(--gray-700) */
    font-size: 1.2rem;
    font-weight: bold;
    position: relative;
    padding: 5px 0;
    transition: color 0.3s ease;
  }
  
  .nav-item:hover {
  color: #3b3a69;      /* 滑鼠移上去時稍微變深提醒 */
  opacity: 0.7;
}
  .nav-item.router-link-active {
    color: #3b3a69; 
    opacity: 0.7;  /* 增加一點透明度讓它看起來更輕盈 */
}
  
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
  
  .nav-item:hover .dot {
  transform: translateX(-50%) scale(1);
  opacity: 0.8;        /* Hover 時點點較亮 */
}
  .router-link-active .dot {
  transform: translateX(-50%) scale(1);
  background: #3b3a69; /* 讓點點顏色跟隨品牌標題色 */
  opacity: 0.5;        /* 關鍵：點點也變淺 */
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
  
  @media (max-width: 768px) {
  .menu-toggle { display: block; }

  .nav-menu {
    display: flex; /* ✅ 確保它是 flex，不要是 none */
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    width: 90%;
    background: rgba(255, 255, 255, 0.98); /* 稍微調高不透明度，手機才看得清楚 */
    backdrop-filter: blur(15px);
    flex-direction: column;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    
    /* ✅ 預設隱藏狀態 */
    opacity: 0;
    pointer-events: none; 
    
    transition: all 0.3s ease;
    gap: 15px;
    margin: 0; /* 確保沒有多餘邊距 */
  }

  /* ✅ 當選單打開時，顯示出來 */
  .nav-menu.nav-menu-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }
}

  /* --- 手機版漢堡按鈕樣式 --- */
.menu-toggle {
  display: none; /* 預設隱藏 */
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
}

.hamburger {
  display: block;
  width: 20px;
  height: 2px;
  background: #061E42;
  position: relative;
  transition: all 0.3s;
}

.hamburger::before, .hamburger::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background: #061E42;
  left: 0;
  transition: all 0.3s;
}

.hamburger::before { top: -6px; }
.hamburger::after { bottom: -6px; }

/* 漢堡按鈕變叉叉 */
.hamburger.active { background: transparent; }
.hamburger.active::before { transform: rotate(45deg); top: 0; }
.hamburger.active::after { transform: rotate(-45deg); bottom: 0; }

/* --- 手機版適配邏輯 --- */
@media (max-width: 768px) {
  .menu-toggle { display: block; } /* 顯示按鈕 */

  .nav-menu {
    position: absolute;
    top: 70px; /* 膠囊下方 */
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    width: 90%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(15px);
    flex-direction: column;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    gap: 15px;
  }

  /* 選單打開時的樣式 */
  .nav-menu-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }

  .nav-item {
    font-size: 1.1rem;
    display: block;
    width: 100%;
    text-align: center;
  }
}
  </style>