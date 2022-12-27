// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageBulkSvg from '@ant-design/icons-svg/lib/asn/MessageBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageBulk: MessageBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageBulkSvg}></AntdIcon>;
};

MessageBulk.displayName = 'MessageBulk';
MessageBulk.inheritAttrs = false;
export default MessageBulk;