// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CallReceivedOutlineSvg from '@ant-design/icons-svg/lib/asn/CallReceivedOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CallReceivedOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CallReceivedOutline: CallReceivedOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CallReceivedOutlineSvg}></AntdIcon>;
};

CallReceivedOutline.displayName = 'CallReceivedOutline';
CallReceivedOutline.inheritAttrs = false;
export default CallReceivedOutline;