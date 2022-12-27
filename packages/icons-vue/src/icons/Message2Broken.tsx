// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Message2BrokenSvg from '@ant-design/icons-svg/lib/asn/Message2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Message2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Message2Broken: Message2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Message2BrokenSvg}></AntdIcon>;
};

Message2Broken.displayName = 'Message2Broken';
Message2Broken.inheritAttrs = false;
export default Message2Broken;