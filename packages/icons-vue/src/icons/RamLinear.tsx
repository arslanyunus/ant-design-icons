// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RamLinearSvg from '@ant-design/icons-svg/lib/asn/RamLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RamLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RamLinear: RamLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RamLinearSvg}></AntdIcon>;
};

RamLinear.displayName = 'RamLinear';
RamLinear.inheritAttrs = false;
export default RamLinear;