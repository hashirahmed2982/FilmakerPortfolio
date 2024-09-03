module.exports = {
    apps: [
      {
        name: "frontend",
        cwd: "./",
        script: "npm",
        args: "run dev",
        autorestart: true,
        watch: false,
        max_memory_restart: "1G",
      }
    ],
  }
  