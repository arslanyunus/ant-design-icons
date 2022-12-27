// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageEditBoldSvg from '@ant-design/icons-svg/lib/asn/MessageEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageEditBold: MessageEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageEditBoldSvg}></AntdIcon>;
};

MessageEditBold.displayName = 'MessageEditBold';
MessageEditBold.inheritAttrs = false;
export default MessageEditBold;