// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTimeBulkSvg from '@ant-design/icons-svg/lib/asn/MessageTimeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTimeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTimeBulk: MessageTimeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTimeBulkSvg}></AntdIcon>;
};

MessageTimeBulk.displayName = 'MessageTimeBulk';
MessageTimeBulk.inheritAttrs = false;
export default MessageTimeBulk;