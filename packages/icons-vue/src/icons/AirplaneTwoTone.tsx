// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneTwoToneSvg from '@ant-design/icons-svg/lib/asn/AirplaneTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneTwoTone: AirplaneTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneTwoToneSvg}></AntdIcon>;
};

AirplaneTwoTone.displayName = 'AirplaneTwoTone';
AirplaneTwoTone.inheritAttrs = false;
export default AirplaneTwoTone;