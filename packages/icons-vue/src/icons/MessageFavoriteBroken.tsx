// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageFavoriteBrokenSvg from '@ant-design/icons-svg/lib/asn/MessageFavoriteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageFavoriteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageFavoriteBroken: MessageFavoriteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageFavoriteBrokenSvg}></AntdIcon>;
};

MessageFavoriteBroken.displayName = 'MessageFavoriteBroken';
MessageFavoriteBroken.inheritAttrs = false;
export default MessageFavoriteBroken;