// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageEditBulkSvg from '@ant-design/icons-svg/lib/asn/MessageEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageEditBulk: MessageEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageEditBulkSvg}></AntdIcon>;
};

MessageEditBulk.displayName = 'MessageEditBulk';
MessageEditBulk.inheritAttrs = false;
export default MessageEditBulk;