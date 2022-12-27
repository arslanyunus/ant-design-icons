// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAddBulkSvg from '@ant-design/icons-svg/lib/asn/MessageAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAddBulk: MessageAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAddBulkSvg}></AntdIcon>;
};

MessageAddBulk.displayName = 'MessageAddBulk';
MessageAddBulk.inheritAttrs = false;
export default MessageAddBulk;