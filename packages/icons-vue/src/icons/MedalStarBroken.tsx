// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalStarBrokenSvg from '@ant-design/icons-svg/lib/asn/MedalStarBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalStarBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalStarBroken: MedalStarBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalStarBrokenSvg}></AntdIcon>;
};

MedalStarBroken.displayName = 'MedalStarBroken';
MedalStarBroken.inheritAttrs = false;
export default MedalStarBroken;