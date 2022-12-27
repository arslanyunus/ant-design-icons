// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlurLinearSvg from '@ant-design/icons-svg/lib/asn/BlurLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlurLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlurLinear: BlurLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlurLinearSvg}></AntdIcon>;
};

BlurLinear.displayName = 'BlurLinear';
BlurLinear.inheritAttrs = false;
export default BlurLinear;