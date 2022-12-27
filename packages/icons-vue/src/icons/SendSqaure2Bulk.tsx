// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSqaure2BulkSvg from '@ant-design/icons-svg/lib/asn/SendSqaure2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSqaure2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSqaure2Bulk: SendSqaure2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSqaure2BulkSvg}></AntdIcon>;
};

SendSqaure2Bulk.displayName = 'SendSqaure2Bulk';
SendSqaure2Bulk.inheritAttrs = false;
export default SendSqaure2Bulk;