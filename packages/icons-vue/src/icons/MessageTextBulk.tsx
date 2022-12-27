// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTextBulkSvg from '@ant-design/icons-svg/lib/asn/MessageTextBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTextBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTextBulk: MessageTextBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTextBulkSvg}></AntdIcon>;
};

MessageTextBulk.displayName = 'MessageTextBulk';
MessageTextBulk.inheritAttrs = false;
export default MessageTextBulk;