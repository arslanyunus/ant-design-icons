// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageProgrammingBulkSvg from '@ant-design/icons-svg/lib/asn/MessageProgrammingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageProgrammingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageProgrammingBulk: MessageProgrammingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageProgrammingBulkSvg}></AntdIcon>;
};

MessageProgrammingBulk.displayName = 'MessageProgrammingBulk';
MessageProgrammingBulk.inheritAttrs = false;
export default MessageProgrammingBulk;