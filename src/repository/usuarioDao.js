const usuarios = (usurio) => {
    const validarEmailandClave = async(user) => {
        let cond = {
            where: {
                email: user.email,
                password: user.password
            }
        }
        return usurio.findOne(cond);
    }

    return {
        validarEmailandClave
    }
}
module.exports = usuarios