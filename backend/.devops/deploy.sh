#!/bin/sh

set -e

cd "`dirname $0`"/..

export DOCKER_HOST="ssh://michael@arctic"
COMMIT_SHA=$(git rev-parse HEAD)

docker buildx build -t ghcr.io/michaelst/ferret-rescue-api:$COMMIT_SHA . --push

helm upgrade --install ferret-rescue-api oci://ghcr.io/michaelst/helm/cloud-57 \
  -f .devops/helm/values.yaml \
  --set image.repository=ghcr.io/michaelst/ferret-rescue-api \
  --set image.tag=$COMMIT_SHA \
  --version 1.0.6 \
  --atomic \
  -n ferret-rescue-api
