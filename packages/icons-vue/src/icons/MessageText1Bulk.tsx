// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageText1BulkSvg from '@ant-design/icons-svg/lib/asn/MessageText1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageText1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageText1Bulk: MessageText1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageText1BulkSvg}></AntdIcon>;
};

MessageText1Bulk.displayName = 'MessageText1Bulk';
MessageText1Bulk.inheritAttrs = false;
export default MessageText1Bulk;