// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElectricityLinearSvg from '@ant-design/icons-svg/lib/asn/ElectricityLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElectricityLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElectricityLinear: ElectricityLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElectricityLinearSvg}></AntdIcon>;
};

ElectricityLinear.displayName = 'ElectricityLinear';
ElectricityLinear.inheritAttrs = false;
export default ElectricityLinear;