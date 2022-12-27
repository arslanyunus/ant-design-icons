// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageAddOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageAddOutline: MessageAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageAddOutlineSvg}></AntdIcon>;
};

MessageAddOutline.displayName = 'MessageAddOutline';
MessageAddOutline.inheritAttrs = false;
export default MessageAddOutline;