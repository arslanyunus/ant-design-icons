// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send2OutlineSvg from '@ant-design/icons-svg/lib/asn/Send2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send2Outline: Send2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send2OutlineSvg}></AntdIcon>;
};

Send2Outline.displayName = 'Send2Outline';
Send2Outline.inheritAttrs = false;
export default Send2Outline;