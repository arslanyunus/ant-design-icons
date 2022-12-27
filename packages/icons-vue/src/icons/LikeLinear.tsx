// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LikeLinearSvg from '@ant-design/icons-svg/lib/asn/LikeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LikeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LikeLinear: LikeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LikeLinearSvg}></AntdIcon>;
};

LikeLinear.displayName = 'LikeLinear';
LikeLinear.inheritAttrs = false;
export default LikeLinear;