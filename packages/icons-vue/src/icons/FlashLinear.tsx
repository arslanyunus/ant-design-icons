// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashLinearSvg from '@ant-design/icons-svg/lib/asn/FlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashLinear: FlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashLinearSvg}></AntdIcon>;
};

FlashLinear.displayName = 'FlashLinear';
FlashLinear.inheritAttrs = false;
export default FlashLinear;