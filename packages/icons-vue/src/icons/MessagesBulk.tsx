// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessagesBulkSvg from '@ant-design/icons-svg/lib/asn/MessagesBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessagesBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessagesBulk: MessagesBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessagesBulkSvg}></AntdIcon>;
};

MessagesBulk.displayName = 'MessagesBulk';
MessagesBulk.inheritAttrs = false;
export default MessagesBulk;