// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenToolLinearSvg from '@ant-design/icons-svg/lib/asn/PenToolLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenToolLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenToolLinear: PenToolLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenToolLinearSvg}></AntdIcon>;
};

PenToolLinear.displayName = 'PenToolLinear';
PenToolLinear.inheritAttrs = false;
export default PenToolLinear;