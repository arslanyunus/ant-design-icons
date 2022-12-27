// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessagesBrokenSvg from '@ant-design/icons-svg/lib/asn/MessagesBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessagesBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessagesBroken: MessagesBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessagesBrokenSvg}></AntdIcon>;
};

MessagesBroken.displayName = 'MessagesBroken';
MessagesBroken.inheritAttrs = false;
export default MessagesBroken;