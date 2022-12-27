// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElectricityTwoToneSvg from '@ant-design/icons-svg/lib/asn/ElectricityTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElectricityTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElectricityTwoTone: ElectricityTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElectricityTwoToneSvg}></AntdIcon>;
};

ElectricityTwoTone.displayName = 'ElectricityTwoTone';
ElectricityTwoTone.inheritAttrs = false;
export default ElectricityTwoTone;