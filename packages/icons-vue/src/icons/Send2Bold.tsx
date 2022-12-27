// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send2BoldSvg from '@ant-design/icons-svg/lib/asn/Send2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send2Bold: Send2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send2BoldSvg}></AntdIcon>;
};

Send2Bold.displayName = 'Send2Bold';
Send2Bold.inheritAttrs = false;
export default Send2Bold;