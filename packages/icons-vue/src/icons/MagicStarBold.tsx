// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicStarBoldSvg from '@ant-design/icons-svg/lib/asn/MagicStarBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicStarBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicStarBold: MagicStarBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicStarBoldSvg}></AntdIcon>;
};

MagicStarBold.displayName = 'MagicStarBold';
MagicStarBold.inheritAttrs = false;
export default MagicStarBold;