// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HospitalBoldSvg from '@ant-design/icons-svg/lib/asn/HospitalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HospitalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HospitalBold: HospitalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HospitalBoldSvg}></AntdIcon>;
};

HospitalBold.displayName = 'HospitalBold';
HospitalBold.inheritAttrs = false;
export default HospitalBold;