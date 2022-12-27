// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaskLinearSvg from '@ant-design/icons-svg/lib/asn/MaskLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaskLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaskLinear: MaskLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaskLinearSvg}></AntdIcon>;
};

MaskLinear.displayName = 'MaskLinear';
MaskLinear.inheritAttrs = false;
export default MaskLinear;