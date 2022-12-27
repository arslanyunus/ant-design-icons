// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MessageFavoriteLinearSvg from '@ant-design/icons-svg/lib/asn/MessageFavoriteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MessageFavoriteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MessageFavoriteLinear: MessageFavoriteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MessageFavoriteLinearSvg}></AntdIcon>;
};

MessageFavoriteLinear.displayName = 'MessageFavoriteLinear';
MessageFavoriteLinear.inheritAttrs = false;
export default MessageFavoriteLinear;