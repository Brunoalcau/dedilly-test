import useDynamicSVGImport from "../../hooks/useDynamicSVGImport";
import { IconName } from "../../@type/icons";
import { Dict } from '../../@type/Dict'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName | string;
  mode?: 'dark' | 'light',
  size?: string
}

const mapSize: Dict = {
  small: 26,
  medium: 62,
  large: 180
};

const getSize = (size: string) => ({
  width: mapSize[`${size}`],
  height: mapSize[size]
});

export const Icon = ({ name, size = 'large', ...rest }: IconProps) => {

  const { error, SvgIcon, loading } = useDynamicSVGImport(`${name}`);

  const { width, height } = getSize(size);


  if (error) {
    return '?';
  }
  if (loading) {
    return ''
  }

  if (SvgIcon) {
    return <SvgIcon height={width} width={height} {...rest} />;
  }
};

