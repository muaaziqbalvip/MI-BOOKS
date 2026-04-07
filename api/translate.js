export default async function handler(req,res){
  if(req.method!=='POST'){return res.status(405).end();}
  const {image,lang}=req.body;
  // Simple pass-through: return same image for demo. Real translate can be plugged here via external API.
  const base64 = image.split(',')[1];
  const buffer = Buffer.from(base64,'base64');
  res.setHeader('Content-Type','image/png');
  res.send(buffer);
}