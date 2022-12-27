// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalStarTwoToneSvg from '@ant-design/icons-svg/lib/asn/MedalStarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalStarTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalStarTwoTone: MedalStarTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalStarTwoToneSvg}></AntdIcon>;
};

MedalStarTwoTone.displayName = 'MedalStarTwoTone';
MedalStarTwoTone.inheritAttrs = false;
export default MedalStarTwoTone;