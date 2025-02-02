- Good commit practices :-

```
    feat -> feature
    fix -> bug fix
    docs -> documentation
    style -> formatting, lint stuff
    refactor -> code restructure without changing external behavior
    test -> adding missing tests
    chore -> maintenance
    init -> initial commit
    rearrange -> files moved, added, deleted etc
    update -> update code (versions, library compatibility)
    config -> changes to the config files or making some configurations
```

- If you want to add a new feature, bug, change, etc please create a new branch with the name of the feature and then create a PR from that branch.
- If you want to add multiple shadcn components at the same time, use `npx shadcn@2.1.0 add` and then use space to select/unselect the components you want to add and then click enter to add them all.

- There is a comprehensive eslint and prettier config in the root of the project.
