// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PetBulkSvg from '@ant-design/icons-svg/lib/asn/PetBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PetBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PetBulk: PetBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PetBulkSvg}></AntdIcon>;
};

PetBulk.displayName = 'PetBulk';
PetBulk.inheritAttrs = false;
export default PetBulk;