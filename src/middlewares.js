export const validarCamposPetsMiddleware = (req, res, next) => {
    try {
        const body = req.body;
        const camposObrigatorios = ['nome', 'idade', 'raca', 'nomeTutor'];

        for (const campo of camposObrigatorios) {
            if (!Object.hasOwn(body, campo)) {
                return res.status(400).send({
                    ok: false,
                    mensagem: `O campo ${campo} não foi definido no body.`
                });
            }
            if (body[campo] === null || body[campo] === "") {
                return res.status(400).send({
                    ok: false,
                    mensagem: `O valor do campo ${campo} está vazio.`
                });
            }
        }
        next();
    } catch (error) {
        res.status(500).send({
            ok: false,
            mensagem: error.toString()
        });
    }
}