// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElectricityBrokenSvg from '@ant-design/icons-svg/lib/asn/ElectricityBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElectricityBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElectricityBroken: ElectricityBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElectricityBrokenSvg}></AntdIcon>;
};

ElectricityBroken.displayName = 'ElectricityBroken';
ElectricityBroken.inheritAttrs = false;
export default ElectricityBroken;