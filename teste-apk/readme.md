## Criando projeto utilizando template blank typescript
npx create-expo-app --template blank-typescript 

## Converter projeto para React-Native
npx expo prebuild --platform android

## Adicionamos o react-native-cli no projeto
"devDependences" : {
  "@react-native-community/cli": "latest"
}

## npm i para puxar o react-nativ-cli

## verificando erros na maquina
npx react-native doctor

### apertar e corrigir os erros

## gerando o apk
Na pasta android do projeto, rodar os seguintes comandos:
- gradlew clean
- gradlew assembleRelease