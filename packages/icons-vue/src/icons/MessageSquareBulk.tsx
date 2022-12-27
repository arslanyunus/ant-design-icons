// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSquareBulkSvg from '@ant-design/icons-svg/lib/asn/MessageSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSquareBulk: MessageSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSquareBulkSvg}></AntdIcon>;
};

MessageSquareBulk.displayName = 'MessageSquareBulk';
MessageSquareBulk.inheritAttrs = false;
export default MessageSquareBulk;