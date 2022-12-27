// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeLinearSvg from '@ant-design/icons-svg/lib/asn/EyeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeLinear: EyeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeLinearSvg}></AntdIcon>;
};

EyeLinear.displayName = 'EyeLinear';
EyeLinear.inheritAttrs = false;
export default EyeLinear;