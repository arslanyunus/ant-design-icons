// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAdd1BrokenSvg from '@ant-design/icons-svg/lib/asn/MessageAdd1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAdd1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAdd1Broken: MessageAdd1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAdd1BrokenSvg}></AntdIcon>;
};

MessageAdd1Broken.displayName = 'MessageAdd1Broken';
MessageAdd1Broken.inheritAttrs = false;
export default MessageAdd1Broken;