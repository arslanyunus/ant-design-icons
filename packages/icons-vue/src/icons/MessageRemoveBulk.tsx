// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/MessageRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageRemoveBulk: MessageRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageRemoveBulkSvg}></AntdIcon>;
};

MessageRemoveBulk.displayName = 'MessageRemoveBulk';
MessageRemoveBulk.inheritAttrs = false;
export default MessageRemoveBulk;