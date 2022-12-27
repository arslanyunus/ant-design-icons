// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HospitalOutlineSvg from '@ant-design/icons-svg/lib/asn/HospitalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HospitalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HospitalOutline: HospitalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HospitalOutlineSvg}></AntdIcon>;
};

HospitalOutline.displayName = 'HospitalOutline';
HospitalOutline.inheritAttrs = false;
export default HospitalOutline;