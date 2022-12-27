// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalLinearSvg from '@ant-design/icons-svg/lib/asn/MedalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalLinear: MedalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalLinearSvg}></AntdIcon>;
};

MedalLinear.displayName = 'MedalLinear';
MedalLinear.inheritAttrs = false;
export default MedalLinear;