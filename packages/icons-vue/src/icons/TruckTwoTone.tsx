// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TruckTwoToneSvg from '@ant-design/icons-svg/lib/asn/TruckTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TruckTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TruckTwoTone: TruckTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TruckTwoToneSvg}></AntdIcon>;
};

TruckTwoTone.displayName = 'TruckTwoTone';
TruckTwoTone.inheritAttrs = false;
export default TruckTwoTone;