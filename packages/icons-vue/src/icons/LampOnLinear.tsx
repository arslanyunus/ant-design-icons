// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampOnLinearSvg from '@ant-design/icons-svg/lib/asn/LampOnLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampOnLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampOnLinear: LampOnLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampOnLinearSvg}></AntdIcon>;
};

LampOnLinear.displayName = 'LampOnLinear';
LampOnLinear.inheritAttrs = false;
export default LampOnLinear;