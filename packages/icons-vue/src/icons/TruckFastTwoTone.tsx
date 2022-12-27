// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckFastTwoToneSvg from '@ant-design/icons-svg/lib/asn/TruckFastTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckFastTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckFastTwoTone: TruckFastTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckFastTwoToneSvg}></AntdIcon>;
};

TruckFastTwoTone.displayName = 'TruckFastTwoTone';
TruckFastTwoTone.inheritAttrs = false;
export default TruckFastTwoTone;