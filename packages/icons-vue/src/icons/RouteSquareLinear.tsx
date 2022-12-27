// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RouteSquareLinearSvg from '@ant-design/icons-svg/lib/asn/RouteSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RouteSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RouteSquareLinear: RouteSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RouteSquareLinearSvg}></AntdIcon>;
};

RouteSquareLinear.displayName = 'RouteSquareLinear';
RouteSquareLinear.inheritAttrs = false;
export default RouteSquareLinear;