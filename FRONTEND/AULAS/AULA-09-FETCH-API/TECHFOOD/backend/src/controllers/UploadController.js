class UploadController {
  async upload(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "Nenhum arquivo enviado",
        });
      }

      return res.status(201).json({
        sucesso: true,
        mensagem: "Arquivo enviado com sucesso",

        arquivo: {
          nomeOriginal: req.file.originalname,
          nomeSalvo: req.file.filename,
          tipo: req.file.mimetype,
          tamanho: req.file.size,
          caminho: `/uploads/${req.file.filename}`,
        },
      });
    } catch (erro) {
      return res.status(500).json({
        sucesso: false,
        mensagem: "Erro no upload",
        erro: erro.message,
      });
    }
  }
}

module.exports = new UploadController();
