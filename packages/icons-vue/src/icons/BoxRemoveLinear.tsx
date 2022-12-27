// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/BoxRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxRemoveLinear: BoxRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxRemoveLinearSvg}></AntdIcon>;
};

BoxRemoveLinear.displayName = 'BoxRemoveLinear';
BoxRemoveLinear.inheritAttrs = false;
export default BoxRemoveLinear;