// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HospitalTwoToneSvg from '@ant-design/icons-svg/lib/asn/HospitalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HospitalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HospitalTwoTone: HospitalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HospitalTwoToneSvg}></AntdIcon>;
};

HospitalTwoTone.displayName = 'HospitalTwoTone';
HospitalTwoTone.inheritAttrs = false;
export default HospitalTwoTone;