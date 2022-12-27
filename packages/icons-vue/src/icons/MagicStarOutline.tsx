// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicStarOutlineSvg from '@ant-design/icons-svg/lib/asn/MagicStarOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicStarOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicStarOutline: MagicStarOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicStarOutlineSvg}></AntdIcon>;
};

MagicStarOutline.displayName = 'MagicStarOutline';
MagicStarOutline.inheritAttrs = false;
export default MagicStarOutline;