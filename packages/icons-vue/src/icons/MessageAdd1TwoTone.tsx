// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAdd1TwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageAdd1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAdd1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAdd1TwoTone: MessageAdd1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAdd1TwoToneSvg}></AntdIcon>;
};

MessageAdd1TwoTone.displayName = 'MessageAdd1TwoTone';
MessageAdd1TwoTone.inheritAttrs = false;
export default MessageAdd1TwoTone;