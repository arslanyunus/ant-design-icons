// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalStarBoldSvg from '@ant-design/icons-svg/lib/asn/MedalStarBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalStarBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalStarBold: MedalStarBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalStarBoldSvg}></AntdIcon>;
};

MedalStarBold.displayName = 'MedalStarBold';
MedalStarBold.inheritAttrs = false;
export default MedalStarBold;