<template>
  <section class="content">
    <header class="header">
      <h1 class="title text-rave">NERA</h1>
    </header>

    <footer class="footer">
      <div class="footer__text text-rave">
        Soon
      </div>

      <a href="#" class="footer__btn">
        <span>
          Join the community
        </span>
      </a>

      <div class="footer__text text-rave">
        June 2022
      </div>
    </footer>
  </section>
</template>

<script>

export default {
  name: "AppPlug"
};
</script>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 5.2vh;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 15px;
}

.title {
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 0.6em;
  color: #dfecff;
  backdrop-filter: blur(42px);
}

.footer {
  position: absolute;
  bottom: 5.2vh;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 0 15px;

  &__btn {
    background: #7692bd;
    box-shadow: 0 0 24px rgba(255, 255, 255, 0.5), inset 0 0 12px rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    padding: 20px 39px;
    position: relative;
    z-index: 1;
    margin-bottom: 2.5vh;
    transition: .3s all;

    span {
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #6f7398;
      transition: .3s all;
    }

    &::before {
      content: '';
      position: absolute;
      transform: translateY(-3px);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: #dfecff;
      box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(42px);
      border-radius: 100px;
      transition: .3s all;
    }

    &:hover {
      span {
        color: darken(#6f7398, 10%);
      }

      &::before {
        background: darken(#dfecff, 10%);
      }
    }

  }

  &__text {
    font-size: 14px;
    letter-spacing: 0.6em;
    background: linear-gradient(180deg, #fff 0%, #cee2ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.5;
    backdrop-filter: blur(42px);
    margin-bottom: 2.5vh;


    &:last-child {
      margin-bottom: 0;
    }
  }
}

.content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: center / cover url("~/assets/img/bg.jpg") no-repeat;
}

.text-rave {
  font-family: 'The Rave Is In Your Pants', sans-serif;
}

@media (max-width: 399px) {
  .footer {
    &__btn {
      span {
        font-size: 18px;
      }
    }
  }
}
</style>
