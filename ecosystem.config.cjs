module.exports = {
  apps: [{
    name: "app",
    script: ".output/server/index.mjs",
    env: {
      DATABASE_URL: "postgresql://postgres:parol@localhost:5432/inspirationworld",
      NODE_ENV: 'production',
      MAIL_PASS: '7jxCIJCzF7JWQJihB5Ad'
    },
  }]
}