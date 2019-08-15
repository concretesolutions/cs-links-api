# cs-links-api

Slack integrations for slash-command

## Badges

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d025ca3e72e543569bfd9864d6853645)](https://app.codacy.com/app/concrete/cs-links-api?utm_source=github.com&utm_medium=referral&utm_content=cs-joao-felipe/cs-links-api&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/cs-joao-felipe/cs-links-api.svg?branch=master)](https://travis-ci.org/cs-joao-felipe/cs-links-api)
[![codecov](https://codecov.io/gh/cs-joao-felipe/cs-links-api/branch/master/graph/badge.svg)](https://codecov.io/gh/cs-joao-felipe/cs-links-api)

## How to use on Slack

Just type the slash command **link** with the desired keyword, as shown below.

`/link guia`

## Available keyword (for now)

| Keyword     | Expected Result |
| ----------- | --------------- |
| todos       | Return all available links |
| valores     | Return Valores Link |
| guia        | Return Guia de Sobrevivência link |
| viagem, viagens | Return Viagens link |
| benefício, beneficio, benefícios, beneficios, salário, salario | Return Salário & Benefícios link|

## **Disclaimer**

 Since it´s deployed on Heroku free tier your first usage might render an error due to the fact that the instance was in a dormant state.
