#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Deploy to Hostinger via SFTP
echo "Deploying to Hostinger..."

# You'll need to replace these with your actual FTP credentials
FTP_HOST="ftp.drivndigital.com"
FTP_USER="your_username"
FTP_PASS="your_password"

# Upload files via lftp (more reliable than sftp for automation)
lftp -c "
set sftp:auto-confirm yes
set ssl:verify-certificate no
open sftp://$FTP_USER:$FTP_PASS@$FTP_HOST
cd public_html
mirror -R --delete --verbose dist/ ./
quit
"

echo "Deployment complete! Check https://drivndigital.com"
