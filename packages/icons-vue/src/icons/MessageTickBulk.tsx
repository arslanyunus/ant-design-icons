// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTickBulkSvg from '@ant-design/icons-svg/lib/asn/MessageTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTickBulk: MessageTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTickBulkSvg}></AntdIcon>;
};

MessageTickBulk.displayName = 'MessageTickBulk';
MessageTickBulk.inheritAttrs = false;
export default MessageTickBulk;