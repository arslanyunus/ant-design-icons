// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RouteSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/RouteSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RouteSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RouteSquareOutline: RouteSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RouteSquareOutlineSvg}></AntdIcon>;
};

RouteSquareOutline.displayName = 'RouteSquareOutline';
RouteSquareOutline.inheritAttrs = false;
export default RouteSquareOutline;