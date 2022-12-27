// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTextBoldSvg from '@ant-design/icons-svg/lib/asn/MessageTextBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTextBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTextBold: MessageTextBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTextBoldSvg}></AntdIcon>;
};

MessageTextBold.displayName = 'MessageTextBold';
MessageTextBold.inheritAttrs = false;
export default MessageTextBold;