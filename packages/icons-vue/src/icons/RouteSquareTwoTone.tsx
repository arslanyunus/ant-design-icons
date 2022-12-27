// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RouteSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/RouteSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RouteSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RouteSquareTwoTone: RouteSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RouteSquareTwoToneSvg}></AntdIcon>;
};

RouteSquareTwoTone.displayName = 'RouteSquareTwoTone';
RouteSquareTwoTone.inheritAttrs = false;
export default RouteSquareTwoTone;