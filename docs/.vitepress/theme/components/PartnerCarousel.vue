<template>
  <div class="partner-carousel" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <h2>我们的合作商</h2>
    <div class="carousel-container">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(partner, index) in partners" :key="index" class="carousel-item">
          <img :src="partner.logo" :alt="partner.name" />
        </div>
      </div>
    </div>
    <div class="carousel-indicators">
      <span 
        v-for="(partner, index) in partners" 
        :key="index" 
        class="indicator"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const partners = ref([
  { name: 'AmethystCraft', logo: 'https://motd.puddingkc.com/status.png?ip=mc.amethyst.icu&style=style1&language=zh&text=AmethystCraft' },
  { name: 'FurCraft', logo: 'https://motd.puddingkc.com/status.png?ip=play.furcraft.top&style=default&language=zh&text=FurCraft' },
  { name: 'AEMC', logo: 'https://motd.puddingkc.com/status.png?ip=aemc.artlz.top&style=style2&language=zh&text=AEMC' },
  { name: 'XpcMC', logo: 'https://motd.puddingkc.com/status.png?ip=play.simpfun.cn:14242&style=style3&language=zh&text=XpcMC' },
  { name: 'UMS', logo: 'https://motd.puddingkc.com/status.png?ip=113.219.237.121:62055&style=style4&language=zh&text=UMS' },
]);

const currentIndex = ref(0);
let intervalId = null;

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % partners.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  if (intervalId) return;
  intervalId = setInterval(next, 4000); // 4秒切换一次
};

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style scoped>
.partner-carousel {
  text-align: center;
  margin: 60px auto;
  padding: 0;
  max-width: 800px;
}

.partner-carousel h2 {
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
  color: var(--vp-c-text-1, #333);
  letter-spacing: -0.025em;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background: var(--vp-c-bg, #fff);
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-item {
  min-width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, var(--vp-c-bg, #fff) 0%, var(--vp-c-bg-soft, #f8f9fa) 100%);
  position: relative;
  overflow: hidden;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: contain;
  object-position: center;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.carousel-item img:hover {
  transform: scale(1.05);
}

.carousel-indicators {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.indicator.active {
  background-color: var(--vp-c-brand-1, #3b82f6);
  transform: scale(1.2);
}

.indicator:hover:not(.active) {
  background-color: rgba(0, 0, 0, 0.4);
  transform: scale(1.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .partner-carousel {
    margin: 40px 20px;
  }
  
  .partner-carousel h2 {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  .carousel-item {
    height: 150px;
    padding: 15px;
  }
  
  .carousel-item img {
    border-radius: 8px;
  }
  
  .carousel-indicators {
    margin-top: 20px;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .carousel-item {
    height: 120px;
    padding: 10px;
  }
}
</style>