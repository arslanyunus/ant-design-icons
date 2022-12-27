// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageRemoveOutline: MessageRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageRemoveOutlineSvg}></AntdIcon>;
};

MessageRemoveOutline.displayName = 'MessageRemoveOutline';
MessageRemoveOutline.inheritAttrs = false;
export default MessageRemoveOutline;