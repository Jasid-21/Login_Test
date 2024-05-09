<template>
  <div class="login">
    <div class="login-mask">
      <div class="login-form-container">
        <form class="login-form">
          <div class="form-content">
            <h3 class="title">Inicio de sesión</h3>
            <div class="fields-container">
              <FieldContainer name="Usuario"></FieldContainer>
              <FieldContainer name="Clave" :is-password="true"></FieldContainer>
            </div>

            <div class="password-recovery-container">
              <div>
                <input type="checkbox" id="remember">
                <label for="remember">Recordar clave</label>
              </div>

              <div>
                <span for="forgot">Olvidé mi clave/usuario</span>
              </div>
            </div>
            <button class="login-btn">
              Ingresar
            </button>

            <div class="logo-container">
              <div class="logo"></div>
            </div>
          </div>
        </form>
        <div class="transparent-div"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FieldContainer from '@/components/FieldContainer.vue';
</script>

<style scoped>
.login {
  height: 100vh;
  background: url('./../assets/good-bg-img.jpeg');
  background-size: cover;
  background-position: center;
  background-position-y: -17px;
}

.login .login-mask {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form-container {
  width: 1002px;
  height: 633px;

  box-shadow: 0 4px 18.7px #198E984D;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 550px auto;
}

form.login-form {
  background-color: #fff;
  border-radius: 15px 0 0 15px;
  padding: 92px 126px 92px 126px;
}

form.login-form .form-content {
  height: 100%;
  padding: 28px 0;

  display: flex;
  flex-direction: column;
  gap: 28px;
}

.form-content h3.title {
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  line-height: 36.57px;
}

.fields-container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.password-recovery-container {
  height: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.password-recovery-container input {
  margin: 0; padding: 0;
  margin-right: 7px;
  vertical-align: middle;
  position: relative;
}

.password-recovery-container label,
.password-recovery-container span {
  color: #757575;
  font-size: 11px;
  line-height: 13.41px;
}

.password-recovery-container span {
  color: #12BDCA;
  text-decoration: underline;
}

button.login-btn {
  padding: 12px 0px 12px 0px;
  background-color: #12BDCA;
  border-radius: 5px;
  height: 42px;
  border: none;
}

button.login-btn {
  font-size: 15px;
  line-height: 18.29px;
  font-weight: 600;
  color: #fff;
  text-align: center;
}

.logo-container {
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.logo-container .logo {
  width: 148px;
  height: 29px;
  background: url('./../assets/svg/logo.svg');
}

.transparent-div {
  border-radius: 0 15px 15px 0;
  border: 1px solid #12BDCA;
}
</style>
