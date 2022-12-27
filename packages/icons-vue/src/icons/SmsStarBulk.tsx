// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsStarBulkSvg from '@ant-design/icons-svg/lib/asn/SmsStarBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsStarBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsStarBulk: SmsStarBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsStarBulkSvg}></AntdIcon>;
};

SmsStarBulk.displayName = 'SmsStarBulk';
SmsStarBulk.inheritAttrs = false;
export default SmsStarBulk;