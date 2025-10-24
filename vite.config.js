import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/SAE-301/",
build: {
   rollupOptions: {
     input: {
       main: resolve(__dirname, "index.html"),
       checkout_login: resolve(__dirname, "pages/checkout-login.html"),
       commande_invite_magasin: resolve(__dirname, "pages/commande-invite-magasin.html"),
       commande_invite: resolve(__dirname, "pages/commande-invite.html"),
       confirmation_commande: resolve(__dirname, "pages/confirmation-commande.html"),
       connexion: resolve(__dirname, "pages/connexion.html"),
       creer_compte: resolve(__dirname, "pages/creer-compte.html"),
       miniatures: resolve(__dirname, "pages/miniatures.html"),
       paints: resolve(__dirname, "pages/paints.html"),
       panier_vide: resolve(__dirname, "pages/panier-vide.html"),
       panier: resolve(__dirname, "pages/panier.html"),
       produit_paint_base: resolve(__dirname, "pages/produit-paint-base.html"),
       produit_space_marines: resolve(__dirname, "pages/produit-space-marines.html"),
     },
   },
 },
});
