FROM elixir:1.10-alpine AS build

RUN apk add --update build-base

RUN mkdir /app
WORKDIR /app

RUN mix local.hex --force && \
    mix local.rebar --force

ENV MIX_ENV=prod
ARG DB_PASSWORD
ARG GUARDIAN_SECRET
ARG SECRET_KEY_BASE
ARG SENDGRID_API_KEY
ARG STRIPE_SECRET

COPY mix.exs mix.lock ./
COPY config config
RUN mix deps.get
RUN mix deps.compile

COPY lib lib
COPY priv priv
RUN mix compile
RUN mix release

FROM alpine:3.11.6
RUN apk add --update bash openssl ncurses-libs

RUN mkdir /app
WORKDIR /app

COPY --from=build /app/_build/prod/rel/ferret_rescue ./
COPY deploy/entrypoint.sh .
CMD ["./entrypoint.sh"]
