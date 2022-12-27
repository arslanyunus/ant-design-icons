// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicStarTwoToneSvg from '@ant-design/icons-svg/lib/asn/MagicStarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicStarTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicStarTwoTone: MagicStarTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicStarTwoToneSvg}></AntdIcon>;
};

MagicStarTwoTone.displayName = 'MagicStarTwoTone';
MagicStarTwoTone.inheritAttrs = false;
export default MagicStarTwoTone;