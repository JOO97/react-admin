// vite.config.ts
import { defineConfig } from "file:///D:/JOO/my/code/react/react-admin/node_modules/vite/dist/node/index.js";
import path from "path";
import fs from "fs";
import react from "file:///D:/JOO/my/code/react/react-admin/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { visualizer } from "file:///D:/JOO/my/code/react/react-admin/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import preserveDirectives from "file:///D:/JOO/my/code/react/react-admin/node_modules/rollup-preserve-directives/dist/es/index.mjs";
var __vite_injected_original_dirname = "D:\\JOO\\my\\code\\react\\react-admin\\examples\\demo";
var vite_config_default = defineConfig(async () => {
  const packages = fs.readdirSync(path.resolve(__vite_injected_original_dirname, "../../packages"));
  const aliases = {
    "data-generator-retail": path.resolve(
      __vite_injected_original_dirname,
      "../data-generator/src"
    )
  };
  for (const dirName of packages) {
    if (dirName === "create-react-admin") continue;
    const packageJson = await import(path.resolve(__vite_injected_original_dirname, "../../packages", dirName, "package.json"), { assert: { type: "json" } });
    aliases[packageJson.default.name] = path.resolve(
      __vite_injected_original_dirname,
      `../../packages/${packageJson.default.name}/src`
    );
  }
  return {
    plugins: [
      react(),
      visualizer({
        open: process.env.NODE_ENV !== "CI",
        filename: "./dist/stats.html"
      })
    ],
    define: {
      "process.env": process.env
    },
    server: {
      port: 8e3,
      open: true
    },
    base: "./",
    esbuild: {
      keepNames: true
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        plugins: [preserveDirectives()]
      }
    },
    resolve: {
      preserveSymlinks: true,
      alias: [
        // FIXME: doesn't work with react 19
        // allow profiling in production
        // { find: /^react-dom$/, replacement: 'react-dom/profiling' },
        // {
        //     find: 'scheduler/tracing',
        //     replacement: 'scheduler/tracing-profiling',
        // },
        // we need to manually follow the symlinks for local packages to allow deep HMR
        ...Object.keys(aliases).map((packageName) => ({
          find: packageName,
          replacement: aliases[packageName]
        }))
      ]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxKT09cXFxcbXlcXFxcY29kZVxcXFxyZWFjdFxcXFxyZWFjdC1hZG1pblxcXFxleGFtcGxlc1xcXFxkZW1vXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxKT09cXFxcbXlcXFxcY29kZVxcXFxyZWFjdFxcXFxyZWFjdC1hZG1pblxcXFxleGFtcGxlc1xcXFxkZW1vXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9KT08vbXkvY29kZS9yZWFjdC9yZWFjdC1hZG1pbi9leGFtcGxlcy9kZW1vL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcclxuaW1wb3J0IHByZXNlcnZlRGlyZWN0aXZlcyBmcm9tICdyb2xsdXAtcHJlc2VydmUtZGlyZWN0aXZlcyc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcGFja2FnZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vcGFja2FnZXMnKSk7XHJcbiAgICBjb25zdCBhbGlhc2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgICAgICdkYXRhLWdlbmVyYXRvci1yZXRhaWwnOiBwYXRoLnJlc29sdmUoXHJcbiAgICAgICAgICAgIF9fZGlybmFtZSxcclxuICAgICAgICAgICAgJy4uL2RhdGEtZ2VuZXJhdG9yL3NyYydcclxuICAgICAgICApLFxyXG4gICAgfTtcclxuICAgIGZvciAoY29uc3QgZGlyTmFtZSBvZiBwYWNrYWdlcykge1xyXG4gICAgICAgIGlmIChkaXJOYW1lID09PSAnY3JlYXRlLXJlYWN0LWFkbWluJykgY29udGludWU7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXHJcbiAgICAgICAgY29uc3QgcGFja2FnZUpzb24gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9wYWNrYWdlcycsIGRpck5hbWUsICdwYWNrYWdlLmpzb24nKSxcclxuICAgICAgICAgICAgeyBhc3NlcnQ6IHsgdHlwZTogJ2pzb24nIH0gfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYWxpYXNlc1twYWNrYWdlSnNvbi5kZWZhdWx0Lm5hbWVdID0gcGF0aC5yZXNvbHZlKFxyXG4gICAgICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgICAgIGAuLi8uLi9wYWNrYWdlcy8ke3BhY2thZ2VKc29uLmRlZmF1bHQubmFtZX0vc3JjYFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgIHJlYWN0KCksXHJcbiAgICAgICAgICAgIHZpc3VhbGl6ZXIoe1xyXG4gICAgICAgICAgICAgICAgb3BlbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdDSScsXHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZTogJy4vZGlzdC9zdGF0cy5odG1sJyxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkZWZpbmU6IHtcclxuICAgICAgICAgICAgJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICAgICAgcG9ydDogODAwMCxcclxuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhc2U6ICcuLycsXHJcbiAgICAgICAgZXNidWlsZDoge1xyXG4gICAgICAgICAgICBrZWVwTmFtZXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidWlsZDoge1xyXG4gICAgICAgICAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICAgICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtwcmVzZXJ2ZURpcmVjdGl2ZXMoKV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgIHByZXNlcnZlU3ltbGlua3M6IHRydWUsXHJcbiAgICAgICAgICAgIGFsaWFzOiBbXHJcbiAgICAgICAgICAgICAgICAvLyBGSVhNRTogZG9lc24ndCB3b3JrIHdpdGggcmVhY3QgMTlcclxuICAgICAgICAgICAgICAgIC8vIGFsbG93IHByb2ZpbGluZyBpbiBwcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICAvLyB7IGZpbmQ6IC9ecmVhY3QtZG9tJC8sIHJlcGxhY2VtZW50OiAncmVhY3QtZG9tL3Byb2ZpbGluZycgfSxcclxuICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmaW5kOiAnc2NoZWR1bGVyL3RyYWNpbmcnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJlcGxhY2VtZW50OiAnc2NoZWR1bGVyL3RyYWNpbmctcHJvZmlsaW5nJyxcclxuICAgICAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGZvbGxvdyB0aGUgc3ltbGlua3MgZm9yIGxvY2FsIHBhY2thZ2VzIHRvIGFsbG93IGRlZXAgSE1SXHJcbiAgICAgICAgICAgICAgICAuLi5PYmplY3Qua2V5cyhhbGlhc2VzKS5tYXAocGFja2FnZU5hbWUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kOiBwYWNrYWdlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudDogYWxpYXNlc1twYWNrYWdlTmFtZV0sXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRVLFNBQVMsb0JBQW9CO0FBQ3pXLE9BQU8sVUFBVTtBQUNqQixPQUFPLFFBQVE7QUFDZixPQUFPLFdBQVc7QUFDbEIsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyx3QkFBd0I7QUFML0IsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhLFlBQVk7QUFDcEMsUUFBTSxXQUFXLEdBQUcsWUFBWSxLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCLENBQUM7QUFDekUsUUFBTSxVQUFrQztBQUFBLElBQ3BDLHlCQUF5QixLQUFLO0FBQUEsTUFDMUI7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDQSxhQUFXLFdBQVcsVUFBVTtBQUM1QixRQUFJLFlBQVkscUJBQXNCO0FBRXRDLFVBQU0sY0FBYyxNQUFNLE9BQ3RCLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0IsU0FBUyxjQUFjLEdBQ2pFLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxFQUFFO0FBRS9CLFlBQVEsWUFBWSxRQUFRLElBQUksSUFBSSxLQUFLO0FBQUEsTUFDckM7QUFBQSxNQUNBLGtCQUFrQixZQUFZLFFBQVEsSUFBSTtBQUFBLElBQzlDO0FBQUEsRUFDSjtBQUVBLFNBQU87QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxRQUNQLE1BQU0sUUFBUSxJQUFJLGFBQWE7QUFBQSxRQUMvQixVQUFVO0FBQUEsTUFDZCxDQUFDO0FBQUEsSUFDTDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ0osZUFBZSxRQUFRO0FBQUEsSUFDM0I7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNWO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDTCxXQUFXO0FBQUEsSUFDZjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0gsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLFFBQ1gsU0FBUyxDQUFDLG1CQUFtQixDQUFDO0FBQUEsTUFDbEM7QUFBQSxJQUNKO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDTCxrQkFBa0I7QUFBQSxNQUNsQixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBU0gsR0FBRyxPQUFPLEtBQUssT0FBTyxFQUFFLElBQUksa0JBQWdCO0FBQUEsVUFDeEMsTUFBTTtBQUFBLFVBQ04sYUFBYSxRQUFRLFdBQVc7QUFBQSxRQUNwQyxFQUFFO0FBQUEsTUFDTjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
