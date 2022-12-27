// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartEditLinearSvg from '@ant-design/icons-svg/lib/asn/HeartEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartEditLinear: HeartEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartEditLinearSvg}></AntdIcon>;
};

HeartEditLinear.displayName = 'HeartEditLinear';
HeartEditLinear.inheritAttrs = false;
export default HeartEditLinear;