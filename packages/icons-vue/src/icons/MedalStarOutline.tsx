// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalStarOutlineSvg from '@ant-design/icons-svg/lib/asn/MedalStarOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalStarOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalStarOutline: MedalStarOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalStarOutlineSvg}></AntdIcon>;
};

MedalStarOutline.displayName = 'MedalStarOutline';
MedalStarOutline.inheritAttrs = false;
export default MedalStarOutline;