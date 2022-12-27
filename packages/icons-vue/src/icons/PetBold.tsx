// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PetBoldSvg from '@ant-design/icons-svg/lib/asn/PetBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PetBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PetBold: PetBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PetBoldSvg}></AntdIcon>;
};

PetBold.displayName = 'PetBold';
PetBold.inheritAttrs = false;
export default PetBold;