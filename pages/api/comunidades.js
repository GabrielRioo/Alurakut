import { SiteClient } from "datocms-client";

export default async function recebedorDeRequest(req, res) {
  if (req.method === "POST") {
    const TOKEN = "e39a0a9a791675dee4e07e57ac8157";
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: "976217", // ID do model de comunidade criado pelo Dato.
      title: "Comunidade de Teste",
      imageUrl: "https://github.com/GabrielRioo.png",
      creatorSlug: "GabrielRioo",
    });

    console.log(TOKEN);
    res.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
  }
}
