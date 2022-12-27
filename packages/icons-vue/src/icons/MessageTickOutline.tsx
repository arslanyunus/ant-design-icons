// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageTickOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageTickOutline: MessageTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageTickOutlineSvg}></AntdIcon>;
};

MessageTickOutline.displayName = 'MessageTickOutline';
MessageTickOutline.inheritAttrs = false;
export default MessageTickOutline;