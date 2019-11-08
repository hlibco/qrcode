import QRCode from 'qrcode'

export async function generateQR(text: string): Promise<string> {
  try {
    const qrString = await QRCode.toString(text, { type: 'terminal' })
    const qrDataUrl = await QRCode.toDataURL(text)

    console.log(qrString)
    console.log(qrDataUrl)

    return qrString
  } catch (err) {
    console.error(err)
    throw err
  }
}

generateQR('https://www.google.com/search?q=planet')
