const baseExtensionsUrl = `${process.env.PUBLIC_URL}/resource/`;

export const getImgUrl = (imgName: string = '') => {
  return `${baseExtensionsUrl}${imgName}`;
}
