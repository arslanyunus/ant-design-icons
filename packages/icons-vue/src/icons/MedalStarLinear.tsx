// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalStarLinearSvg from '@ant-design/icons-svg/lib/asn/MedalStarLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalStarLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalStarLinear: MedalStarLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalStarLinearSvg}></AntdIcon>;
};

MedalStarLinear.displayName = 'MedalStarLinear';
MedalStarLinear.inheritAttrs = false;
export default MedalStarLinear;