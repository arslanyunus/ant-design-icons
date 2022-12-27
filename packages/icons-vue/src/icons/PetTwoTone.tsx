// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PetTwoToneSvg from '@ant-design/icons-svg/lib/asn/PetTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PetTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PetTwoTone: PetTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PetTwoToneSvg}></AntdIcon>;
};

PetTwoTone.displayName = 'PetTwoTone';
PetTwoTone.inheritAttrs = false;
export default PetTwoTone;