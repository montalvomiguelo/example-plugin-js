#!/usr/bin/env node

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  const oclif = await import('@oclif/core')
  await oclif.execute({development: false, dir: import.meta.url})
})()
