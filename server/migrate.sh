#!/bin/bash
# Adds a new timestamped migration and applies it immediately
# make the script executable the first time you use it by navigating to your server directory in the command line and running this command: 
    # chmod +x migrate.sh
# Now whenever you want to use this script, go to your server directory and run:
  # ./migrate.sh

MIGRATION_NAME="AutoMigration_$(date +%Y%m%d%H%M%S)"
echo "Creating migration: $MIGRATION_NAME"


dotnet ef migrations add $MIGRATION_NAME --output-dir Migrations


dotnet ef database update

echo "Migration applied!"

### When to use:
  # When setting up your database for the first time.
  # After pulling changes that include model updates.
  # Any time you change your model's properties and need your database to reflect these changes