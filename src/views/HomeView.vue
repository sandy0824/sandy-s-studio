<script setup>
  import { ref } from 'vue'
  
  // 模擬作品數據
  const projects = ref([
    { id: 1, title: '海獺冰淇淋', category: '團體', tech: 'ASP.NET Web Forms', img: new URL('../assets/海獺冰淇淋.jpg', import.meta.url).href, description: '待設計' },
    { id: 2, title: '智慧探險小邦手', category: '團體', tech: 'Vue/ FastAPI/ MS SQL', img: new URL('../assets/智慧探險小邦手.jpg', import.meta.url).href, description: '待設計' },
    { id: 3, title: 'Memonity', category: '團體', tech: 'React / FastAPI/ MySQL', img: new URL('../assets/Memority.jpg', import.meta.url).href, description: '待設計' },
    { id: 4, title: 'WISHOP', category: '團體', tech: 'HTML/ PHP / MySQL', img: new URL('../assets/Wishop.jpg', import.meta.url).href, description: '待設計' },
    { id: 5, title: '輔大活動管理系統', category: '個人', tech: 'HTML / PHP / MySQL', img: new URL('../assets/輔大活動管理系統.jpg', import.meta.url).href, description: '待設計' },
    { id: 6, title: '輔大教發中心', category: '團體', tech: 'HTML ', img: new URL('../assets/輔大教發中心.jpg', import.meta.url).href, description: '待設計' },
  ])
  
  const selectedProject = ref(null)
  
  const openProject = (project) => {
    selectedProject.value = project
    document.body.style.overflow = 'hidden'
  }
  
  const closeProject = () => {
    selectedProject.value = null
    document.body.style.overflow = ''
  }
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
          <h3 class="gallery-title">
            作品集
          </h3>
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
      <div class="wave-cut"></div> <div class="hover-overlay">
        <span class="view-icon">查看詳情</span>
      </div>
    </div>

    <div class="project-info">
      <div class="tag-group">
        <span class="tag-pill category">{{ project.category }}</span>
        <span class="tag-pill tech">{{ project.tech }}</span>
      </div>
      
      <h3 class="project-name">{{ project.title }}</h3>

    </div>
  </div>
</div>
  
      <Transition name="scale">
        <div v-if="selectedProject" class="modal-overlay" @click.self="closeProject">
          <div class="modal-content">
            <button class="close-btn" @click="closeProject">✕</button>
            <div class="modal-body">
              <div class="modal-image">
                <img :src="selectedProject.img" alt="" />
              </div>
              <div class="modal-text">
                <span class="modal-tag">{{ selectedProject.category }}</span>
                <h2>{{ selectedProject.title }}</h2>
                <p>{{ selectedProject.description }}</p>
                <button class="visit-site">Learn More</button>
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
    padding: 8vw 5vw;
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
  margin-bottom: 6rem; 
  display: flex;         /* 新增：使用 flex 讓父層容易控制 */
  justify-content: center; /* 新增：讓內容物在頁面水平居中 */
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
  .project-info {
    padding: 15px 15px 20px; /* 縮小內距 */
  text-align: center; /* 居中對齊 */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tag-group {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.tag-pill {
  padding: 4px 15px;
  border: 1px solid #e0e0f0;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #8e8dbb; /* 紫灰色 */
}

.tag-pill.tech {
  color: #a29bfe; /* 技術標籤顏色深一點 */
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
  color: #3b3a69;
  margin: 0 0 30px 0;
}
  
  /* 7. 彈窗樣式 */
  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(255, 245, 247, 0.85);
    backdrop-filter: blur(20px);
    z-index: 10000;
    display: flex; align-items: center; justify-content: center;
  }
  
  .modal-content {
    background: white;
    width: 90%; 
    max-width: 900px;
    border-radius: 40px;
    box-shadow: 0 40px 100px rgba(255, 184, 198, 0.3);
    overflow: hidden;
    position: relative;
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
}
  </style>