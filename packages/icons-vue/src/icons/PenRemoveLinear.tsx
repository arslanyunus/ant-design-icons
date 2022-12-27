// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/PenRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenRemoveLinear: PenRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenRemoveLinearSvg}></AntdIcon>;
};

PenRemoveLinear.displayName = 'PenRemoveLinear';
PenRemoveLinear.inheritAttrs = false;
export default PenRemoveLinear;