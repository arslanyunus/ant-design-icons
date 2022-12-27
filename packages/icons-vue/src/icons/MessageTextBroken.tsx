// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTextBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageTextBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTextBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTextBroken: MessageTextBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTextBrokenSvg}></AntdIcon>;
};

MessageTextBroken.displayName = 'MessageTextBroken';
MessageTextBroken.inheritAttrs = false;
export default MessageTextBroken;