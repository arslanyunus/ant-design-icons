// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HospitalBulkSvg from '@ant-design/icons-svg/lib/asn/HospitalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HospitalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HospitalBulk: HospitalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HospitalBulkSvg}></AntdIcon>;
};

HospitalBulk.displayName = 'HospitalBulk';
HospitalBulk.inheritAttrs = false;
export default HospitalBulk;