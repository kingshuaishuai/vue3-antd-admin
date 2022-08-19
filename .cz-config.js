module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      bug修复' },
    { value: 'docs', name: 'docs:     文档更新' },
    {
      value: 'style',
      name: 'style:    代码样式修改',
    },
    {
      value: 'refactor',
      name: 'refactor: 重构（既不是 feature 也不是 bug 修复）',
    },
    {
      value: 'perf',
      name: 'perf:     性能优化',
    },
    { value: 'test', name: 'test:     增加测试' },
    {
      value: 'chore',
      name: 'chore:    修改构建过程或辅助工具',
    },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'WIP', name: 'WIP:      正在进行' },
    { value: 'build', name: 'build:      打包' },
  ],
  // 步骤
  messages: {
    type: '请选择提交的类型',
    customScope: '请输入修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    footer: '请输入要关闭的Issue(可选)',
    confirmCommit: '请确认是否使用以上信息提交(y/n)'
  },
  selectLimit: 100,
}
