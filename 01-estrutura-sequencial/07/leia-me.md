# 📂 Estudo de JavaScript: Conversão de Tipos (Casting)

Este diretório faz parte do projeto **meu-universo-js** e contém anotações detalhadas sobre como o JavaScript manipula a tipagem de dados. O foco aqui é entender a diferença entre transformar dados de forma consciente (**Explícita**) e deixar o motor do JS decidir (**Implícita/Coerção**).

---

## 🚀 Conceitos Fundamentais

### 1. Conversão Numérica (String ➔ Number)
Ao lidar com entradas de usuário ou APIs, os números costumam chegar como texto. Temos três formas de tratar isso:

* **`Number(valor)`**: A forma mais rigorosa. Se a string contiver qualquer caractere não numérico (exceto o ponto decimal), o resultado será `NaN`.
* **`parseInt(valor)`**: Extrai apenas o número **inteiro** do início de uma string, ignorando qualquer texto ou decimais que venham depois.
* **`parseFloat(valor)`**: Semelhante ao anterior, mas preserva as casas **decimais**.

> **⚠️ O que é NaN?** Significa *Not a Number*. Ocorre quando o JavaScript tenta converter algo para número mas falha completamente (ex: `Number("abc")`).

### 2. Conversão para Booleano (Truthy vs Falsy)
O JavaScript avalia qualquer valor como "verdadeiro" ou "falso" em contextos lógicos (como dentro de um `if`).

| Valores Falsy (Avaliam como false) | Valores Truthy (Avaliam como true) |
| :--- | :--- |
| `0` | `1`, `-1`, `100` |
| `""` (String vazia) | `"0"`, `"texto"`, `" "` (espaço) |
| `null` | `[]` (Arrays mesmo vazios) |
| `undefined` | `{}` (Objetos mesmo vazios) |
| `NaN` | `true` |

### 3. Conversão Implícita vs Explícita

* **Explícita:** É quando nós, programadores, usamos funções para forçar a mudança (Ex: `String(10)` ou `Number("5")`). **É a prática recomendada.**
* **Implícita (Coerção):** O JavaScript tenta "ajudar" e converte sozinho.
    * **Soma (`+`):** Se houver uma string, ele prioriza juntar os textos (Ex: `20 + "30" = "2030"`).
    * **Outros (`-`, `*`, `/`):** Ele tenta converter o texto em número para fazer a conta (Ex: `"20" * "2" = 40`).

---

## 🛡️ Boas Práticas de Segurança
1.  **Não confies na Coerção:** Sempre que receber dados externos, usa conversão explícita para evitar que `1 + 1` vire `"