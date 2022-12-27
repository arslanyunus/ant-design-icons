// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeTagBrokenSvg from '@ant-design/icons-svg/lib/asn/LikeTagBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeTagBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeTagBroken: LikeTagBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeTagBrokenSvg}></AntdIcon>;
};

LikeTagBroken.displayName = 'LikeTagBroken';
LikeTagBroken.inheritAttrs = false;
export default LikeTagBroken;