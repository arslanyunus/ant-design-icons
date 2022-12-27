// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages3LinearSvg from '@ant-design/icons-svg/lib/asn/Messages3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages3Linear: Messages3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages3LinearSvg}></AntdIcon>;
};

Messages3Linear.displayName = 'Messages3Linear';
Messages3Linear.inheritAttrs = false;
export default Messages3Linear;