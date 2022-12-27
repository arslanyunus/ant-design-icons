// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send2LinearSvg from '@ant-design/icons-svg/lib/asn/Send2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send2Linear: Send2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send2LinearSvg}></AntdIcon>;
};

Send2Linear.displayName = 'Send2Linear';
Send2Linear.inheritAttrs = false;
export default Send2Linear;