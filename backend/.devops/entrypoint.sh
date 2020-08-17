#!/bin/sh
./bin/ferret_rescue eval "FerretRescue.Release.migrate()"
./bin/ferret_rescue start
