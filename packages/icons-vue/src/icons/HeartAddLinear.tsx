// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartAddLinearSvg from '@ant-design/icons-svg/lib/asn/HeartAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartAddLinear: HeartAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartAddLinearSvg}></AntdIcon>;
};

HeartAddLinear.displayName = 'HeartAddLinear';
HeartAddLinear.inheritAttrs = false;
export default HeartAddLinear;