// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Message2BulkSvg from '@ant-design/icons-svg/lib/asn/Message2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Message2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Message2Bulk: Message2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Message2BulkSvg}></AntdIcon>;
};

Message2Bulk.displayName = 'Message2Bulk';
Message2Bulk.inheritAttrs = false;
export default Message2Bulk;