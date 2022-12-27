// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PetBrokenSvg from '@ant-design/icons-svg/lib/asn/PetBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PetBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PetBroken: PetBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PetBrokenSvg}></AntdIcon>;
};

PetBroken.displayName = 'PetBroken';
PetBroken.inheritAttrs = false;
export default PetBroken;