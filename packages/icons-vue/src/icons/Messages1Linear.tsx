// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages1LinearSvg from '@ant-design/icons-svg/lib/asn/Messages1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages1Linear: Messages1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages1LinearSvg}></AntdIcon>;
};

Messages1Linear.displayName = 'Messages1Linear';
Messages1Linear.inheritAttrs = false;
export default Messages1Linear;