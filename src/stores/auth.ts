import { defineStore } from "pinia";
import IAuthState from "./interfaces/AuthState.interface";
import FireAlert from "@/services/FireAlert.service";

export const useAuthStore = defineStore('auth', {
  state: (): IAuthState => ({
    user_status: undefined,
    pass_status: undefined,
  }),

  actions: {
    async requestLogin(username: string, password: string) {
      if (typeof username != 'string' || typeof password != 'string') return;

      const resp = await fetch('https://apiqa.smadiadigital.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const ok = resp.ok;
      if (!ok) {
        console.log(resp.statusText);
        //Debido a que se omite el estado individual de cada input, preferí escribir un título diferente.
        FireAlert('El usuario o la contraseña que has ingresado es incorrecto',
          'error', false,
          'Usuario o clave incorrectos'
        );
        return;
      }

      //Igual aquí.
      localStorage.setItem('access_token', (await resp.json()).token);
      FireAlert('Logueado satisfactoriamente', 'success', false, 'Ok!');
    }
  }
});
