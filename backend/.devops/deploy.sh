COMMIT_SHA=$(git rev-parse HEAD)
docker build -t ghcr.io/michaelst/txferretrescue-api:$COMMIT_SHA .
docker push ghcr.io/michaelst/txferretrescue-api:$COMMIT_SHA

helm upgrade --install txferretrescue-api ../../server-config/helm-app \
  -f .devops/helm/values.yaml \
  --set image.repository=ghcr.io/michaelst/txferretrescue-api \
  --set image.tag=$COMMIT_SHA \
  --atomic \
  --debug \
  -n backend