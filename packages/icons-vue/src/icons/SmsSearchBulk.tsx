// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsSearchBulkSvg from '@ant-design/icons-svg/lib/asn/SmsSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsSearchBulk: SmsSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsSearchBulkSvg}></AntdIcon>;
};

SmsSearchBulk.displayName = 'SmsSearchBulk';
SmsSearchBulk.inheritAttrs = false;
export default SmsSearchBulk;