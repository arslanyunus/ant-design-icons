// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSearchBroken: MessageSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSearchBrokenSvg}></AntdIcon>;
};

MessageSearchBroken.displayName = 'MessageSearchBroken';
MessageSearchBroken.inheritAttrs = false;
export default MessageSearchBroken;