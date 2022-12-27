// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAddBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAddBroken: MessageAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAddBrokenSvg}></AntdIcon>;
};

MessageAddBroken.displayName = 'MessageAddBroken';
MessageAddBroken.inheritAttrs = false;
export default MessageAddBroken;