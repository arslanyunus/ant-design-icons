// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RouteSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/RouteSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RouteSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RouteSquareBroken: RouteSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RouteSquareBrokenSvg}></AntdIcon>;
};

RouteSquareBroken.displayName = 'RouteSquareBroken';
RouteSquareBroken.inheritAttrs = false;
export default RouteSquareBroken;