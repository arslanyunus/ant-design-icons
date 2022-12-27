// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RouteSquareBoldSvg from '@ant-design/icons-svg/lib/asn/RouteSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RouteSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RouteSquareBold: RouteSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RouteSquareBoldSvg}></AntdIcon>;
};

RouteSquareBold.displayName = 'RouteSquareBold';
RouteSquareBold.inheritAttrs = false;
export default RouteSquareBold;