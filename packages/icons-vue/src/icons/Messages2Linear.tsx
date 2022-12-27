// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages2LinearSvg from '@ant-design/icons-svg/lib/asn/Messages2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages2Linear: Messages2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages2LinearSvg}></AntdIcon>;
};

Messages2Linear.displayName = 'Messages2Linear';
Messages2Linear.inheritAttrs = false;
export default Messages2Linear;