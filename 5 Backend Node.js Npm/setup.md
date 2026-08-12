## Setup TailwindCSS

1. Run this in terminal

    ```
    npm install tailwindcss @tailwindcss/cli 
    ```
2. create src/input.css
    ```
   @import "tailwindcss"; in input.css
   ```
3. Include output.css in html
    ```
   <link href="src/output.css" rel="stylesheet">
   ```
4. Run this in terminal
    ```
    npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
    ```