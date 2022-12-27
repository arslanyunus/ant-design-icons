// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeBrokenSvg from '@ant-design/icons-svg/lib/asn/LikeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeBroken: LikeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeBrokenSvg}></AntdIcon>;
};

LikeBroken.displayName = 'LikeBroken';
LikeBroken.inheritAttrs = false;
export default LikeBroken;