// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartLinearSvg from '@ant-design/icons-svg/lib/asn/HeartLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartLinear: HeartLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartLinearSvg}></AntdIcon>;
};

HeartLinear.displayName = 'HeartLinear';
HeartLinear.inheritAttrs = false;
export default HeartLinear;