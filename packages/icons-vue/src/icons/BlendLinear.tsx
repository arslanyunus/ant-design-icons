// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlendLinearSvg from '@ant-design/icons-svg/lib/asn/BlendLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlendLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlendLinear: BlendLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlendLinearSvg}></AntdIcon>;
};

BlendLinear.displayName = 'BlendLinear';
BlendLinear.inheritAttrs = false;
export default BlendLinear;