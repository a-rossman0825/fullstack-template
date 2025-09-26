#!/bin/bash
# Adds a new migration with a timestamped name and applies it immediately

# Create a timestamped migration name
MIGRATION_NAME="AutoMigration_$(date +%Y%m%d%H%M%S)"
echo "Creating migration: $MIGRATION_NAME"

# Add the migration to the Migrations folder
dotnet ef migrations add $MIGRATION_NAME --output-dir Migrations

# Apply the migration to the database
dotnet ef database update

echo "Migration applied!"