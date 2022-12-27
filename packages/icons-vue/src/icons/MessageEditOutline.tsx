// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageEditOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageEditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageEditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageEditOutline: MessageEditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageEditOutlineSvg}></AntdIcon>;
};

MessageEditOutline.displayName = 'MessageEditOutline';
MessageEditOutline.inheritAttrs = false;
export default MessageEditOutline;