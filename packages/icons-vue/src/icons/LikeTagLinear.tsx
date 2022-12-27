// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeTagLinearSvg from '@ant-design/icons-svg/lib/asn/LikeTagLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeTagLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeTagLinear: LikeTagLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeTagLinearSvg}></AntdIcon>;
};

LikeTagLinear.displayName = 'LikeTagLinear';
LikeTagLinear.inheritAttrs = false;
export default LikeTagLinear;