FROM ruby:3.1-alpine

# Install build dependencies
RUN apk add --no-cache \
    build-base \
    gcc \
    cmake \
    git \
    nodejs \
    npm

# Install Bundler and Jekyll
RUN gem install bundler jekyll

WORKDIR /srv/jekyll

# Copy Gemfile and Gemfile.lock to the container
COPY Gemfile Gemfile.lock ./

# Install Jekyll and dependencies from Gemfile
RUN bundle install

# Copy the rest of the application
COPY . .

# Expose port 4000
EXPOSE 4000

# Command to run Jekyll with livereload enabled
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]