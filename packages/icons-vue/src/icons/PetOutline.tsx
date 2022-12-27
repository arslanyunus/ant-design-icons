// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PetOutlineSvg from '@ant-design/icons-svg/lib/asn/PetOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PetOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PetOutline: PetOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PetOutlineSvg}></AntdIcon>;
};

PetOutline.displayName = 'PetOutline';
PetOutline.inheritAttrs = false;
export default PetOutline;