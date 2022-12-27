// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PetLinearSvg from '@ant-design/icons-svg/lib/asn/PetLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PetLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PetLinear: PetLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PetLinearSvg}></AntdIcon>;
};

PetLinear.displayName = 'PetLinear';
PetLinear.inheritAttrs = false;
export default PetLinear;