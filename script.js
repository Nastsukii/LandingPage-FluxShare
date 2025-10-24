   // Função para aplicar o tema
        function applyTheme(theme) {
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            const themeBtn = document.getElementById('theme-toggle');
            themeBtn.textContent = theme === 'light' ? '☀️' : '🌙';
        }

        // Função para alternar o tema
        function toggleTheme() {
            const currentTheme = document.body.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        }

        // Carregar tema salvo ou padrão
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            applyTheme(savedTheme);

            // Adicionar evento ao botão
            const themeBtn = document.getElementById('theme-toggle');
            themeBtn.addEventListener('click', toggleTheme);
        });