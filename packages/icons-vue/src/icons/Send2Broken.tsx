// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send2BrokenSvg from '@ant-design/icons-svg/lib/asn/Send2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send2Broken: Send2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send2BrokenSvg}></AntdIcon>;
};

Send2Broken.displayName = 'Send2Broken';
Send2Broken.inheritAttrs = false;
export default Send2Broken;