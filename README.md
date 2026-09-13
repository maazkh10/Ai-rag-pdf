# ==========================================

# IGNORED FOLDERS

# ==========================================

# Completely ignore the server folder (at root & all subdirectories)

server
server/
**/server
**/server/\*\*

# Ignore all node_modules directories anywhere in the project

node_modules
node_modules/
**/node_modules
**/node_modules/\*\*

# ==========================================

# ENVIRONMENT & SECRETS

# ==========================================

.env
.env._
!.env.example
client/.env
client/.env._
new-server/.env
new-server/.env.\*

# ==========================================

# BUILD & DISTRIBUTION OUTPUTS

# ==========================================

dist/
build/
out/
client/dist/
client/build/
new-server/dist/
new-server/build/

# ==========================================

# LOGS & DEBUGGING

# ==========================================

logs
_.log
npm-debug.log_
yarn-debug.log*
yarn-error.log*
pnpm-debug.log\*

# ==========================================

# SYSTEM & IDE FILES

# ==========================================

.DS_Store
Thumbs.db
.vscode/
.idea/
\*.swp
