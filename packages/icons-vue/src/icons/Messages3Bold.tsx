// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages3BoldSvg from '@ant-design/icons-svg/lib/asn/Messages3Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages3BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages3Bold: Messages3BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages3BoldSvg}></AntdIcon>;
};

Messages3Bold.displayName = 'Messages3Bold';
Messages3Bold.inheritAttrs = false;
export default Messages3Bold;