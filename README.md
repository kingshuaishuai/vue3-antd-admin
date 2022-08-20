# Vue 3 + TypeScript + Vite 开发模板

## 背景
通过vite默认创建的 `vue3-ts` 项目中是一个比较简洁的裸项目，对于代码标准化落地未采取任何措施，因此每次创建项目后都需要再次手动配置，每次配置都会消耗一定精力，但这些必须的配置其实都是相同的，因此这里创建一个模板项目，避免多次重复劳动。

## 方案

- 代码校验：`eslint`
- 类型检查：`vue-tsc`
- git 提交规范：`commitizen` + `cz-customizable` + `commitlint`
- 提交卡点：`husky` + `lint-staged`
