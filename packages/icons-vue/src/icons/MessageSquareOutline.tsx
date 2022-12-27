// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSquareOutline: MessageSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSquareOutlineSvg}></AntdIcon>;
};

MessageSquareOutline.displayName = 'MessageSquareOutline';
MessageSquareOutline.inheritAttrs = false;
export default MessageSquareOutline;