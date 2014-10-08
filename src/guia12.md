# Informática - REDES

- Disciplina: **Laboratório de Fundamentos de Informática**
- Professor: **[Flávio Coutinho](mailto:coutinho@decom.cefetmg.br)**

---
## Guia 12

- Assunto: **Backup** (Cópia de Segurança)
- Objetivos:
  1. Entender o processo de _backup_
  1. Conhecer as etapas e os tipos diferentes de _backup_
  1. Praticar a criação de _backups_ no Windows
  1. Entender e praticar o conceito de cópia criptografada de dados

---
## Roteiro

1. _Backup_
   <marquee>ENTREGA DE EXERCÍCIO via Moodle</marquee>
1. Criptografia
   <marquee>ENTREGA DE EXERCÍCIO via Moodle</marquee>

---
# Parte 1: _Backup_

---
![](images/suporte-backup.jpg)

---
## Definição de _Backup_

- Do inglês, "cópia de segurança"
- Pode se referir a:
  1. Uma cópia de arquivos que foi realizada no passado
  1. O processo de criação de cópias (de segurança) de arquivos
- Propósitos
  - Primário: recuperar dados que foram perdidos por exclusão ou corrompimento
    - Exemplos: ataque, exclusão acidental, dano no disco rígido etc.
  - Secundário: recuperar dados de um momento anterior
    - Exemplos: desfazer-se das últimas alterações, manter histórico de
      modificações

---
## Características

- A cópia dos arquivos pode ocupar muito espaço
- Em vez de fazer uma cópia simples, os arquivos são
  1. Comprimidos, para ocupar menos espaço
  1. Deduplicados, para evitar cópias idênticas do mesmo conteúdo
  1. **Criptografados**, para proteger os dados contra acesso ilegítimo

---
## Tipos de Mídia

- Fita magnética
- Disco rígico
- Disco óptico
- SSD
- Remoto
- Disquete

---
## Estratégias

1. Não estruturada
  - Exemplo: cópias realizadas sem rotina
1. Imagem completa
  - Exemplo: deep freeze
1. Incremental ou Diferencial
  - Uma cópia completa, seguida de pequenas cópias apenas do que foi alterado
1. Proteção contínua
  - O sistema armazena uma lista de alterações no momento que elas são realizadas

---
## Exercício 1

### Ferramenta de _backup_ do Windows XP

- Faça download dos [arquivos de exemplo](https://raw.githubusercontent.com/fegemo/cefet-lfui/master/src/MeusArquivos.zip)
- Descompacte-os em sua Área de Trabalho em uma pasta chamada "Meus Arquivos"
- Você deve criar um _backup_ da pasta "Meus Arquivos" usando o utilitário de
  _backups_ do Windows

---
## Exercício 1 (cont.)

- Após criado o _backup_, exclua a pasta "Meus Arquivos" da sua Área de Trabalho
- Então, você deve **restaurar** o _backup_ para recuperar a pasta

  Você deve entregar, **no Moodle**, um arquivo de texto contendo uma descrição
  breve dos procedimentos para realização do _backup_ e restauração. Você deve
  colocar capturas de tela também.

---
## Utilitário de _backup_ do Windows XP

![](images/backup-1.jpg)

---
![](images/backup-2.jpg)

---
![](images/backup-3.jpg)

---
![](images/backup-4.jpg)

---
![](images/backup-5.jpg)

---
![](images/backup-6.jpg)

---
![](images/backup-7.jpg)

---
![](images/backup-8.jpg)

---
![](images/backup-9.jpg)

---
![](images/backup-10.jpg)

---
![](images/backup-11.jpg)

---
![](images/backup-12.jpg)

---
# Criptografia

---
## Exercício 2

Você deve criptografar uma mensagem [usando o algoritmo AES](http://aesencryption.net/) (_Advanced Encryption
 Standard_) com seu número de matrícula e então enviá-la para seu colega ao
lado. O colega que receber deve descriptografar a mensagem e responder de volta,
 usando seu próprio número de matrículo como segredo.

Você deve entregar uma captura da tela da mensagem que você enviou e outra da
mensagem que você recebeu, já descriptografada.

---
# Referências

- [Ferramenta de Backup do Windows XP](http://www.baboo.com.br/tutorial/tutorial-de-windows/tutorial-windows-xp/ferramenta-de-backup-do-windows-xp-2/)
- [Microsoft sobre Backup no Windows XP](https://www.microsoft.com/brasil/windowsxp/using/setup/learnmore/bott_03july14.mspx)
- [Artigo da KB da Microsoft sobre o utilitário Ntbackup.msc](http://support2.microsoft.com/kb/308422/pt-br)