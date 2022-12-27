// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/HeartRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartRemoveLinear: HeartRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartRemoveLinearSvg}></AntdIcon>;
};

HeartRemoveLinear.displayName = 'HeartRemoveLinear';
HeartRemoveLinear.inheritAttrs = false;
export default HeartRemoveLinear;