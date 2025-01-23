## Monorepo template

## Structure

```
├── .github/workflows
├── apps
│   ├── next-app-1  (eslint, env, vitest)
│   └── next-app-2  (eslint, env, vitest)
└── packages
│   └── ui-lib      (components, eslint)
│
├── .gitignore
├── package.json
└── pnpm-workspace.yaml
```

## Monorepo script
Execute root directory commands to quickly run in any project.

|script | description|
|-----|------------|
|`@apps/next-app-1:dev` | Run dev in next-app-1 |
|`@apps/next-app-1:build` | Run build in next-app-1|
|`@apps/next-app-1:lint` | Run lint in next-app-1|
|`@apps/next-app-1:test` | Run test in next-app-1|
|`@apps/next-app-2:dev` | Run dev in next-app-2|
|`@apps/next-app-2:build` | Run build in next-app-2|
|`@apps/next-app-2:lint` | Run lint in next-app-2|
|`@packages/ui-lib:lint` | Run lint in ui-lib |
|`g:lint` | Run lint in all workspaces |
|`g:build` | Run build in all workspaces |