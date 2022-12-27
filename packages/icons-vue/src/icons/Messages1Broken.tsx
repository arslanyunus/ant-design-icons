// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Messages1BrokenSvg from '@ant-design/icons-svg/lib/asn/Messages1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Messages1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Messages1Broken: Messages1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Messages1BrokenSvg}></AntdIcon>;
};

Messages1Broken.displayName = 'Messages1Broken';
Messages1Broken.inheritAttrs = false;
export default Messages1Broken;