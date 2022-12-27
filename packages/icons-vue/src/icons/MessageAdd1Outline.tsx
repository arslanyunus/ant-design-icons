// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAdd1OutlineSvg from '@ant-design/icons-svg/lib/asn/MessageAdd1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAdd1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAdd1Outline: MessageAdd1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAdd1OutlineSvg}></AntdIcon>;
};

MessageAdd1Outline.displayName = 'MessageAdd1Outline';
MessageAdd1Outline.inheritAttrs = false;
export default MessageAdd1Outline;