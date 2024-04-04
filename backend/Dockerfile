# syntax=docker/dockerfile:1.4

# build app
FROM elixir:1.16-slim AS builder

RUN apt-get update -y && \
    apt-get install -y build-essential git ca-certificates; \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN mix local.hex --force && \
    mix local.rebar --force

ENV MIX_ENV=prod \
    LANG=C.UTF-8

COPY mix.exs mix.lock ./
COPY config/config.exs config/prod.exs config/runtime.exs ./config/
COPY lib lib
COPY priv priv
COPY rel rel

RUN --mount=type=cache,target=/app/deps \
    --mount=type=cache,target=/app/_build/prod \
      rm -rf /app/_build/prod/rel && \
      mix do deps.get --only prod, release && \
      # copy out of the cache so it is available
      cp -r /app/_build/prod/rel/ferret_rescue ./release

# Build release image
FROM ubuntu:20.04

RUN apt-get update -y && apt-get install -y libstdc++6 openssl libncurses5 locales \
  && apt-get clean \
  && rm -f /var/lib/apt/lists/*_*

RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && locale-gen

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

WORKDIR "/app"
RUN chown nobody /app

ENV MIX_ENV="prod"

COPY --from=builder --chown=nobody:root /app/release ./
COPY --chown=nobody:root .devops/entrypoint.sh .

USER nobody

CMD ["./entrypoint.sh"]