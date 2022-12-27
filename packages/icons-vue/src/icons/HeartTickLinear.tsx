// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartTickLinearSvg from '@ant-design/icons-svg/lib/asn/HeartTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartTickLinear: HeartTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartTickLinearSvg}></AntdIcon>;
};

HeartTickLinear.displayName = 'HeartTickLinear';
HeartTickLinear.inheritAttrs = false;
export default HeartTickLinear;