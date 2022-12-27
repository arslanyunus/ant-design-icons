// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SendSquareBulkSvg from '@ant-design/icons-svg/lib/asn/SendSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SendSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SendSquareBulk: SendSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SendSquareBulkSvg}></AntdIcon>;
};

SendSquareBulk.displayName = 'SendSquareBulk';
SendSquareBulk.inheritAttrs = false;
export default SendSquareBulk;