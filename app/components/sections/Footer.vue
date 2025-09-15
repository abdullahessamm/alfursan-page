<template>
  <footer class="footer" dir="rtl">
    <div class="container">
      <div class="footer-top">
        <div class="footer-description">
          <p>
            نحرص على اكمال مسيرة العطاء التى بدات منذ ما يقارب العشرين عاما وذلك لاضافة قيمة جديدة للمجتمع وحرصا منا على التوسع فى النشاط العقارى السكنى تماشيا مع رؤية المملكة 2030
          </p>
          <div class="social-icons">
            <a href="https://www.instagram.com/araco.develop/" class="social-icon">
              <Icon name="mdi:instagram" size="24px" class="icon-white" />
            </a>
            <a href="https://www.facebook.com/araco.develop/" class="social-icon">
              <Icon name="mdi:facebook" size="24px" class="icon-white" />
            </a>
            <a href="https://x.com/araco_develop" class="social-icon">
              <Icon name="mdi:twitter" size="24px" class="icon-white" />
            </a>
            <a href="https://www.youtube.com/channel/UCSDOrfFO3IsgSvewlmq2Dng" class="social-icon">
              <Icon name="mdi:youtube" size="24px" class="icon-white" />
            </a>
          </div>
        </div>
        
        <div class="footer-links">
          <div class="footer-links-column">
            <h3>استكشف</h3>
            <ul>
              <li><a href="https://araco-sa.com" target="_blank">من نحن</a></li>
              <li><a href="#features">المميزات</a></li>
            </ul>
          </div>
          
          <div class="footer-links-column">
            <h3>مشاريع اخرى</h3>
            <ul>
              <li><a href="https://araco-sa.com/fakhrya.html">مجمع الفاخرية</a></li>
              <li><a href="https://araco-sa.com/shrok.html">مجمع الشروق</a></li>
              <li><a href="https://araco-sa.com/nargs.html">عوالى النرجس</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-divider"></div>
      
      <div class="footer-bottom">
        <div class="footer-logo">
          <img src="/assets/imgs/araco-logo-white.png" alt="شعار أراكو" class="logo-img" />
        </div>
        
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <Icon name="mdi:phone" size="24px" class="icon-white" />
            </div>
            <div class="contact-details">
              <h4>اتصل بنا</h4>
              <p style="direction: ltr;">+966 55 455 6802</p>
              <p style="direction: ltr;">+966 53 069 7678</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <Icon name="mdi:map-marker" size="24px" class="icon-white" />
            </div>
            <div class="contact-details">
              <h4>الموقع</h4>
              <p>6893 أبو بكر الصديق - حي التعاون - الرياض</p>
              <p>شارع الملك سالمان- الخبر -المنطقه الشرقيه</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-copyright">
        <div class="copyright-text">
          <p>© 2025 أراكو للتطوير العقاري. جميع الحقوق محفوظة.</p>
        </div>
        <div class="powered-by" style="direction: ltr;">
          <img src="/assets/imgs/swift-care.png" alt="سويفت كير" class="swift-care-logo" />
          <p>
            <span>Powered By</span><br>
            <span>Swift Care (Programming Team)</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component setup
</script>

<style scoped>
.footer {
  background-color: #1e3a5f;
  color: white;
  padding: 3rem 0 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-description {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
}

.footer-description p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.footer-links {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
}

.footer-links-column h3 {
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.footer-links-column ul {
  list-style: none;
  padding: 0;
}

.footer-links-column li {
  margin-bottom: 0.8rem;
}

.footer-links-column a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer-links-column a:hover {
  opacity: 0.8;
}

.footer-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-img {
  width: 120px;
  height: auto;
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-title {
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: lowercase;
}

.diamond {
  color: #ffd966;
}

.logo-subtitle {
  font-size: 0.8rem;
  opacity: 0.8;
}

.contact-info {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.contact-details h4 {
  font-size: 1rem;
  margin: 0 0 0.2rem;
  font-weight: 600;
}

.contact-details p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

.icon-white {
  color: white;
}

.footer-copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright-text p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

.powered-by {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.powered-by p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

.swift-care-logo {
  height: 30px;
  width: auto;
}

@media (max-width: 768px) {
  .footer-top,
  .footer-bottom,
  .footer-copyright {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .contact-info {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  
  .footer-logo {
    margin-bottom: 1rem;
  }
  
  .copyright-text {
    margin-bottom: 1rem;
  }
  
  .powered-by {
    margin-bottom: 0.5rem;
  }
}
</style>