// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSearchLinearSvg from '@ant-design/icons-svg/lib/asn/HeartSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSearchLinear: HeartSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSearchLinearSvg}></AntdIcon>;
};

HeartSearchLinear.displayName = 'HeartSearchLinear';
HeartSearchLinear.inheritAttrs = false;
export default HeartSearchLinear;