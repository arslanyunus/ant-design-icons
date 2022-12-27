// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageFavoriteOutlineSvg from '@ant-design/icons-svg/lib/asn/MessageFavoriteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageFavoriteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageFavoriteOutline: MessageFavoriteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageFavoriteOutlineSvg}></AntdIcon>;
};

MessageFavoriteOutline.displayName = 'MessageFavoriteOutline';
MessageFavoriteOutline.inheritAttrs = false;
export default MessageFavoriteOutline;