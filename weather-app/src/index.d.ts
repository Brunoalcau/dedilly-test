declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

export default { title: 'Story' }
export function Story() {
  return 'Pass!'
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";