// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircleLinearSvg from '@ant-design/icons-svg/lib/asn/FlashCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircleLinear: FlashCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircleLinearSvg}></AntdIcon>;
};

FlashCircleLinear.displayName = 'FlashCircleLinear';
FlashCircleLinear.inheritAttrs = false;
export default FlashCircleLinear;