// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSearchBulkSvg from '@ant-design/icons-svg/lib/asn/MessageSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSearchBulk: MessageSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSearchBulkSvg}></AntdIcon>;
};

MessageSearchBulk.displayName = 'MessageSearchBulk';
MessageSearchBulk.inheritAttrs = false;
export default MessageSearchBulk;