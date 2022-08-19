module.exports = {
  "src/**/*.{ts,tsx,js,jsx,vue}": [
    "eslint --fix",
  ],
  "src/**/*.{ts,tsx,vue}": "vue-tsc --noEmit --skipLibCheck"
}