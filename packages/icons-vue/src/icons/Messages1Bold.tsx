// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages1BoldSvg from '@ant-design/icons-svg/lib/asn/Messages1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages1Bold: Messages1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages1BoldSvg}></AntdIcon>;
};

Messages1Bold.displayName = 'Messages1Bold';
Messages1Bold.inheritAttrs = false;
export default Messages1Bold;