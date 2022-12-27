// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAdd1BoldSvg from '@ant-design/icons-svg/lib/asn/MessageAdd1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAdd1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAdd1Bold: MessageAdd1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAdd1BoldSvg}></AntdIcon>;
};

MessageAdd1Bold.displayName = 'MessageAdd1Bold';
MessageAdd1Bold.inheritAttrs = false;
export default MessageAdd1Bold;