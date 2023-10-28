
/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
содержимое конфигурационного файла в виде строки, находит в нём переменные
окружения, которые нужно передать и возвращает их в виде строки формата
"имя1=значение1,имя2=значение2,имя3=значение3,...".

Переменные окружения в конфигурационном файле устанавливаются командой
environment, после которой в кавычках указан список переменных через запятую.

  environment="X_FORWARDED_MAIL=tirion@google.com,X_FORWARDED_HOME=/home/tirion,language=en"

Те переменные, которые нужно пробросить, начинаются с префикса X_FORWARDED_.
В итоговую строку имена переменных должны попадать без этого префикса.
 Например, если в конфигурационном файле переменная устанавливается так:
 X_FORWARDED_HOME=/home/tirion, то в итоговой строке она должна выглядеть так:
 "HOME=/home/tirion".
*/

import { readFileSync } from 'fs';

const PREFIX = 'X_FORWARDED_';

const getForwardedVariables = content => [].concat(
  ...content
  .split('\n')
  .filter(line => line.startsWith('environment'))
  .map(line => line.slice(line.indexOf('"') + 1, -1))
  .map(line => line.split(',')))
  .filter(e => e.startsWith(PREFIX))
  .map(e => e.replaceAll(PREFIX, ''))
  .join(',');

// ---------------------------------------------------------------------------
const filename = 's1.conf';
const content = readFileSync(filename, 'utf-8');
const result = getForwardedVariables(content);
console.log(result);
