// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElectricityBulkSvg from '@ant-design/icons-svg/lib/asn/ElectricityBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElectricityBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElectricityBulk: ElectricityBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElectricityBulkSvg}></AntdIcon>;
};

ElectricityBulk.displayName = 'ElectricityBulk';
ElectricityBulk.inheritAttrs = false;
export default ElectricityBulk;