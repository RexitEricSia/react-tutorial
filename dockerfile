# Use base nginx image
FROM nginx:alpine

# Remove default html
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf