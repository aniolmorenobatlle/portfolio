#!/bin/bash

# Executar la construcció del projecte
echo "Building the project..."
npm run build

# Comprovar si npm run build s'ha completat correctament
if [ $? -ne 0 ]; then
  echo "Build failed!"
  exit 1
fi

# Desplegar el projecte a Netlify
echo "Deploying to Netlify..."
netlify deploy --prod --dir=dist

# Comprovar si netlify deploy s'ha completat correctament
if [ $? -ne 0 ]; then
  echo "Deployment failed!"
  exit 1
fi

echo "Deployment successful!"
