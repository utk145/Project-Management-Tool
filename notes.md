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

- If you want to delete the remote branches from your local machine that have already been deleted on the remote, use the following command:

```bash
git fetch -p
git branch -r | awk '{print $1}' |
  egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) |
  awk '{print $1}' | xargs git branch -d

```

Reference: https://stackoverflow.com/questions/13064613/how-to-prune-local-tracking-branches-that-do-not-exist-on-remote-anymore

- Add hono as dependency so that we can get rid(can still use the native api methodology) of file based routing in backend and utilize code based routing like we do in express.
  https://hono.dev/docs/getting-started/vercel
  https://hono.dev/docs/guides/rpc

- Tanstack query reference: https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#advanced-server-rendering