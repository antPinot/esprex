const layout = require('../layout')

module.exports = ` ${layout}
<body>
    <form action="/contact" method="POST">
        <label>
            <input type="text" name ="saisie">
        </label>
        <button type="submit">Envoyer</button>
    </form>
    <a href="index">Retour au menu</a>
</body>
</html>`