<p align="center" style="font-size=20px"> Todo App </p>
<br/> 

### Base on 

1. Vue 3 + Typescript + Vite

### 解决跨域 

 - Vite2.x 
 
  ```
  // vite.config.ts
  // config proxy
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        // /api/todo -> http://localhost:4000/todo
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  ```
