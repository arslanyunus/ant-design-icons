// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MagicStarLinearSvg from '@ant-design/icons-svg/lib/asn/MagicStarLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MagicStarLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MagicStarLinear: MagicStarLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MagicStarLinearSvg}></AntdIcon>;
};

MagicStarLinear.displayName = 'MagicStarLinear';
MagicStarLinear.inheritAttrs = false;
export default MagicStarLinear;