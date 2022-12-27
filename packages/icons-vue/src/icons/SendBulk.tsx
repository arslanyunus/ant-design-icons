// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendBulkSvg from '@ant-design/icons-svg/lib/asn/SendBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendBulk: SendBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendBulkSvg}></AntdIcon>;
};

SendBulk.displayName = 'SendBulk';
SendBulk.inheritAttrs = false;
export default SendBulk;