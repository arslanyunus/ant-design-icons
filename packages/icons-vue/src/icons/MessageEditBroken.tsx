// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageEditBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageEditBroken: MessageEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageEditBrokenSvg}></AntdIcon>;
};

MessageEditBroken.displayName = 'MessageEditBroken';
MessageEditBroken.inheritAttrs = false;
export default MessageEditBroken;