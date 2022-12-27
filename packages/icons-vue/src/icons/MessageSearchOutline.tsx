// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageSearchOutline: MessageSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageSearchOutlineSvg}></AntdIcon>;
};

MessageSearchOutline.displayName = 'MessageSearchOutline';
MessageSearchOutline.inheritAttrs = false;
export default MessageSearchOutline;