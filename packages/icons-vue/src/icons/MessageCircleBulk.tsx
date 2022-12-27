// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageCircleBulkSvg from '@ant-design/icons-svg/lib/asn/MessageCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageCircleBulk: MessageCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageCircleBulkSvg}></AntdIcon>;
};

MessageCircleBulk.displayName = 'MessageCircleBulk';
MessageCircleBulk.inheritAttrs = false;
export default MessageCircleBulk;