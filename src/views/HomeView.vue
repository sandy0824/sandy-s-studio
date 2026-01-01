<script setup>
  import { ref,onUnmounted } from 'vue'
  
  const projects = ref([
    { 
      id: 1, 
      title: '輔大古籍整理學程', 
      year: '2025',
      category: '團體', 
      tech: 'Drupal', 
      img: new URL('../assets/古籍整理學程.jpg', import.meta.url).href,
      images: [
        new URL('../assets/古籍整理學程1.jpg', import.meta.url).href,
        new URL('../assets/古籍整理學程2.jpg', import.meta.url).href,    
      ],
      description: `這是大四上「網站架設與建置實務」的課程專案。我們的任務是將「輔大中國古籍整理學程」的官方網站，使用 Drupal 內容管理系統進行全面的重構與視覺翻新。

【系統重構與 CMS 實作】
這是我第一次深入接觸 Drupal 系統。在開發過程中，我需要從零開始規劃內容類型（Content Types）、欄位設計與選單結構等等，並將原網站的大量資訊重新整合進新架構。

【介面美化與導覽優化】
除了後台邏輯，我們也針對前端介面進行了視覺美化，讓原本資訊密集的學術網站變得更加易讀，提升了整體的視覺一致性，也讓使用者能更快速地找到學程相關的教學資源。

【開發心得】
透過這次實作，我掌握了 Drupal 系統的核心概念，並學會如何根據特定需求設計出具備維護彈性的網站架構。`
},
    { 
      id: 2, 
      title: '海獺冰淇淋', 
      year: '2025',
      category: '團體', 
      tech: 'ASP.NET Web Forms', 
      img: new URL('../assets/海獺冰淇淋.jpg', import.meta.url).href,
      images: [
        new URL('../assets/海獺冰淇淋1.jpg', import.meta.url).href,
        new URL('../assets/海獺冰淇淋2.jpg', import.meta.url).href,
        new URL('../assets/海獺冰淇淋3.jpg', import.meta.url).href,
        new URL('../assets/海獺冰淇淋4.jpg', import.meta.url).href,
        new URL('../assets/海獺冰淇淋5.jpg', import.meta.url).href,        
      ],
      description: `本專案為「網頁程式設計」的期末團體作業。我們以「海獺冰淇淋」為主題，利用 ASP.NET Web Forms 搭配資料庫，從零開始建構出一套完整的電商購物系統。

      【前端購物與會員體驗】
      在前端部分，我們實現了直覺的商品瀏覽、購物車操作以及完整的訂單結帳流程。為了提升使用者黏著度，系統還整合了會員登入機制、消費點數回饋以及後台可控的限時折扣功能，模擬真實電商的行銷情境。

      【後端管理與權限控制】
      後端則是我投入最多心力的地方，我們打造了一個高效率的管理後台。管理者可以進行商品的全方位 CRUD 維護、即時追蹤庫存狀態並處理訂單。此外，我們也實作了基本的權限管理，確保後台行政資料的安全性。`
      },
    { 
      id: 3, 
      title: '智慧探險小邦手', 
      year: '2025',
      category: '團體', 
      tech: 'Vue / FastAPI / MS SQL', 
      img: new URL('../assets/智慧探險小邦手.jpg', import.meta.url).href,
      images: [
        new URL('../assets/智慧探險小邦手1.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手2.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手3.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手4.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手5.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手6.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手7.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手8.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手9.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手10.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手11.jpg', import.meta.url).href,
        new URL('../assets/智慧探險小邦手12.jpg', import.meta.url).href,    
      ],
      description: `本專案為資管系大三時，與「富邦人壽」合作開發的畢業專題。在團隊不懈努力下，最終榮獲「第四十二屆專題發表－佳作」的肯定。

【系統核心與 AI 技術】
專案旨在開發「業務員智慧銷售助手」，透過整合 AI 技術解決新手業務員在客情維護與行政流程的痛點。核心功能包含：結合 FastAPI 與 OpenAI API 的「AI 對話模擬訓練」、協助掌握客群特質的「客情資料分析」，以及即時整合市場資訊的「保險知識庫與自動爬蟲技術」。

【實戰開發與軟體工程】
我們共同主導了前後端系統串接與資料庫架構設計，完整經歷了從需求訪談、使用者故事（User Story）規劃、UI/UX 設計到最後環境佈署的「軟體開發生命週期（SDLC）」。

【專案心得與成長】
更重要的是，我們學習了如何將業師提出的業務痛點，轉化為具技術可行性的功能。在面對專案範圍擴張時，我們學會優化整合架構並提升系統穩定性，這份專題不僅磨練了我們解決技術問題的能力，更奠定了開發大型系統的實戰基礎與協作規範。`
    },
    { 
      id: 4, 
      title: 'Memonity',
      year: '2024',
      category: '團體', 
      tech: 'React / FastAPI / MySQL', 
      img: new URL('../assets/Memority.jpg', import.meta.url).href,
      images: [
        new URL('../assets/Memority1.jpg', import.meta.url).href,
        new URL('../assets/Memority2.jpg', import.meta.url).href,
        new URL('../assets/Memority3.jpg', import.meta.url).href,
        new URL('../assets/Memority4.jpg', import.meta.url).href,
        new URL('../assets/Memority5.jpg', import.meta.url).href,
        
      ],
      description: `這是我們大三「WEB 進階程式設計」課程的專案。我們想做一個讓喜歡看動漫或電影的人，可以輕鬆紀錄自己看過什麼，還能分享心得給別人的交流平台。

【第一次嘗試的技術挑戰】
這個專案對我們來說意義很大，因為這是我們第一次嘗試「前後端分離」的架構。我們從零開始學習怎麼用 React 寫前端畫面，並搭配 FastAPI 寫後端 API，最後把資料存進 MySQL 資料庫。雖然一開始連怎麼串接 API 都研究很久，但最後成功把整個流程跑通，讓我們對網站開發有了更紮實的認識。

【自動化抓取資料的功能】
我們在系統裡加入了一個很方便的功能：自動爬蟲。我們寫了 Python 爬蟲去抓「巴哈姆特動畫瘋」的資料，所以當使用者要新增動漫心得時，系統會自動填好封底圖和基本資訊，不用自己慢慢打，這在操作上省了不少時間。

【開發心得與總結】
除了功能開發，我們也練習在頁面加入一些音樂和視覺元素，想讓分享心得這件事變得更有質感。從這門課中，我們不只學會了 React 和 FastAPI 的用法，更重要的是學會了怎麼規劃系統架構。雖然專案還有很多可以改進的地方，但這次完整的開發經驗，讓我們對軟體開發這條路更有信心了。` 
    },
    { 
      id: 5, 
      title: 'WISHOP',
      year: '2024',
      category: '團體', 
      tech: 'HTML / PHP / MySQL', 
      img: new URL('../assets/Wishop.jpg', import.meta.url).href,
      images: [
        new URL('../assets/Wishop1.jpg', import.meta.url).href,
        new URL('../assets/Wishop2.jpg', import.meta.url).href,
        new URL('../assets/Wishop3.jpg', import.meta.url).href,
        new URL('../assets/Wishop4.jpg', import.meta.url).href,
        new URL('../assets/Wishop5.jpg', import.meta.url).href,
        new URL('../assets/Wishop6.jpg', import.meta.url).href,
        new URL('../assets/Wishop7.jpg', import.meta.url).href,

      ],
      description: `這是我們大二下「系統分析與設計」課程的作業，也是我們第一次挑戰從零開始規劃一個完整的購物平台。

【為什麼想做這個專案？】
我們發現很多喜歡買國外東西的人，常會遇到代購流程很亂、或是想買卻找不到人的問題。所以我們想出了一個「許願」結合「團購」的點子，讓買家可以發布想買的清單，而賣家能直接看到市場需求來對接，把原本複雜的代購變得更簡單、更直覺。

【我們的開發過程】
這是我們在做大三畢業專案前最重要的練習。從一開始的主題構思、畫流程圖，到最後用 PHP 和 MySQL 把功能寫出來，全部都由我們組員自己動手完成。我們不只做了賣場和訂單管理，還反覆測試了各種購物情境，確保使用者在許願、出價到下單的整個流程中，都能有最穩定且不中斷的互動體驗。

【學習到的事】
做完這個專案後，我們才發現比起寫程式，前期的「系統分析」反而更難也更重要。要把許願、代購、團購這麼多邏輯串在一起真的很燒腦，但也因為這次的實作經驗，讓我們對怎麼設計一個實用的商業平台有了更清楚的開發觀念。`
},
    { 
      id: 6, 
      title: '輔大活動管理系統', 
      year: '2023',
      category: '個人', 
      tech: 'HTML / PHP / MySQL', 
      img: new URL('../assets/輔大活動管理系統.jpg', import.meta.url).href,
      images: [
        new URL('../assets/輔大活動管理系統1.jpg', import.meta.url).href,
        new URL('../assets/輔大活動管理系統2.jpg', import.meta.url).href,
        new URL('../assets/輔大活動管理系統3.jpg', import.meta.url).href,
        new URL('../assets/輔大活動管理系統4.jpg', import.meta.url).href,
        new URL('../assets/輔大活動管理系統5.jpg', import.meta.url).href,
        new URL('../assets/輔大活動管理系統6.jpg', import.meta.url).href,
        new URL('../assets/輔大活動管理系統7.jpg', import.meta.url).href,
        new URL('../assets/輔大活動管理系統8.jpg', import.meta.url).href,
      ],
      description: `這是我們大二「WEB程式設計」的期末個人專案。當時想透過實作一個「校園活動管理平台」，來練習如何使用 PHP 串接 MySQL 資料庫，並嘗試建立一個完整的動態功能網站。

【從零開始的系統開發】
我獨立完成了從前端活動瀏覽到後端資料存取的完整流程。系統的核心功能在於提供一個數位化的管道，讓使用者可以直接在線上完成活動報名，而管理者則能透過後端產生的名單，取代傳統的人工登記，大幅提升資料整理的效率。

【身分權限控管】
在設計系統時，我想到管理員和一般學生的需求很不一樣，所以特別做了身分分級功能。學生登入後看到的是簡潔的活動列表與報名紀錄；管理員則有一套專屬後台，可以維護活動資訊並檢視報名人數。這讓我在開發時練習到如何保護後端行政資料，也確保了不同身分的使用者都有最直覺的操作介面。

【開發心得】
這是我第一次挑戰開發功能性網站。雖然當時技術還在起步階段，但在實作過程中，我學會了如何處理動態資料庫，並理解到權限劃分在系統設計中的重要性。看到自己寫的系統能成功跑通報名邏輯，對當時的我來說是非常有成就感的起點。` 
    },
    { 
      id: 7, 
      title: '輔大教發中心', 
      year: '2023',
      category: '團體', 
      tech: 'HTML/CSS', 
      img: new URL('../assets/輔大教發中心.jpg', import.meta.url).href,
      images: [
        new URL('../assets/輔大教發中心.jpg', import.meta.url).href
      ],
      description: `這是我們大一「Web 前端設計」課程的期末專案。當時的目標是幫校內的「輔大教發中心」官方網站進行一次大改版，練習如何用最基礎的 HTML 和 CSS 技術來優化視覺效果。

【視覺重構與架構優化】
這是一個純前端的網頁實作。我們觀察到原網站的資訊層級比較複雜、風格也相對傳統，所以嘗試重新設計整體的視覺風格。我們將原本高密度的資訊重新排版，改造成風格簡約、具備現代感且導覽直覺的頁面，希望建立一個更符合學術專業形象的呈現方式。

【技術實踐與純 CSS 練習】
透過純 HTML 和 CSS 來達成頁面的排版與響應式微調。這份專案讓我深入練習了如何精準控制元素的間距、字體與色彩配置，並學會如何從使用者的角度出發，重新整理複雜的導航架構，讓資訊傳達變得更有效率。

【開發心得】
雖然這是我大一時的早期作品，但這段練習對我而言非常關鍵。它讓我打下了紮實的 CSS 切版基礎，並理解到即使是靜態頁面，透過良好的介面設計也能大幅提升資訊的閱讀體驗。`
    },
  ])
  
  const selectedProject = ref(null)
  const currentImg = ref(0) // 控制目前顯示第幾張圖
  let autoPlayTimer = null

  // ✅ 新增：開啟自動輪播的函式
const startAutoPlay = () => {
  stopAutoPlay() // 先停止舊的，避免重複
  if (selectedProject.value && selectedProject.value.images.length > 1) {
    autoPlayTimer = setInterval(() => {
      nextImg()
    }, 3000) // 設定 3 秒換一張
  }
}

// ✅ 新增：停止自動輪播的函式
const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}
  
  const openProject = (project) => {
    selectedProject.value = project
    currentImg.value = 0
    document.body.style.overflow = 'hidden'
    startAutoPlay() // ✅ 開啟時啟動自動輪播
  }
  
  const closeProject = () => {
    selectedProject.value = null
    document.body.style.overflow = ''
    stopAutoPlay() // ✅ 關閉時停止，節省效能
  }
  
  const nextImg = () => {
  currentImg.value = (currentImg.value + 1) % selectedProject.value.images.length
}

const prevImg = () => {
  currentImg.value = (currentImg.value - 1 + selectedProject.value.images.length) % selectedProject.value.images.length
}

// ✅ 安全起見，如果組件被銷毀也要停止
onUnmounted(() => {
  stopAutoPlay()
})
  </script>
  
  <template>
    <section class="gallery-section">
      <div class="bg-blur-dot"></div>
      <div class="bg-blur-dot dot-2"></div>
      
  
      <div class="gallery-header">
        <div class="header-content">
          <span class="count-tag">
            <span class="line-decorator"></span>
            SELECTED ARCHIVES
            <span class="line-decorator"></span>
          </span>
          <h3 class="gallery-title">作品集</h3>
          <div class="title-underline"></div>
        </div>
      </div>
  
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="project-card"
          @click="openProject(project)"
        >
          <div class="image-wrapper">
            <img :src="project.img" :alt="project.title" />
            <div class="wave-cut"></div>
            <div class="hover-overlay">
              <span class="view-icon">查看詳情</span>
            </div>
          </div>
  
          <div class="project-info">
            <div class="tag-group">
              <span class="tag-pill category">{{ project.category }}</span>
              <span v-for="t in project.tech.split('/')" :key="t" class="tag-pill tech">
                {{ t.trim() }}
              </span>
            </div>
            <h3 class="project-name">{{ project.title }}</h3>
            <div class="project-year-badge">{{ project.year }}</div>
          </div>
        </div>
      </div>
  
      <Transition name="scale">
        <div v-if="selectedProject" class="modal-overlay" @click.self="closeProject">
          <div class="modal-content">
            <button class="close-btn" @click="closeProject">✕</button>
            
            <div class="modal-scroll-area">
              <div class="modal-slider">
                <img :src="selectedProject.images[currentImg]" alt="" class="slider-main-img" />
                <div v-if="selectedProject.images.length > 1" class="slider-controls">
                  <button @click="prevImg" class="slide-arrow left">❮</button>
                  <button @click="nextImg" class="slide-arrow right">❯</button>
                </div>
              </div>
  
              <div class="modal-detail-body">
                <div class="detail-header">
                  <div class="title-group">
                    <h2 class="detail-title">{{ selectedProject.title }}</h2>
                  </div>
                  <div class="detail-tags">
                  <span class="tag-pill year-badge">{{ selectedProject.year }}</span>
                  
                  <span class="tag-pill category">{{ selectedProject.category }}</span>
                  <span 
                    v-for="t in selectedProject.tech.split('/')" 
                    :key="t" 
                    class="tag-pill tech"
                  >
                    {{ t.trim() }}
                  </span>
                </div>
                </div>
  
                <div class="detail-content">
                  <label class="content-label">專案描述</label>
                  
                  <div class="info-group">
                    <p>{{ selectedProject.description }}</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </section>
  </template>
  
  <style scoped>
  /* 1. 設定粉色漸層變數 */
  .gallery-section {
  --pink-light: #fff5f7;
  --pink-medium: #ffe4e9;
  --pink-accent: #ffb8c6;
  --text-main: #5a4a4d;
  
  position: relative;
  /* 修正這裡：第一個值是上方距離，根據你的 Navbar 高度調整 */
  padding: 180px 5vw 8vw; 
  background: linear-gradient(135deg, var(--pink-light) 0%, var(--pink-medium) 100%);
  color: var(--text-main);
  overflow: hidden;
}
  
  /* 2. 背景裝飾光暈 */
  .bg-blur-dot {
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #ffd1dc 0%, transparent 70%);
    filter: blur(100px);
    z-index: 1;
    opacity: 0.6;
    top: -10%;
    left: -10%;
  }
  .dot-2 { 
    right: -5%; 
    bottom: 10%; 
    background: radial-gradient(circle, #e2d1f9 0%, transparent 70%); 
  }
  
  /* 3. 標題設計 */
  .gallery-header { 
  position: relative; 
  z-index: 2; 
  margin-top: 10px;    /* 如果還要再微調標題自己往下的距離 */
  margin-bottom: 4rem; /* 增加標題與作品卡片之間的呼吸感 */
  display: flex;
  justify-content: center;
  text-align: center;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;    /* 確保所有子元素（tag, title, underline）中軸對齊 */
  width: 100%;            /* 確保寬度足夠 */
}
.count-tag { 
  display: flex;
  align-items: center;
  justify-content: center; /* 關鍵：標籤內的裝飾線與文字置中 */
  gap: 15px;
  letter-spacing: 5px; 
  color: var(--pink-accent); 
  font-weight: 800; 
  font-size: 0.75rem;
  margin-bottom: 1rem;
}

/* 裝飾細線 */
.line-decorator {
  width: 40px;
  height: 1px;
  background: var(--pink-accent);
  display: inline-block;
}

.title-underline {
  position: relative;
  width: 150px;
  height: 6px;
  background: var(--pink-medium);
  margin: 20px auto 0; /* 關鍵：使用 auto 讓外距自動平分達到置中 */
  border-radius: 10px;
}

.title-underline::after {
  content: "";
  position: absolute;
  left: 0;
  top: 2px;
  width: 60px; /* 這是細且深的那條 */
  height: 2px;
  background: var(--pink-accent);
  border-radius: 10px;
  transition: width 0.8s ease;
}

/* 懸停時細線伸長，增加互動感 */
.gallery-header:hover .title-underline::after {
  width: 150px;
}
.gallery-title { 
  font-family: "Noto Serif TC", "Playfair Display", serif;
  font-size: 3rem; 
  font-weight: 900;
  color: #3b3a69;
  line-height: 1.2;
  margin: 0;
  
  display: flex;          /* 保持 flex 讓中英文排成一排 */
  justify-content: center; /* 關鍵：讓中英文內容在自己的容器內居中 */
  align-items: baseline;
  gap: 15px;
  
  background: linear-gradient(to right, #3b3a69, #7d8bb0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* 避免在手機端因為寬度太窄而跑掉 */
  width: 100%;
  max-width: 800px;
}

/* 英文副標題：較細、斜體、淡色 */
.en-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--pink-accent);
  opacity: 0.7;
}
  
  /* 4. 迷你化網格佈局 (三列) */
  .projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 50px 40px;
  padding: 20px;
}
  
.project-card {
  background: white;
  border-radius: 40px; /* 超大圓角 */
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(183, 182, 224, 0.2); /* 淡淡的紫色陰影 */
  border: 1px solid #f0f0f8;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(183, 182, 224, 0.4);
}
    
.image-wrapper {
  position: relative;
  width: 100%;
  height: 160px; /* 從 250px 大幅縮減到 160px，讓比例變扁 */
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wave-cut {
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 20px;
  background: white;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0; /* 製作圓弧遮罩 */
}
  
  .project-card:hover img {
    transform: scale(1.1);
  }
  
  /* 5. 懸停 Explore 按鈕迷你化 */
  .hover-overlay {
    position: absolute;
    inset: 0;
    background: rgba(255, 184, 198, 0.3);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  .project-card:hover .hover-overlay {
    opacity: 1;
  }
  
  .view-icon {
    background: white;
    color: var(--pink-accent);
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 700;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  
  /* 6. 文字資訊區迷你對齊 */
  /* 確保父層容器是相對定位 */
.project-info {
  position: relative; /* 關鍵：讓年份標籤能以此為基準定位 */
  padding: 15px 15px 30px; 
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 右下角年份框框樣式 */
.project-year-badge {
  position: absolute;
  bottom: 15px;
  right: 20px;
  
  /* 框框設計 */
  padding: 2px 10px;
  border: 2px solid #e0e0f0;
  border-radius: 8px; /* 稍微方一點或圓角都可以 */
  
  /* 文字設計 */
  font-family: 'Syncopate', sans-serif;
  font-size: 0.7rem;
  font-weight: bold;
  color: #a0a0c0;
  letter-spacing: 1px;
  
  background: rgba(255, 255, 255, 0.5); /* 淡淡的底色 */
  transition: all 0.3s ease;
}

/* 懸停效果：當卡片被碰到時，框框顏色加深 */
.project-card:hover .project-year-badge {
  border-color: var(--pink-accent);
  color: var(--pink-accent);
  background: white;
}



.tag-pill {
  padding: 10px; /* 這裡你可以微調，原本是 10px */
  border: 1px solid #e0e0f0;
  border-radius: 17px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1); /* 讓動畫更絲滑 */
  cursor: default;
}

/* --- 2. Category 標籤的 Hover 效果 --- */
.tag-pill.category {
  background: #fff0f3;
  color: #ff8fa3;
  border: 1px solid transparent;
}

.tag-pill.category:hover {
  background: #ff8fa3; /* Hover 時背景變深粉色 */
  color: white;        /* 文字變白色 */
  transform: translateY(-3px); /* 向上浮動 */
  box-shadow: 0 5px 15px rgba(255, 143, 163, 0.3); /* 增加粉色陰影 */
}

/* 針對技術標籤的專屬顏色 (淡淡的紫色) */
.tag-pill.tech {
  background: #f0f0ff; 
  color: #7d7dbb; 
  border: 1px solid #e0e0f8;
  padding:  12px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

/* 懸停時的一點小動畫 */
.tag-pill.tech:hover {
  background: #7d7dbb;
  color: white;
  transform: translateY(-2px);
}
  
  .project-category {
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--pink-accent);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 5px;
  }
  
  .project-name {
  font-size: 1.2rem; 
  font-weight: 900;
  /* 修正顏色：使用較淺的紫灰色或調整不透明度 */
  color: #3b3a69; 
  opacity: 0.7; /* 讓顏色變淺的方法 1：調整不透明度 */
  
  /* 調整間距：增加上方距離，減少下方距離 */
  margin: 20px 0 10px 0; 
  
  transition: opacity 0.3s ease; /* 增加過渡效果 */
}
.project-card:hover .project-name {
  opacity: 1;
}


/* 彈窗內的年份樣式 */
.modal-year {
  display: block;
  font-family: 'Syncopate', sans-serif;
  font-size: 0.85rem;
  color: var(--pink-accent);
  letter-spacing: 3px;
  margin-bottom: 5px;
  font-weight: bold;
}

/* 稍微調整一下彈窗標題組的排列 */
.title-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
  
  /* 7. 彈窗樣式 */
  .modal-overlay {
  position: fixed;
  inset: 0;
  
  /* --- 關鍵修改：將 0.85 改小（例如 0.5），讓背景更透明 --- */
  background: rgba(255, 245, 247, 0.3); 
  
  /* 如果你覺得背景太模糊，可以把 blur 的數值也調小（例如從 20px 改成 10px） */
  backdrop-filter: blur(10px); 
  
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease; /* 增加過渡效果讓開啟更平滑 */
}
  
  .modal-content {
  background: white;
  width: 95%;
  max-width: 700px;
  max-height: 85vh;
  border-radius: 35px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal-scroll-area {
  overflow-y: auto;
}
  
  .close-btn {
    position: absolute;
    right: 25px;
    top: 25px;
    background: var(--pink-light);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    color: var(--pink-accent);
    font-weight: bold;
    z-index: 10;
  }
  
  .modal-body { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
  }
  
  .modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .modal-text { 
    padding: 50px; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
  }
  
  .modal-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    margin: 10px 0 20px;
  }

  .modal-slider {
  position: relative;
  width: 100%;
  height: 350px;
  background: #f9f9f9;
}

.slider-main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 5;
}
.slide-arrow.left { left: 15px; }
.slide-arrow.right { right: 15px; }

/* 詳情區 */
.modal-detail-body {
  padding: 30px;
  text-align: left;
}

/* --- 彈窗內年份標籤的專屬樣式 --- */
.tag-pill.year-badge {
  background: transparent; /* 背景透明 */
  border: 2px solid #e0e0f0; /* 實心框框 */
  color: #a0a0c0; /* 灰藍色文字 */
  font-family: 'Syncopate', sans-serif;
  font-size: 0.75rem;
  padding:  12px; /* 調整內距讓它跟其他標籤高度一致 */
  letter-spacing: 1px;
}

/* 懸停效果 (選用，增加互動一致性) */
.tag-pill.year-badge:hover {
  border-color: var(--pink-accent);
  color: var(--pink-accent);
  transform: translateY(-3px);
}

/* 調整彈窗標頭排列方式，確保標籤組不會太擠 */
/* 修改彈窗標頭，讓標題與標籤水平排列 */
.detail-header {
  display: flex;
  flex-direction: row;        /* 水平排列 */
  justify-content: space-between; /* ✅ 關鍵：將內容推向兩端 */
  align-items: center;        /* 垂直置中對齊 */
  flex-wrap: wrap;            /* 確保手機版空間不足時會自動換行 */
  gap: 20px;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.5);
  padding-bottom: 20px;
}

/* 確保標題本身不要有底部外距，才不會導致對齊歪掉 */
.detail-title {
  font-size: 1.8rem;
  color: #3b3a69;
  margin: 0;
  opacity: 0.9;
  font-weight: 800;
  position: relative;
  padding-left: 20px; /* 為裝飾條預留空間 */
}

/* 標題左側的粉色垂直裝飾條 */
.detail-title::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 80%;
  background: var(--pink-accent);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 184, 198, 0.5);
}

/* 標籤容器微調 */
.detail-tags {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end; /* ✅ 確保標籤本身在容器內也是靠右排 */
}

 .tag-group {
  display: flex;
  gap: 8px;
  justify-content: center; /* 在卡片中保持置中 */
}

.info-group label {
  display: block;
  font-weight: 800;
  color: #ffb8c6;
  font-size: 0.9rem;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.detail-content {
  margin-top: 20px;
}

.info-group {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 245, 247, 0.6));
  padding: 25px;
  border-radius: 25px;
  border: 2px solid rgba(255, 184, 198, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
  /* 確保沒有多餘的上邊距 */
  margin-top: 0; 
}

/* 讓框框在捲動時有一點點浮動感 */
.info-group:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 184, 198, 0.5);
}

.content-label {
  display: inline-flex;
  align-items: center;
  font-weight: 800;
  color: #ff8fa3;
  font-size: 0.85rem;
  margin-bottom: 15px; /* 與下方框框的距離 */
  margin-left: 5px;    /* 稍微往右偏移，與框框對齊感更好 */
  letter-spacing: 2px;
  text-transform: uppercase;
  background: rgba(255, 184, 198, 0.15); /* 稍微加深一點點背景 */
  padding: 5px 15px;
  border-radius: 50px;
}

/* 描述內文樣式 */
.info-group p {
  line-height: 1.8;
  color: #6a6991;
  font-size: 0.95rem;
  margin: 0;
  white-space: pre-line;
}

.visit-btn {
  margin-top: 30px;
  width: 100%;
  padding: 15px;
  background: #3b3a69;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

/* 特別針對 Tag 顏色優化 */
.tag-pill.category { background: #fff0f3; color: #ff8fa3; border: none; }
.tag-pill.tech { background: #f0f0ff; color: #7d7dbb; border: none; }
  
  .visit-site {
    background: var(--pink-accent);
    color: white; 
    border: none;
    padding: 15px 30px; 
    border-radius: 50px; 
    font-weight: 700;
    cursor: pointer; 
    margin-top: 20px;
    transition: 0.3s;
  }
  
  .visit-site:hover {
    background: #ff9fb2;
    transform: translateY(-2px);
  }
  
  /* 動畫效果 */
  .scale-enter-active, .scale-leave-active { transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .scale-enter-from, .scale-leave-to { opacity: 0; transform: scale(0.9); }

  /* --- 隱藏 Modal 滾動條 --- */
.modal-scroll-area {
  overflow-y: auto;
  max-height: 85vh; /* 確保有高度限制才能捲動 */
  
  /* 針對 Firefox */
  scrollbar-width: none; 
  
  /* 針對 IE, Edge */
  -ms-overflow-style: none; 
}

/* 針對 Chrome, Safari, 以及新版 Edge (Webkit 核心) */
.modal-scroll-area::-webkit-scrollbar {
  display: none; /* 隱藏滾動條本體 */
}

/* 1. 定義進場動畫：位移 + 透明度 + 模糊度 */
@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: translateY(50px); /* 從下方 50px 開始 */
    filter: blur(5px);           /* 帶一點模糊感更有質感 */
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* 2. 套用到作品卡片 */
.project-card {
  /* ... 你原本的屬性 ... */
  
  opacity: 0; /* 初始隱藏，避免動畫開始前閃爍 */
  animation: cardEntrance 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

/* 3. 設定交錯延遲 (Staggered Delay) */
/* 讓第 1~6 張卡片依序延遲進場，產生節奏感 */
.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }
.project-card:nth-child(5) { animation-delay: 0.5s; }
.project-card:nth-child(6) { animation-delay: 0.6s; }

/* 標題也可以一起浮上來 */
.gallery-header {
  opacity: 0;
  animation: cardEntrance 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
  
  /* 響應式優化 */
@media (max-width: 1200px) {
  .projects-grid { 
    grid-template-columns: repeat(2, 1fr); /* 中型螢幕變 2 個一排 */
  }
}

@media (max-width: 768px) {
  .projects-grid { 
    grid-template-columns: 1fr; /* 手機變 1 個一排 */
    gap: 30px;
  }
  .gallery-title { 
    font-size: 2.2rem; 
  }
  .modal-body { 
    grid-template-columns: 1fr; 
  }
  .detail-header {
    justify-content: flex-start; /* 手機版改回靠左比較好看 */
  }
  .detail-tags {
    justify-content: flex-start;
  }
}
  </style>