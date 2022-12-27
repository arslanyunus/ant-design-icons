// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElectricityBoldSvg from '@ant-design/icons-svg/lib/asn/ElectricityBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElectricityBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElectricityBold: ElectricityBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElectricityBoldSvg}></AntdIcon>;
};

ElectricityBold.displayName = 'ElectricityBold';
ElectricityBold.inheritAttrs = false;
export default ElectricityBold;