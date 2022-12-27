// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeDislikeBrokenSvg from '@ant-design/icons-svg/lib/asn/LikeDislikeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeDislikeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeDislikeBroken: LikeDislikeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeDislikeBrokenSvg}></AntdIcon>;
};

LikeDislikeBroken.displayName = 'LikeDislikeBroken';
LikeDislikeBroken.inheritAttrs = false;
export default LikeDislikeBroken;