// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsEditBulkSvg from '@ant-design/icons-svg/lib/asn/SmsEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsEditBulk: SmsEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsEditBulkSvg}></AntdIcon>;
};

SmsEditBulk.displayName = 'SmsEditBulk';
SmsEditBulk.inheritAttrs = false;
export default SmsEditBulk;