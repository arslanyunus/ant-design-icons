// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAdd1BulkSvg from '@ant-design/icons-svg/lib/asn/MessageAdd1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAdd1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAdd1Bulk: MessageAdd1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAdd1BulkSvg}></AntdIcon>;
};

MessageAdd1Bulk.displayName = 'MessageAdd1Bulk';
MessageAdd1Bulk.inheritAttrs = false;
export default MessageAdd1Bulk;