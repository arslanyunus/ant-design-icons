// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAdd1LinearSvg from '@ant-design/icons-svg/lib/asn/MessageAdd1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAdd1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAdd1Linear: MessageAdd1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAdd1LinearSvg}></AntdIcon>;
};

MessageAdd1Linear.displayName = 'MessageAdd1Linear';
MessageAdd1Linear.inheritAttrs = false;
export default MessageAdd1Linear;