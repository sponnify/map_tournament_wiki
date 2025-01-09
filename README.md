# MAP Tournament Wiki - Local Development Guide

This guide will walk you through setting up and running the MAP Tournament Wiki locally for development purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Git](https://git-scm.com/downloads)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- A text editor of your choice (VS Code recommended)

## Initial Setup

1. **Clone the Repository**
   ```bash
   # Both Windows and Linux/Mac
   git clone https://github.com/sponnify/map_tournament_wiki.git
   cd map_tournament_wiki
   ```

2. **Create Development Configuration**
   Create a file named `_config_dev.yml` in the root directory with the following content:
   ```yaml
   baseurl: ""  # Empty for local development
   ```
   This file is already in `.gitignore` to prevent conflicts with GitHub Pages deployment.

## Running the Development Server

1. **Start Docker Desktop**
   - Open Docker Desktop
   - Wait for Docker Engine to fully start (check the status in the taskbar)

2. **Build and Start the Container**
   ```bash
   # Both Windows and Linux/Mac
   docker-compose up
   ```
   The first time you run this, it will:
   - Build the Docker image (this may take a few minutes)
   - Install all necessary dependencies
   - Start the development server

3. **Access the Site**
   - Open your browser
   - Navigate to [http://localhost:4000](http://localhost:4000)
   - You should see the MAP Tournament Wiki homepage

4. **LiveReload**
   The development server includes LiveReload, which means:
   - Changes to files will automatically trigger a rebuild
   - Your browser will automatically refresh to show changes
   - No need to manually restart the server for most changes

## Development Workflow

### Making Changes

1. **Edit Files**
   - All content is written in Markdown
   - Files are organized in the following structure:
     ```
     .
     ├── _tournament-info/   # Main tournament information
     ├── _includes/         # Reusable components
     ├── _layouts/         # Page layouts
     ├── _sass/           # Stylesheets
     └── assets/          # Images and other static files
     ```

2. **Adding New Pages**
   - Create a new `.md` file in the appropriate directory
   - Include the necessary front matter:
     ```yaml
     ---
     layout: page
     title: Your Page Title
     parent: Parent Page Title (if applicable)
     nav_order: X
     ---
     ```

3. **Local Testing**
   - Changes will appear automatically at [http://localhost:4000](http://localhost:4000)
   - Check the Docker console output for any build errors

### Common Tasks

#### Stopping the Development Server
```bash
# If running in foreground:
# Windows: Ctrl+C, then type 'Y' when prompted
# Linux/Mac: Ctrl+C

# If running in background:
# Both Windows and Linux/Mac:
docker-compose down
```

#### Rebuilding After Dependency Changes
If you modify `Gemfile` or `Dockerfile`:
```bash
# Both Windows and Linux/Mac:
docker-compose down
docker-compose build --no-cache
docker-compose up
```

#### Clearing Cache
```bash
# Windows:
docker-compose down
rmdir /s /q .jekyll-cache
docker-compose up

# Linux/Mac:
docker-compose down
rm -rf .jekyll-cache
docker-compose up
```

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```
   Error: A server is already running at port 4000
   ```
   Solution:
   ```bash
   # Both Windows and Linux/Mac:
   docker-compose down

   # If persists:
   # Both Windows and Linux/Mac:
   docker ps  # Check for running containers
   docker kill <container-id>

   # Alternative for Windows (if port 4000 is still blocked):
   netstat -ano | findstr :4000
   taskkill /PID <PID> /F
   ```

2. **Permission Issues**
   If you encounter permission errors with generated files:
   ```bash
   # Windows (Run PowerShell as Administrator):
   takeown /F . /R
   icacls . /reset /T

   # Linux/Mac:
   sudo chown -R $USER:$USER .
   ```

3. **Build Failures**
   If the site fails to build:
   - Check the Docker console output for error messages
   - Verify your front matter syntax in recently changed files
   - Ensure all required files are present

4. **Line Ending Issues (Windows)**
   If you encounter strange errors about line endings:
   ```bash
   # Configure Git to handle line endings
   git config --global core.autocrlf true
   
   # Then re-clone the repository
   cd ..
   rm -rf map_tournament_wiki  # Linux/Mac
   rmdir /s /q map_tournament_wiki  # Windows
   git clone https://github.com/sponnify/map_tournament_wiki.git
   ```

### Getting Help

If you encounter issues not covered here:
1. Check the [Jekyll Documentation](https://jekyllrb.com/docs/)
2. Create an issue on the GitHub repository
3. Contact the development team through Discord

## Contributing

1. **Create a Branch**
   ```bash
   # Both Windows and Linux/Mac:
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Follow the existing code style
   - Update documentation as needed
   - Test thoroughly locally

3. **Commit Your Changes**
   ```bash
   # Both Windows and Linux/Mac:
   git add .
   git commit -m "Descriptive commit message"
   ```

4. **Create a Pull Request**
   - Push your branch to GitHub
   - Create a Pull Request with a clear description
   - Wait for review and address any feedback

## Production Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The production site uses the configuration in `_config.yml` with the correct baseurl for GitHub Pages hosting.

## Notes

- The site uses the Just the Docs theme for documentation
- All development should follow the Jekyll best practices
- Maintain compatibility with GitHub Pages when making changes
- Test all changes locally before pushing to production

## File Structure Reference

```
map_tournament_wiki/
├── _tournament-info/   # Tournament documentation
├── _includes/         # Reusable components
├── _layouts/         # Page layouts
├── _sass/           # Stylesheets
├── assets/          # Static files
├── .gitignore      # Git ignore rules
├── _config.yml     # Production configuration
├── _config_dev.yml # Development configuration
├── Gemfile        # Ruby dependencies
├── docker-compose.yml # Docker configuration
└── README.md      # This file
```