// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SizeLinearSvg from '@ant-design/icons-svg/lib/asn/SizeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SizeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SizeLinear: SizeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SizeLinearSvg}></AntdIcon>;
};

SizeLinear.displayName = 'SizeLinear';
SizeLinear.inheritAttrs = false;
export default SizeLinear;